import { createClient } from '@supabase/supabase-js'
import { createBrowserClient, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Browser client for client components
export function createSupabaseBrowserClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

// Server client for server components and API routes
export async function createSupabaseServerClient() {
  const cookieStore = await cookies()
  
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: '', ...options })
      },
    },
  })
}

// Database types
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      entitlements: {
        Row: {
          user_id: string
          paid: boolean
          source: string | null
          updated_at: string
        }
        Insert: {
          user_id: string
          paid?: boolean
          source?: string | null
          updated_at?: string
        }
        Update: {
          user_id?: string
          paid?: boolean
          source?: string | null
          updated_at?: string
        }
      }
      properties: {
        Row: {
          id: string
          user_id: string
          name: string
          address: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          address: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          address?: string
          created_at?: string
        }
      }
      inspections: {
        Row: {
          id: string
          user_id: string
          property_id: string
          type: 'move_in' | 'move_out'
          date: string
          notes: string | null
          payload: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id: string
          type: 'move_in' | 'move_out'
          date: string
          notes?: string | null
          payload: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string
          type?: 'move_in' | 'move_out'
          date?: string
          notes?: string | null
          payload?: any
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
