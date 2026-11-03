import { Link, useParams } from 'react-router-dom'
import { ShowingRequestForm } from '../components/forms/ShowingRequestForm'
import { listings } from '../data/listings'
import { formatCurrency } from '../lib/format'
import { usePageMeta } from '../hooks/usePageMeta'
import { siteConfig } from '../config/siteConfig'

export const PropertyDetailsPage = () => {
  const { listingId } = useParams()
  const listing = listings.find((item) => item.id === listingId)

  usePageMeta('Property Details | Demo Listing', 'Property features, photo gallery, and showing request form for sample listing data.')

  if (!listing) {
    return <p className="rounded-lg bg-white p-6">Listing not found. <Link to="/listings" className="text-gold-700">Back to listings</Link></p>
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">Demo listing data</p>
        <h1 className="mt-2 text-4xl font-bold">{formatCurrency(listing.price)}</h1>
        <p className="mt-1 text-warm-700">{listing.address}, {listing.city} {listing.zipCode}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {listing.imageUrls.map((url) => (
          <img key={url} src={url} alt={`${listing.address} placeholder`} className="h-64 w-full rounded-xl object-cover" loading="lazy" />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <article className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Property Features</h2>
          <ul className="mt-3 space-y-2 text-warm-700">
            <li>Bedrooms: {listing.beds}</li>
            <li>Bathrooms: {listing.baths}</li>
            <li>Square footage: {listing.sqft.toLocaleString()}</li>
            <li>Property type: {listing.type}</li>
            <li>Status: {listing.status}</li>
            <li>HOA information: {listing.hoa ?? 'Not provided in sample data'}</li>
            <li>Property taxes: {listing.propertyTaxes ?? 'Not provided in sample data'}</li>
          </ul>
          <p className="mt-4 text-warm-700">{listing.description}</p>
          <p className="mt-4 text-xs text-warm-600">Listing attribution/disclosures placeholder: replace with required provider attribution when authorized MLS/IDX integration is enabled.</p>
        </article>
        <aside className="space-y-4">
          <ShowingRequestForm listingAddress={listing.address} />
          <div className="rounded-xl border border-warm-200 bg-white p-5 text-sm text-warm-700">
            <p className="font-semibold text-navy-900">Contact Agent</p>
            <p>{siteConfig.agent.name}</p>
            <p>{siteConfig.brand.brokerageName}</p>
            <a href={`tel:${siteConfig.contact.phone}`} className="block text-gold-700">{siteConfig.contact.phone}</a>
            <a href={`mailto:${siteConfig.contact.email}`} className="block text-gold-700">{siteConfig.contact.email}</a>
          </div>
        </aside>
      </div>
    </div>
  )
}
