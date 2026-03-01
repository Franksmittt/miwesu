import { NextRequest, NextResponse } from 'next/server'

const WOOD_ORDER_EMAIL = process.env.WOOD_ORDER_EMAIL || 'guardians@miwesu.com'

function corsHeaders(origin: string | null): HeadersInit {
  const allow = process.env.WOOD_ORDER_CORS_ORIGIN || origin || '*'
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders(null) })
}

export interface WoodOrderPayload {
  name: string
  email: string
  phone: string
  address: string
  productId: string
  productName: string
  quantity: number
  notes?: string
}

function validate(body: unknown): body is WoodOrderPayload {
  if (!body || typeof body !== 'object') return false
  const b = body as Record<string, unknown>
  return (
    typeof b.name === 'string' && b.name.trim().length > 0 &&
    typeof b.email === 'string' && b.email.trim().length > 0 &&
    typeof b.phone === 'string' && b.phone.trim().length > 0 &&
    typeof b.address === 'string' && b.address.trim().length > 0 &&
    typeof b.productId === 'string' && b.productId.trim().length > 0 &&
    typeof b.productName === 'string' && b.productName.trim().length > 0 &&
    typeof b.quantity === 'number' && b.quantity >= 1
  )
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') ?? null
  const headers = corsHeaders(origin)
  try {
    const body = await request.json()
    if (!validate(body)) {
      return NextResponse.json(
        { success: false, error: 'Missing or invalid fields' },
        { status: 400, headers }
      )
    }

    const { name, email, phone, address, productId, productName, quantity, notes } = body as WoodOrderPayload

    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const { Resend } = await import('resend')
      const resendClient = new Resend(resendApiKey)
      const from = process.env.RESEND_FROM_EMAIL || 'Wood Orders <onboarding@resend.dev>'
      const { error } = await resendClient.emails.send({
        from,
        to: WOOD_ORDER_EMAIL,
        subject: `Wood order request: ${productName} × ${quantity} from ${name}`,
        html: [
          '<h2>New thermal wood order request</h2>',
          '<p><strong>Name:</strong> ' + escapeHtml(name) + '</p>',
          '<p><strong>Email:</strong> ' + escapeHtml(email) + '</p>',
          '<p><strong>Phone:</strong> ' + escapeHtml(phone) + '</p>',
          '<p><strong>Delivery address:</strong><br>' + escapeHtml(address) + '</p>',
          '<p><strong>Product:</strong> ' + escapeHtml(productName) + ' (ID: ' + escapeHtml(productId) + ')</p>',
          '<p><strong>Quantity:</strong> ' + String(quantity) + ' bags</p>',
          notes ? '<p><strong>Notes:</strong><br>' + escapeHtml(notes) + '</p>' : '',
          '<p> - Contact the client to confirm and arrange delivery (Gauteng, COD).</p>',
        ].join(''),
      })
      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json(
          { success: false, error: 'Failed to send order notification' },
          { status: 500, headers }
        )
      }
    } else {
      console.log('Wood order (no RESEND_API_KEY):', { name, email, phone, address, productId, productName, quantity, notes })
    }

    return NextResponse.json({ success: true }, { headers })
  } catch (e) {
    console.error('Wood order API error:', e)
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500, headers }
    )
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
