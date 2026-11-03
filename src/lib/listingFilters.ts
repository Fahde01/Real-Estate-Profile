import type { PropertyListing, PropertyType } from '../types'

export type ListingFilters = {
  query: string
  minPrice?: number
  maxPrice?: number
  beds?: number
  baths?: number
  propertyType?: PropertyType | 'Any'
  sort: 'price-asc' | 'price-desc' | 'newest'
}

export const filterListings = (listings: PropertyListing[], filters: ListingFilters) => {
  const query = filters.query.trim().toLowerCase()
  const filtered = listings.filter((listing) => {
    const matchesQuery =
      !query ||
      [listing.address, listing.city, listing.zipCode].some((value) => value.toLowerCase().includes(query))

    if (!matchesQuery) return false
    if (filters.minPrice && listing.price < filters.minPrice) return false
    if (filters.maxPrice && listing.price > filters.maxPrice) return false
    if (filters.beds && listing.beds < filters.beds) return false
    if (filters.baths && listing.baths < filters.baths) return false
    if (filters.propertyType && filters.propertyType !== 'Any' && listing.type !== filters.propertyType) return false

    return true
  })

  return filtered.sort((a, b) => {
    if (filters.sort === 'price-asc') return a.price - b.price
    if (filters.sort === 'price-desc') return b.price - a.price
    return b.id.localeCompare(a.id)
  })
}
