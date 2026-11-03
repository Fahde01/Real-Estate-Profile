import { BuyerInquiryForm } from '../components/forms/BuyerInquiryForm'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { usePageMeta } from '../hooks/usePageMeta'

const faqs = [
  { question: 'Do I need preapproval before touring homes?', answer: 'Preapproval is strongly recommended so your budget and offer strength are clear before you move quickly on a property.' },
  { question: 'What is PITI?', answer: 'PITI stands for principal, interest, taxes, and insurance. It helps estimate monthly payment expectations.' },
  { question: 'How long does buying usually take?', answer: 'Timelines vary, but many buyers plan for home search, contract, financing, and closing milestones over several weeks to months.' },
]

export const BuyPage = () => {
  usePageMeta('Buy a Home in Chicago', 'Buyer consultation, first-time guidance, PITI education, and a complete buyer intake form.')

  return (
    <div className="space-y-10">
      <section className="rounded-xl bg-white p-7 shadow-sm">
        <h1 className="text-4xl font-bold text-navy-900">Buy a Home</h1>
        <p className="mt-3 text-warm-700">Start with a buyer consultation, mortgage preapproval, and a strategic search plan based on your needs.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-lg border border-warm-200 p-4 text-sm text-warm-700">Step-by-step support: consultation, financing prep, home search, offers, due diligence, and closing.</p>
          <p className="rounded-lg border border-warm-200 p-4 text-sm text-warm-700">First-time buyer guidance includes budgeting, PITI education, and contract/process walkthroughs.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Property Search & Showing Request</h2>
        <BuyerInquiryForm />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Buyer FAQs</h2>
        <FAQAccordion items={faqs} />
      </section>
    </div>
  )
}
