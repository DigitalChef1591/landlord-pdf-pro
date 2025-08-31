import { LIMITS } from './types';
import type { Entitlements } from './types';

/**
 * Get user limits based on their entitlements
 */
export function getUserLimits(entitlements: Entitlements | null) {
  const isPaid = entitlements?.paid ?? false;
  return isPaid ? LIMITS.PAID : LIMITS.UNPAID;
}

/**
 * Check if user can add more photos to an inspection
 */
export function canAddPhoto(currentPhotoCount: number, entitlements: Entitlements | null): boolean {
  const limits = getUserLimits(entitlements);
  return currentPhotoCount < limits.MAX_PHOTOS_PER_INSPECTION;
}

/**
 * Check if user can export (based on daily limit)
 */
export function canExport(todayExportCount: number, entitlements: Entitlements | null): boolean {
  const limits = getUserLimits(entitlements);
  return todayExportCount < limits.MAX_EXPORTS_PER_DAY;
}

/**
 * Check if exports should be watermarked
 */
export function shouldWatermark(entitlements: Entitlements | null): boolean {
  const limits = getUserLimits(entitlements);
  return limits.WATERMARK;
}

/**
 * Generate a storage path for a file
 */
export function generateStoragePath(
  type: 'photos' | 'signatures' | 'exports',
  userId: string,
  inspectionId: string,
  filename: string
): string {
  return `${type}/${userId}/${inspectionId}/${filename}`;
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format date for input fields
 */
export function formatDateForInput(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
}

/**
 * Generate a unique filename with timestamp
 */
export function generateFilename(extension: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${timestamp}_${random}.${extension}`;
}

/**
 * Compress image dimensions while maintaining aspect ratio
 */
export function calculateCompressedDimensions(
  originalWidth: number,
  originalHeight: number,
  maxDimension: number = 1600
): { width: number; height: number } {
  if (originalWidth <= maxDimension && originalHeight <= maxDimension) {
    return { width: originalWidth, height: originalHeight };
  }

  const aspectRatio = originalWidth / originalHeight;
  
  if (originalWidth > originalHeight) {
    return {
      width: maxDimension,
      height: Math.round(maxDimension / aspectRatio),
    };
  } else {
    return {
      width: Math.round(maxDimension * aspectRatio),
      height: maxDimension,
    };
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate a slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Deep clone an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as unknown as T;
  }
  
  const cloned = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  
  return cloned;
}
