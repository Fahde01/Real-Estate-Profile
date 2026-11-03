import { describe, expect, it } from 'vitest'
import { listings } from '../../data/listings'
import { filterListings } from '../listingFilters'

describe('filterListings', () => {
  it('filters by search query and minimum bedrooms', () => {
    const result = filterListings(listings, {
      query: 'chicago',
      beds: 3,
      sort: 'newest',
    })

    expect(result).toHaveLength(1)
    expect(result[0]?.id).toBe('demo-1001')
  })

  it('sorts by descending price', () => {
    const result = filterListings(listings, {
      query: '',
      sort: 'price-desc',
    })

    expect(result[0]?.price).toBeGreaterThanOrEqual(result[1]?.price ?? 0)
  })
})
