/**
 * Mock booking data for admin demo when DB has no data or is not connected.
 * Used so the client can see how the portal works.
 */

export const MOCK_BOOKING_IDS = ['mock-demo-1', 'mock-demo-2', 'mock-demo-3'] as const

export type MockBookingRow = {
  id: string
  guestName: string
  guestEmail: string
  checkIn: string
  checkOut: string
  unitName: string
  totalGuests: number
  totalPrice: number
  status: string
}

export type MockBookingDetail = MockBookingRow & {
  guestPhone: string | null
  specialRequests: string | null
  internalNotes: string | null
  createdAt: string
  emailLogs: Array<{ id: string; subject: string; body: string; sentAt: string; direction: string }>
}

const MOCK_LIST: MockBookingRow[] = [
  {
    id: 'mock-demo-1',
    guestName: 'Sarah van der Berg',
    guestEmail: 'sarah.vdb@example.com',
    checkIn: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    checkOut: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    unitName: "Hunter's House",
    totalGuests: 8,
    totalPrice: 0,
    status: 'PENDING',
  },
  {
    id: 'mock-demo-2',
    guestName: 'James & Emma Thompson',
    guestEmail: 'james.t@example.co.za',
    checkIn: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    checkOut: new Date(Date.now() + 31 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    unitName: 'Rooibok Kraal',
    totalGuests: 4,
    totalPrice: 0,
    status: 'CONFIRMED',
  },
  {
    id: 'mock-demo-3',
    guestName: 'Pieter Kruger',
    guestEmail: 'pieter.k@example.com',
    checkIn: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    checkOut: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    unitName: "Hunter's House",
    totalGuests: 12,
    totalPrice: 0,
    status: 'CONFIRMED',
  },
]

const MOCK_DETAILS: Record<string, MockBookingDetail> = {
  'mock-demo-1': {
    ...MOCK_LIST[0],
    checkIn: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    checkOut: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000).toISOString(),
    guestPhone: '+27 82 123 4567',
    specialRequests: 'Late check-in around 18:00. One vegetarian in the group.',
    internalNotes: 'Sent pricing. Awaiting deposit.',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    emailLogs: [
      {
        id: 'mock-email-1',
        subject: "MIWESU booking enquiry – Hunter's House",
        body: 'Hi Sarah,\n\nThank you for your enquiry. We have availability for your dates. Please find our rates and payment details attached. Let us know if you have any questions.\n\nBest,\nWayne & Melissa',
        sentAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        direction: 'outbound',
      },
    ],
  },
  'mock-demo-2': {
    ...MOCK_LIST[1],
    checkIn: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
    checkOut: new Date(Date.now() + 31 * 24 * 60 * 60 * 1000).toISOString(),
    guestPhone: null,
    specialRequests: null,
    internalNotes: '50% deposit received. Balance due on arrival.',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    emailLogs: [
      {
        id: 'mock-email-2b',
        subject: 'Booking confirmed – Rooibok Kraal',
        body: 'Dear James & Emma,\n\nYour stay is confirmed. We look forward to welcoming you.\n\nMIWESU Game Farm',
        sentAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        direction: 'outbound',
      },
      {
        id: 'mock-email-2a',
        subject: 'Re: Rooibok Kraal availability',
        body: 'Hi,\n\nPlease find our invoice attached. Bank details are in the PDF.\n\nThanks,\nWayne & Melissa',
        sentAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        direction: 'outbound',
      },
    ],
  },
  'mock-demo-3': {
    ...MOCK_LIST[2],
    checkIn: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    checkOut: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    guestPhone: '+27 71 555 1234',
    specialRequests: 'Hunting group. Early breakfast preferred.',
    internalNotes: 'Completed stay. All settled.',
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    emailLogs: [],
  },
}

export function getMockBookingRows(statusFilter?: string): MockBookingRow[] {
  let rows = MOCK_LIST.map((r) => ({
    ...r,
    checkIn: new Date(r.checkIn + 'T12:00:00Z').toISOString(),
    checkOut: new Date(r.checkOut + 'T10:00:00Z').toISOString(),
  }))
  if (statusFilter && ['PENDING', 'CONFIRMED', 'CANCELLED'].includes(statusFilter)) {
    rows = rows.filter((r) => r.status === statusFilter)
  }
  return rows
}

export function isMockBookingId(id: string): boolean {
  return MOCK_BOOKING_IDS.includes(id as (typeof MOCK_BOOKING_IDS)[number])
}

export function getMockBookingDetail(id: string): MockBookingDetail | null {
  return MOCK_DETAILS[id] ?? null
}
