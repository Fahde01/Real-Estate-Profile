import { useMemo, useState } from 'react'
import { PropertyCard } from '../components/properties/PropertyCard'
import { listings } from '../data/listings'
import { filterListings, type ListingFilters } from '../lib/listingFilters'
import { usePageMeta } from '../hooks/usePageMeta'

export const ListingsPage = () => {
  usePageMeta('Property Listings | Demo Data', 'Browse sample listings by city, zip, price, bedrooms, bathrooms, and property type.')
  const [listView, setListView] = useState(false)
  const [filters, setFilters] = useState<ListingFilters>({ query: '', sort: 'newest', propertyType: 'Any' })

  const filtered = useMemo(() => filterListings(listings, filters), [filters])

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-4xl font-bold">Property Listings</h1>
        <p className="mt-2 text-sm text-warm-700">All listings shown are clearly marked sample data for demonstration. No live MLS feed is connected.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <input className="input" placeholder="Search city, ZIP, or address" onChange={(event) => setFilters((prev) => ({ ...prev, query: event.target.value }))} />
          <input className="input" placeholder="Min price" type="number" onChange={(event) => setFilters((prev) => ({ ...prev, minPrice: Number(event.target.value) || undefined }))} />
          <input className="input" placeholder="Max price" type="number" onChange={(event) => setFilters((prev) => ({ ...prev, maxPrice: Number(event.target.value) || undefined }))} />
          <select className="input" onChange={(event) => setFilters((prev) => ({ ...prev, propertyType: event.target.value as ListingFilters['propertyType'] }))}>
            <option value="Any">Any type</option>
            <option value="Single Family">Single Family</option>
            <option value="Condo">Condo</option>
            <option value="Townhome">Townhome</option>
            <option value="Multi-Family">Multi-Family</option>
          </select>
          <input className="input" placeholder="Min beds" type="number" onChange={(event) => setFilters((prev) => ({ ...prev, beds: Number(event.target.value) || undefined }))} />
          <input className="input" placeholder="Min baths" type="number" onChange={(event) => setFilters((prev) => ({ ...prev, baths: Number(event.target.value) || undefined }))} />
          <select className="input" onChange={(event) => setFilters((prev) => ({ ...prev, sort: event.target.value as ListingFilters['sort'] }))}>
            <option value="newest">Sort: Newest</option>
            <option value="price-asc">Sort: Price Low to High</option>
            <option value="price-desc">Sort: Price High to Low</option>
          </select>
          <button className="btn-primary" type="button" onClick={() => setListView((value) => !value)}>{listView ? 'Grid view' : 'List view'}</button>
        </div>
      </div>
      {filtered.length ? (
        <div className="grid gap-5">
          {filtered.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} listView={listView} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-white p-6 text-warm-700">No properties match your current filters.</p>
      )}
    </div>
  )
}
