export const ServiceCard = ({ title, description }: { title: string; description: string }) => (
  <article className="rounded-xl border border-warm-200 bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold text-navy-900">{title}</h3>
    <p className="mt-2 text-sm text-warm-700">{description}</p>
  </article>
)
