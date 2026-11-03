import { isLeadDemoMode } from '../../services/leadService'

export const LeadFormNotice = () => (
  <p className="rounded-md border border-gold-300 bg-gold-100 px-4 py-3 text-sm text-navy-900">
    {isLeadDemoMode()
      ? 'Demo mode is active. Form validation is fully functional, but lead storage requires Supabase configuration in environment variables.'
      : 'Secure lead submission is connected.'}
  </p>
)
