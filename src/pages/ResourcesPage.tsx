import { resources } from '../data/resources'
import { usePageMeta } from '../hooks/usePageMeta'

export const ResourcesPage = () => {
  usePageMeta('Real Estate Resources', 'Educational guides for buying, selling, closing costs, PITI, and Illinois property taxes.')

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Resources</h1>
      <div className="grid gap-4">
        {resources.map((article) => (
          <article key={article.slug} className="rounded-xl border border-warm-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <p className="mt-2 text-warm-700">{article.content}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
