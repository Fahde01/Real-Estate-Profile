import { Equal } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

export const FairHousingPage = () => {
  usePageMeta('Fair Housing / Equal Housing Opportunity', 'Fair housing commitment and equal housing opportunity information.')
  return (
    <section className="space-y-4 rounded-xl bg-white p-7">
      <h1 className="flex items-center gap-2 text-4xl font-bold"><Equal className="h-8 w-8" />Fair Housing / Equal Housing Opportunity</h1>
      <p className="text-warm-700">We support Fair Housing principles and Equal Housing Opportunity.</p>
      <p className="text-warm-700">Placeholder: Add brokerage-approved fair housing disclosures and any required office-specific language.</p>
    </section>
  )
}
