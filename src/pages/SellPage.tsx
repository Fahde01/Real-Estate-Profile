import { SellerLeadForm } from '../components/forms/SellerLeadForm'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { usePageMeta } from '../hooks/usePageMeta'

const faqs = [
  { question: 'What is a CMA?', answer: 'A Comparative Market Analysis uses comparable property data to estimate value range. It is not an appraisal and does not guarantee final sale price.' },
  { question: 'How should I prepare my home?', answer: 'Common steps include repairs, decluttering, and presentation improvements aligned with your pricing and marketing strategy.' },
  { question: 'Do timelines vary?', answer: 'Yes. Market conditions, property condition, pricing, and buyer financing all affect selling timelines.' },
]

export const SellPage = () => {
  usePageMeta('Sell Your Home in Chicago', 'Seller consultation, CMA request, pricing strategy guidance, and seller lead intake form.')

  return (
    <div className="space-y-10">
      <section className="rounded-xl bg-navy-950 p-8 text-white">
        <h1 className="text-4xl font-bold">Thinking About Selling Your Home?</h1>
        <p className="mt-3 text-warm-100">Get a complimentary comparative market analysis, strategic pricing guidance, and a focused marketing plan.</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <p className="rounded-lg border border-warm-200 bg-white p-5 text-warm-700">Consultation includes preparation guidance, pricing approach, and timeline planning.</p>
        <p className="rounded-lg border border-warm-200 bg-white p-5 text-warm-700">A CMA is not an appraisal and does not guarantee a sale price.</p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Request Home Valuation</h2>
        <SellerLeadForm />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Seller FAQs</h2>
        <FAQAccordion items={faqs} />
      </section>
    </div>
  )
}
