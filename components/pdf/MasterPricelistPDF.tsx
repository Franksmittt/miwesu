import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'

// Use built-in PDF fonts only so generation works in serverless (no network font fetch).
const fontTitle = 'Helvetica-Bold'
const fontBody = 'Helvetica'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0A0A0A',
    color: '#E0E0E0',
    padding: 40,
    fontFamily: fontBody,
  },
  headerContainer: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#D4AF37',
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  brandTitle: {
    fontFamily: fontTitle,
    fontSize: 28,
    color: '#D4AF37',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 10,
    color: '#A0A0A0',
    marginTop: 4,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  dateText: {
    fontSize: 10,
    color: '#D4AF37',
  },
  sectionTitle: {
    fontFamily: fontTitle,
    fontSize: 18,
    color: '#F3E5AB',
    marginTop: 20,
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333333',
    paddingBottom: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bentoCard: {
    width: '48%',
    backgroundColor: '#141414',
    padding: 15,
    marginBottom: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  itemName: {
    fontFamily: fontTitle,
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  priceLabel: {
    fontSize: 10,
    color: '#888888',
  },
  priceValueZAR: {
    fontSize: 12,
    fontWeight: 600,
    color: '#E0E0E0',
  },
  priceValueUSD: {
    fontSize: 12,
    fontWeight: 600,
    color: '#D4AF37',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#666666',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    paddingTop: 10,
  },
})

export type RateItemPDF = {
  id: string
  name: string
  category: 'ACCOMMODATION' | 'SPECIES' | 'ACTIVITY' | 'EXTRA'
  priceZAR: number
  priceUSD: number
}

interface MasterPricelistPDFProps {
  items: RateItemPDF[]
  generatedAt: string
}

export function MasterPricelistPDF({ items, generatedAt }: MasterPricelistPDFProps) {
  const accommodations = items.filter((i) => i.category === 'ACCOMMODATION')
  const species = items.filter((i) => i.category === 'SPECIES')
  const activities = items.filter((i) => i.category === 'ACTIVITY')
  const extras = items.filter((i) => i.category === 'EXTRA')

  const renderCard = (item: RateItemPDF) => (
    <View style={styles.bentoCard} key={item.id}>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>ZAR</Text>
        <Text style={styles.priceValueZAR}>R {item.priceZAR.toLocaleString()}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>USD</Text>
        <Text style={styles.priceValueUSD}>$ {item.priceUSD.toLocaleString()}</Text>
      </View>
    </View>
  )

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.brandTitle}>MIWESU</Text>
            <Text style={styles.subtitle}>Iron Eden · Official Rates</Text>
          </View>
          <Text style={styles.dateText}>Valid as of: {generatedAt}</Text>
        </View>

        {accommodations.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Private Residences</Text>
            <View style={styles.gridContainer}>
              {accommodations.map(renderCard)}
            </View>
          </View>
        )}

        {species.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Conservation Harvest (Species)</Text>
            <View style={styles.gridContainer}>
              {species.map(renderCard)}
            </View>
          </View>
        )}

        {(activities.length > 0 || extras.length > 0) && (
          <View>
            <Text style={styles.sectionTitle}>Experiences & Extras</Text>
            <View style={styles.gridContainer}>
              {activities.map(renderCard)}
              {extras.map(renderCard)}
            </View>
          </View>
        )}

        <Text style={styles.footer}>
          MIWESU Game Farm · Makoppa District, Thabazimbi, South Africa · All rates subject to change without prior notice.
        </Text>
      </Page>
    </Document>
  )
}
