import { ConsultationForm } from '../components/forms/ConsultationForm'
import { usePageMeta } from '../hooks/usePageMeta'

export const SchedulePage = () => {
  usePageMeta('Schedule Consultation', 'Request a buyer, seller, valuation, or general real estate consultation.')

  return (
    <section className="space-y-5">
      <h1 className="text-4xl font-bold">Schedule a Consultation</h1>
      <p className="text-warm-700">Request a buyer consultation, seller consultation, home valuation consultation, or general real estate consultation.</p>
      <p className="rounded-lg border border-warm-200 bg-white p-4 text-sm text-warm-700">Calendar booking integrations (Google Calendar/Calendly) can be connected when configured. This page does not display fake availability.</p>
      <ConsultationForm />
    </section>
  )
}
