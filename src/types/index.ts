import type { InquiryType } from '../config/siteConfig'

export type PropertyType = 'Single Family' | 'Condo' | 'Townhome' | 'Multi-Family'

export type PropertyListing = {
  id: string
  address: string
  city: string
  zipCode: string
  price: number
  beds: number
  baths: number
  sqft: number
  type: PropertyType
  status: 'For Sale' | 'Pending' | 'Sold'
  description: string
  hoa?: string
  propertyTaxes?: string
  imageUrls: string[]
  isDemo: boolean
}

export type LeadSubmission = {
  id: string
  name: string
  email: string
  phone: string
  inquiryType: InquiryType
  message?: string
  submissionDate: string
  leadStatus: 'New' | 'Contacted' | 'Qualified' | 'Closed'
  nextFollowUpDate?: string
  metadata?: Record<string, string>
}
