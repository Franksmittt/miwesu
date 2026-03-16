import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'

// A4 = 210mm x 297mm (595.28 x 841.89 points)
const PADDING = 40
const CARD_HEIGHT = 58

const fontTitle = 'Helvetica-Bold'
const fontBody = 'Helvetica'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0A0A0A',
    color: '#E0E0E0',
    padding: PADDING,
    fontFamily: fontBody,
  },
  headerContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D4AF37',
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  brandTitle: {
    fontFamily: fontTitle,
    fontSize: 22,
    color: '#D4AF37',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 8,
    color: '#A0A0A0',
    marginTop: 2,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  dateText: {
    fontSize: 8,
    color: '#D4AF37',
  },
  sectionTitle: {
    fontFamily: fontTitle,
    fontSize: 12,
    color: '#F3E5AB',
    marginTop: 12,
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333333',
    paddingBottom: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bentoCard: {
    width: '48%',
    minHeight: CARD_HEIGHT,
    backgroundColor: '#141414',
    padding: 8,
    marginBottom: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  itemName: {
    fontFamily: fontTitle,
    fontSize: 10,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  itemDesc: {
    fontSize: 7,
    color: '#888888',
    marginBottom: 2,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  priceLabel: {
    fontSize: 7,
    color: '#888888',
  },
  priceValueZAR: {
    fontSize: 9,
    fontWeight: 600,
    color: '#E0E0E0',
  },
  priceValueUSD: {
    fontSize: 9,
    fontWeight: 600,
    color: '#D4AF37',
  },
  footer: {
    position: 'absolute',
    bottom: PADDING,
    left: PADDING,
    right: PADDING,
    textAlign: 'center',
    fontSize: 7,
    color: '#666666',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    paddingTop: 6,
  },
  continuedHeader: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continuedText: {
    fontSize: 8,
    color: '#A0A0A0',
    textTransform: 'uppercase',
  },
})

export type RateItemPDF = {
  id: string
  name: string
  description?: string | null
  category: 'ACCOMMODATION' | 'SPECIES' | 'ACTIVITY' | 'EXTRA'
  priceZAR: number
  priceUSD: number
}

interface MasterPricelistPDFProps {
  items: RateItemPDF[]
  generatedAt: string
}

const SPECIES_PER_FIRST_PAGE = 14

export function MasterPricelistPDF({ items, generatedAt }: MasterPricelistPDFProps) {
  const accommodations = items.filter((i) => i.category === 'ACCOMMODATION')
  const species = items.filter((i) => i.category === 'SPECIES')
  const activities = items.filter((i) => i.category === 'ACTIVITY')
  const extras = items.filter((i) => i.category === 'EXTRA')

  const speciesPage1 = species.slice(0, SPECIES_PER_FIRST_PAGE)
  const speciesPage2 = species.slice(SPECIES_PER_FIRST_PAGE)

  const renderCard = (item: RateItemPDF) => (
    <View style={styles.bentoCard} key={item.id} wrap={false}>
      <Text style={styles.itemName}>{item.name}</Text>
      {item.description ? (
        <Text style={styles.itemDesc}>{item.description}</Text>
      ) : null}
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>ZAR</Text>
        <Text style={styles.priceValueZAR}>
          {item.priceZAR > 0 ? `R ${item.priceZAR.toLocaleString()}` : 'On request'}
        </Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>USD</Text>
        <Text style={styles.priceValueUSD}>
          {item.priceUSD > 0 ? `$ ${item.priceUSD.toLocaleString()}` : '—'}
        </Text>
      </View>
    </View>
  )

  const header = (
    <View style={styles.headerContainer} fixed>
      <View>
        <Text style={styles.brandTitle}>MIWESU</Text>
        <Text style={styles.subtitle}>Iron Eden · Rooibok Kraal · 50km from Thabazimbi (Dwaalboom road)</Text>
      </View>
      <Text style={styles.dateText}>Valid: {generatedAt}</Text>
    </View>
  )

  const footerEl = (
    <Text style={styles.footer} fixed>
      MIWESU Game Farm · Makoppa District, Thabazimbi · All rates subject to availability. Wounded animals full price. Missed/dust/warning shots R250.
    </Text>
  )

  return (
    <Document>
      {/* Page 1: Header + Accommodation + first block of Species */}
      <Page size="A4" style={styles.page}>
        {header}
        {accommodations.length > 0 && (
          <View wrap={false}>
            <Text style={styles.sectionTitle}>Private Residences</Text>
            <View style={styles.gridContainer}>{accommodations.map(renderCard)}</View>
          </View>
        )}
        {species.length > 0 && (
          <View wrap={false}>
            <Text style={styles.sectionTitle}>Conservation Harvest (Species)</Text>
            <View style={styles.gridContainer}>{speciesPage1.map(renderCard)}</View>
          </View>
        )}
        {footerEl}
      </Page>

      {/* Page 2: Remaining species (if any) + Experiences & Extras */}
      {(speciesPage2.length > 0 || activities.length > 0 || extras.length > 0) && (
        <Page size="A4" style={styles.page}>
          <View style={styles.continuedHeader}>
            <Text style={styles.brandTitle}>MIWESU</Text>
            <Text style={styles.continuedText}>Rates (continued)</Text>
            <Text style={styles.dateText}>{generatedAt}</Text>
          </View>
          {speciesPage2.length > 0 && (
            <View wrap={false}>
              <Text style={styles.sectionTitle}>Conservation Harvest (Species)</Text>
              <View style={styles.gridContainer}>{speciesPage2.map(renderCard)}</View>
            </View>
          )}
          {(activities.length > 0 || extras.length > 0) && (
            <View wrap={false}>
              <Text style={styles.sectionTitle}>Experiences & Extras (Wood, vehicle)</Text>
              <View style={styles.gridContainer}>
                {activities.map(renderCard)}
                {extras.map(renderCard)}
              </View>
            </View>
          )}
          {footerEl}
        </Page>
      )}
    </Document>
  )
}
