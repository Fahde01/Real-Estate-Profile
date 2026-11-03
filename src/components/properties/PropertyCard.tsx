import { BedDouble, Bath, Ruler, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PropertyListing } from '../../types'
import { formatCurrency } from '../../lib/format'

export const PropertyCard = ({ listing, listView = false }: { listing: PropertyListing; listView?: boolean }) => (
  <article className={`overflow-hidden rounded-xl border border-warm-200 bg-white shadow-sm ${listView ? 'grid md:grid-cols-[240px_1fr]' : ''}`}>
    <img src={listing.imageUrls[0]} alt={`${listing.address} sample listing`} className={`h-56 w-full object-cover ${listView ? 'md:h-full' : ''}`} loading="lazy" />
    <div className="p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">Sample listing for demonstration</p>
      <h3 className="mt-1 text-2xl font-bold text-navy-900">{formatCurrency(listing.price)}</h3>
      <p className="mt-1 flex items-center gap-2 text-sm text-warm-700"><MapPin className="h-4 w-4" />{listing.address}, {listing.city} {listing.zipCode}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-warm-700">
        <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{listing.beds} Beds</span>
        <span className="flex items-center gap-1"><Bath className="h-4 w-4" />{listing.baths} Baths</span>
        <span className="flex items-center gap-1"><Ruler className="h-4 w-4" />{listing.sqft.toLocaleString()} sqft</span>
      </div>
      <p className="mt-3 text-sm text-warm-700">{listing.description}</p>
      <div className="mt-4 flex gap-3">
        <Link to={`/listings/${listing.id}`} className="rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white">View Details</Link>
        <Link to="/schedule" className="rounded-md border border-navy-900 px-4 py-2 text-sm font-semibold text-navy-900">Request Showing</Link>
      </div>
    </div>
  </article>
)
