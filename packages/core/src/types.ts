import { z } from 'zod';

// Database types
export type InspectionType = 'move_in' | 'move_out';
export type SignatureWho = 'tenant' | 'landlord';

// User schema
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  created_at: z.string().datetime(),
});

export type User = z.infer<typeof UserSchema>;

// Entitlements schema
export const EntitlementsSchema = z.object({
  user_id: z.string().uuid(),
  paid: z.boolean().default(false),
  source: z.enum(['stripe', 'revenuecat']).nullable(),
  updated_at: z.string().datetime(),
});

export type Entitlements = z.infer<typeof EntitlementsSchema>;

// Property schema
export const PropertySchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  name: z.string().min(1),
  address: z.string().min(1),
  created_at: z.string().datetime(),
});

export type Property = z.infer<typeof PropertySchema>;

// Room and item schemas
export const ItemConditionSchema = z.object({
  item: z.string(),
  condition: z.enum(['good', 'needs_repair', 'na']),
  notes: z.string().optional(),
  photos: z.array(z.string()).default([]),
});

export type ItemCondition = z.infer<typeof ItemConditionSchema>;

export const RoomSchema = z.object({
  name: z.string(),
  items: z.array(ItemConditionSchema),
});

export type Room = z.infer<typeof RoomSchema>;

export const InspectionPayloadSchema = z.object({
  rooms: z.array(RoomSchema),
  tenant_name: z.string().optional(),
  landlord_name: z.string().optional(),
  business_name: z.string().optional(),
  business_logo: z.string().optional(),
});

export type InspectionPayload = z.infer<typeof InspectionPayloadSchema>;

// Inspection schema
export const InspectionSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  property_id: z.string().uuid(),
  type: z.enum(['move_in', 'move_out']),
  date: z.string().date(),
  notes: z.string().optional(),
  payload: InspectionPayloadSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type Inspection = z.infer<typeof InspectionSchema>;

// Photo schema
export const PhotoSchema = z.object({
  id: z.string().uuid(),
  inspection_id: z.string().uuid(),
  room: z.string(),
  item: z.string(),
  storage_path: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  created_at: z.string().datetime(),
});

export type Photo = z.infer<typeof PhotoSchema>;

// Signature schema
export const SignatureSchema = z.object({
  id: z.string().uuid(),
  inspection_id: z.string().uuid(),
  who: z.enum(['tenant', 'landlord']),
  storage_path: z.string(),
  created_at: z.string().datetime(),
});

export type Signature = z.infer<typeof SignatureSchema>;

// Export schema
export const ExportSchema = z.object({
  id: z.string().uuid(),
  inspection_id: z.string().uuid(),
  storage_path: z.string(),
  created_at: z.string().datetime(),
});

export type Export = z.infer<typeof ExportSchema>;

// Event schema for telemetry
export const EventSchema = z.object({
  id: z.number(),
  user_id: z.string().uuid().optional(),
  name: z.string(),
  meta: z.record(z.any()).optional(),
  created_at: z.string().datetime(),
});

export type Event = z.infer<typeof EventSchema>;

// Default room templates
export const DEFAULT_ROOM_TEMPLATES = [
  {
    name: 'Kitchen',
    items: [
      'Cabinets',
      'Countertops',
      'Sink',
      'Faucet',
      'Appliances',
      'Flooring',
      'Walls',
      'Ceiling',
      'Lighting',
      'Windows',
    ],
  },
  {
    name: 'Living Room',
    items: [
      'Flooring',
      'Walls',
      'Ceiling',
      'Windows',
      'Doors',
      'Lighting',
      'Electrical outlets',
      'Baseboards',
      'Trim',
    ],
  },
  {
    name: 'Bedroom',
    items: [
      'Flooring',
      'Walls',
      'Ceiling',
      'Windows',
      'Doors',
      'Closet',
      'Lighting',
      'Electrical outlets',
      'Baseboards',
    ],
  },
  {
    name: 'Bathroom',
    items: [
      'Toilet',
      'Sink',
      'Faucet',
      'Shower/Tub',
      'Tiles',
      'Flooring',
      'Walls',
      'Ceiling',
      'Mirror',
      'Lighting',
      'Ventilation',
    ],
  },
  {
    name: 'Hallway',
    items: [
      'Flooring',
      'Walls',
      'Ceiling',
      'Lighting',
      'Doors',
      'Baseboards',
      'Trim',
    ],
  },
  {
    name: 'Exterior',
    items: [
      'Front door',
      'Windows',
      'Siding',
      'Roof',
      'Gutters',
      'Driveway',
      'Walkway',
      'Landscaping',
      'Fence',
      'Mailbox',
    ],
  },
] as const;

// Limits for paid vs unpaid users
export const LIMITS = {
  UNPAID: {
    MAX_PHOTOS_PER_INSPECTION: 5,
    MAX_EXPORTS_PER_DAY: 1,
    WATERMARK: true,
  },
  PAID: {
    MAX_PHOTOS_PER_INSPECTION: 100,
    MAX_EXPORTS_PER_DAY: Infinity,
    WATERMARK: false,
  },
} as const;
