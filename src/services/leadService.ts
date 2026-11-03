import { createClient } from '@supabase/supabase-js'
import type { LeadSubmission } from '../types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

export const isLeadDemoMode = () => !supabase

export const submitLead = async (lead: Omit<LeadSubmission, 'id' | 'submissionDate' | 'leadStatus'>) => {
  if (!supabase) {
    return {
      success: true,
      mode: 'demo' as const,
      message: 'Demo mode: lead capture backend is not configured yet.',
    }
  }

  const { error } = await supabase.from('leads').insert({
    ...lead,
    submission_date: new Date().toISOString(),
    lead_status: 'New',
  })

  if (error) {
    return {
      success: false,
      mode: 'supabase' as const,
      message: 'Unable to submit right now. Please call or email directly.',
    }
  }

  return { success: true, mode: 'supabase' as const, message: 'Lead submitted successfully.' }
}
