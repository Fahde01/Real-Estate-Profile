import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQAccordion = ({
  items,
}: {
  items: { question: string; answer: string }[]
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index
        return (
          <div key={item.question} className="rounded-lg border border-warm-200 bg-white">
            <button
              className="flex w-full items-center justify-between p-4 text-left font-medium text-navy-900"
              onClick={() => setOpenIndex(open ? null : index)}
              type="button"
            >
              {item.question}
              <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
            </button>
            {open ? <p className="px-4 pb-4 text-sm text-warm-700">{item.answer}</p> : null}
          </div>
        )
      })}
    </div>
  )
}
