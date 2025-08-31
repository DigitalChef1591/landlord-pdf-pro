import React from 'react';
import { pdf } from '@react-pdf/renderer';
import type { Inspection, Property, Photo, Signature } from '@landlord/core';
import { InspectionDocument } from './InspectionDocument';

/**
 * Generate PDF buffer from inspection data
 */
export async function generateInspectionPDF(
  inspection: Inspection,
  property: Property,
  photos: Photo[],
  signatures: Signature[],
  showWatermark: boolean = false
): Promise<ReadableStream<any>> {
  const document = React.createElement(InspectionDocument, {
    inspection,
    property,
    photos,
    signatures,
    showWatermark,
  });

  const pdfBuffer = await pdf(document).toBuffer();
  return pdfBuffer;
}

/**
 * Generate PDF blob for client-side download
 */
export async function generateInspectionPDFBlob(
  inspection: Inspection,
  property: Property,
  photos: Photo[],
  signatures: Signature[],
  showWatermark: boolean = false
): Promise<Blob> {
  const document = React.createElement(InspectionDocument, {
    inspection,
    property,
    photos,
    signatures,
    showWatermark,
  });

  const pdfBlob = await pdf(document).toBlob();
  return pdfBlob;
}

/**
 * Estimate PDF file size (rough calculation)
 */
export function estimatePDFSize(
  inspection: Inspection,
  photos: Photo[]
): number {
  // Base size for document structure (KB)
  let estimatedSize = 50;
  
  // Add size for each room/page
  estimatedSize += inspection.payload.rooms.length * 10;
  
  // Add size for photos (assuming compressed to ~100KB each)
  estimatedSize += photos.length * 100;
  
  // Convert to bytes
  return estimatedSize * 1024;
}

/**
 * Validate PDF generation requirements
 */
export function validatePDFRequirements(
  inspection: Inspection,
  property: Property
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!inspection.payload.rooms || inspection.payload.rooms.length === 0) {
    errors.push('Inspection must have at least one room');
  }

  if (!property.name || property.name.trim() === '') {
    errors.push('Property name is required');
  }

  if (!property.address || property.address.trim() === '') {
    errors.push('Property address is required');
  }

  if (!inspection.date) {
    errors.push('Inspection date is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Generate filename for PDF export
 */
export function generatePDFFilename(
  inspection: Inspection,
  property: Property
): string {
  const date = new Date(inspection.date).toISOString().split('T')[0] || '';
  const type = inspection.type === 'move_in' ? 'MoveIn' : 'MoveOut';
  const propertyName = property.name.replace(/[^a-zA-Z0-9]/g, '_');
  
  return `${type}_Inspection_${propertyName}_${date}.pdf`;
}

/**
 * Check if PDF size is within limits
 */
export function isPDFSizeValid(sizeInBytes: number, maxSizeInMB: number = 10): boolean {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return sizeInBytes <= maxSizeInBytes;
}
