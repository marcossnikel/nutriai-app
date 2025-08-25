import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Types for our database tables
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          apple_id: string | null
          phone_number: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email?: string | null
          full_name?: string | null
          apple_id?: string | null
          phone_number?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          apple_id?: string | null
          phone_number?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_profiles: {
        Row: {
          id: string
          user_id: string
          age: number | null
          weight: number | null
          height: number | null
          fitness_level: string | null
          diseases: string[] | null
          water_intake: number | null
          food_preferences: string[] | null
          allergies: string[] | null
          objectives: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          age?: number | null
          weight?: number | null
          height?: number | null
          fitness_level?: string | null
          diseases?: string[] | null
          water_intake?: number | null
          food_preferences?: string[] | null
          allergies?: string[] | null
          objectives?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          age?: number | null
          weight?: number | null
          height?: number | null
          fitness_level?: string | null
          diseases?: string[] | null
          water_intake?: number | null
          food_preferences?: string[] | null
          allergies?: string[] | null
          objectives?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}