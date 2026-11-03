import { usePageMeta } from '../hooks/usePageMeta'

export const PrivacyPage = () => {
  usePageMeta('Privacy Policy', 'Editable privacy policy template for brokerage/legal review.')
  return (
    <section className="space-y-4 rounded-xl bg-white p-7">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-warm-700">Placeholder: This policy must be reviewed and approved by brokerage and legal counsel before publication.</p>
      <p className="text-warm-700">Include details on data collection, lead handling, retention, third-party services, and user rights.</p>
    </section>
  )
}
