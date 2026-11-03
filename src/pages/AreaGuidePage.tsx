import { useParams } from 'react-router-dom'
import { areaGuides, objectiveDataResources } from '../data/areaGuides'
import { usePageMeta } from '../hooks/usePageMeta'

export const AreaGuidePage = () => {
  const { slug } = useParams()
  const guide = areaGuides.find((item) => item.slug === slug)

  usePageMeta(`${guide?.name ?? 'Area'} Guide`, 'Local area overview with neutral housing, amenities, transit, and resource information.')

  if (!guide) {
    return <p className="rounded-lg bg-white p-5">Area guide not found.</p>
  }

  return (
    <article className="space-y-5 rounded-xl bg-white p-7">
      <h1 className="text-4xl font-bold">{guide.name}</h1>
      <p className="text-warm-700">{guide.overview}</p>
      <ul className="list-disc space-y-2 pl-6 text-warm-700">
        <li>Housing styles vary by block and property type.</li>
        <li>Transportation options include local transit routes and major roads.</li>
        <li>Parks, schools, and local services should be reviewed against current public sources.</li>
      </ul>
      <p className="text-sm text-warm-600">For current metrics and municipal updates, review:</p>
      <ul className="space-y-1 text-sm">
        {objectiveDataResources.map((resource) => (
          <li key={resource.href}><a href={resource.href} target="_blank" rel="noreferrer" className="text-gold-700">{resource.label}</a></li>
        ))}
      </ul>
    </article>
  )
}
