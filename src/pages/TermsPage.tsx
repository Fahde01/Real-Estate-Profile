import { usePageMeta } from '../hooks/usePageMeta'

export const TermsPage = () => {
  usePageMeta('Terms of Use', 'Editable terms of use template for brokerage/legal review.')
  return (
    <section className="space-y-4 rounded-xl bg-white p-7">
      <h1 className="text-4xl font-bold">Terms of Use</h1>
      <p className="text-warm-700">Placeholder: Legal terms must be finalized with brokerage and legal review.</p>
      <p className="text-warm-700">Include acceptable use, disclaimers, listing data limitations, and liability provisions.</p>
    </section>
  )
}
