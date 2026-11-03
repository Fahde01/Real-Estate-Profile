import { Link } from 'react-router-dom'
import { areaGuides, objectiveDataResources } from '../data/areaGuides'
import { usePageMeta } from '../hooks/usePageMeta'

export const AreasPage = () => {
  usePageMeta('Chicago Area Guides', 'Neighborhood and suburb overviews with objective public data resource links.')

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Chicago Area Guides</h1>
      <p className="text-warm-700">Area summaries are informational and should be supplemented with direct review of objective public data resources.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areaGuides.map((guide) => (
          <Link key={guide.slug} to={`/areas/${guide.slug}`} className="rounded-xl border border-warm-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">{guide.name}</h2>
            <p className="mt-2 text-sm text-warm-700">{guide.overview}</p>
          </Link>
        ))}
      </div>
      <section className="rounded-xl bg-white p-6">
        <h2 className="text-2xl font-bold">Objective Data Resources</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {objectiveDataResources.map((item) => (
            <li key={item.href}><a className="text-gold-700" href={item.href} target="_blank" rel="noreferrer">{item.label}</a></li>
          ))}
        </ul>
      </section>
    </div>
  )
}
