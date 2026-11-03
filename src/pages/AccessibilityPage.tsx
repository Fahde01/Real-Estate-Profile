import { usePageMeta } from '../hooks/usePageMeta'

export const AccessibilityPage = () => {
  usePageMeta('Accessibility Statement', 'Accessibility commitment and contact instructions for accommodation requests.')
  return (
    <section className="space-y-4 rounded-xl bg-white p-7">
      <h1 className="text-4xl font-bold">Accessibility Statement</h1>
      <p className="text-warm-700">We are committed to improving accessibility and usability across this site.</p>
      <p className="text-warm-700">Placeholder: Final accessibility commitments and response timelines should be reviewed with brokerage/legal teams.</p>
    </section>
  )
}
