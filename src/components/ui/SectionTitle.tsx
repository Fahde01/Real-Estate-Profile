import type { ReactNode } from 'react'

export const SectionTitle = ({ title, description }: { title: string; description?: ReactNode }) => (
  <div className="mb-8 max-w-3xl">
    <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h2>
    {description ? <p className="mt-3 text-warm-700">{description}</p> : null}
  </div>
)
