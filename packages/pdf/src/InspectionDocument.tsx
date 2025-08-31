import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import type { Inspection, Property, Photo, Signature } from '@landlord/core';

// Register fonts (you would need to add actual font files)
// Font.register({
//   family: 'Inter',
//   src: '/fonts/Inter-Regular.ttf',
// });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 72, // 1 inch margins
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    width: 120,
  },
  value: {
    flex: 1,
  },
  table: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 5,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: 1,
    borderBottomColor: '#eeeeee',
    padding: 5,
    minHeight: 30,
  },
  tableCell: {
    flex: 1,
    paddingRight: 5,
  },
  tableCellNarrow: {
    width: 80,
    paddingRight: 5,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  photo: {
    width: 120,
    height: 90,
    margin: 5,
    border: 1,
    borderColor: '#cccccc',
  },
  photoCaption: {
    fontSize: 8,
    textAlign: 'center',
    marginTop: 2,
  },
  signatureSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  signatureBox: {
    width: 200,
    height: 80,
    border: 1,
    borderColor: '#cccccc',
    padding: 5,
  },
  signatureLabel: {
    fontSize: 8,
    marginBottom: 5,
  },
  signatureImage: {
    width: '100%',
    height: 60,
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    fontSize: 48,
    color: '#ff0000',
    opacity: 0.3,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 72,
    right: 72,
    textAlign: 'center',
    fontSize: 8,
    color: '#666666',
  },
});

interface InspectionDocumentProps {
  inspection: Inspection;
  property: Property;
  photos: Photo[];
  signatures: Signature[];
  showWatermark?: boolean;
}

export const InspectionDocument: React.FC<InspectionDocumentProps> = ({
  inspection,
  property,
  photos,
  signatures,
  showWatermark = false,
}) => {
  const tenantSignature = signatures.find(s => s.who === 'tenant');
  const landlordSignature = signatures.find(s => s.who === 'landlord');

  const getPhotosForRoom = (roomName: string) => {
    return photos.filter(photo => photo.room === roomName);
  };

  const getPhotosForItem = (roomName: string, itemName: string) => {
    return photos.filter(photo => photo.room === roomName && photo.item === itemName);
  };

  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.page}>
        {showWatermark && (
          <Text style={styles.watermark}>DEMO – NOT FOR OFFICIAL USE</Text>
        )}
        
        <View style={styles.header}>
          {inspection.payload.business_logo && (
            <Image
              src={inspection.payload.business_logo}
              style={{ width: 100, height: 50, alignSelf: 'center', marginBottom: 10 }}
            />
          )}
          <Text style={styles.title}>
            {inspection.type === 'move_in' ? 'Move-In' : 'Move-Out'} Inspection Report
          </Text>
          {inspection.payload.business_name && (
            <Text style={styles.subtitle}>{inspection.payload.business_name}</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Property Information</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Property:</Text>
            <Text style={styles.value}>{property.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{property.address}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Inspection Date:</Text>
            <Text style={styles.value}>{new Date(inspection.date).toLocaleDateString()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Inspection Type:</Text>
            <Text style={styles.value}>
              {inspection.type === 'move_in' ? 'Move-In' : 'Move-Out'}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Parties</Text>
          {inspection.payload.tenant_name && (
            <View style={styles.row}>
              <Text style={styles.label}>Tenant:</Text>
              <Text style={styles.value}>{inspection.payload.tenant_name}</Text>
            </View>
          )}
          {inspection.payload.landlord_name && (
            <View style={styles.row}>
              <Text style={styles.label}>Landlord:</Text>
              <Text style={styles.value}>{inspection.payload.landlord_name}</Text>
            </View>
          )}
        </View>

        {inspection.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>General Notes</Text>
            <Text>{inspection.notes}</Text>
          </View>
        )}

        <Text style={styles.footer}>
          Generated on {new Date().toLocaleDateString()} | Page 1
        </Text>
      </Page>

      {/* Table of Contents */}
      <Page size="A4" style={styles.page}>
        {showWatermark && (
          <Text style={styles.watermark}>DEMO – NOT FOR OFFICIAL USE</Text>
        )}
        
        <Text style={styles.sectionTitle}>Table of Contents</Text>
        
        {inspection.payload.rooms.map((room, index) => (
          <View key={room.name} style={styles.row}>
            <Text style={styles.value}>{room.name}</Text>
            <Text style={styles.label}>Page {index + 3}</Text>
          </View>
        ))}

        <Text style={styles.footer}>
          Generated on {new Date().toLocaleDateString()} | Page 2
        </Text>
      </Page>

      {/* Room Pages */}
      {inspection.payload.rooms.map((room, roomIndex) => (
        <Page key={room.name} size="A4" style={styles.page}>
          {showWatermark && (
            <Text style={styles.watermark}>DEMO – NOT FOR OFFICIAL USE</Text>
          )}
          
          <Text style={styles.sectionTitle}>{room.name}</Text>

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Item</Text>
              <Text style={styles.tableCellNarrow}>Condition</Text>
              <Text style={styles.tableCell}>Notes</Text>
            </View>
            
            {room.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.item}</Text>
                <Text style={styles.tableCellNarrow}>
                  {item.condition === 'good' ? 'Good' : 
                   item.condition === 'needs_repair' ? 'Needs Repair' : 'N/A'}
                </Text>
                <Text style={styles.tableCell}>{item.notes || ''}</Text>
              </View>
            ))}
          </View>

          {/* Photos for this room */}
          {getPhotosForRoom(room.name).length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Photos</Text>
              <View style={styles.photoGrid}>
                {getPhotosForRoom(room.name).map((photo) => (
                  <View key={photo.id}>
                    <Image src={photo.storage_path} style={styles.photo} />
                    <Text style={styles.photoCaption}>{photo.item}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          <Text style={styles.footer}>
            Generated on {new Date().toLocaleDateString()} | Page {roomIndex + 3}
          </Text>
        </Page>
      ))}

      {/* Summary and Signatures Page */}
      <Page size="A4" style={styles.page}>
        {showWatermark && (
          <Text style={styles.watermark}>DEMO – NOT FOR OFFICIAL USE</Text>
        )}
        
        <Text style={styles.sectionTitle}>Summary</Text>
        
        <View style={styles.section}>
          <Text>
            This inspection report documents the condition of the property at the time of{' '}
            {inspection.type === 'move_in' ? 'move-in' : 'move-out'}. All parties have reviewed
            and agreed to the findings documented herein.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Signatures</Text>
          
          <View style={styles.signatureSection}>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLabel}>Tenant Signature:</Text>
              {tenantSignature && (
                <Image src={tenantSignature.storage_path} style={styles.signatureImage} />
              )}
              <Text style={styles.signatureLabel}>
                Date: {new Date().toLocaleDateString()}
              </Text>
            </View>
            
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLabel}>Landlord Signature:</Text>
              {landlordSignature && (
                <Image src={landlordSignature.storage_path} style={styles.signatureImage} />
              )}
              <Text style={styles.signatureLabel}>
                Date: {new Date().toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          Generated on {new Date().toLocaleDateString()} | Final Page
        </Text>
      </Page>
    </Document>
  );
};
