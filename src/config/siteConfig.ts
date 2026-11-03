export const siteConfig = {
  brand: {
    siteName: 'Ayomiposi Fadeni Real Estate',
    brokerageName: 'Michael Gabriel Realty Inc.',
    market: 'Chicago, Illinois and surrounding suburbs',
    license: 'Illinois Broker License #475.220683',
    complianceNote:
      'All advertising content is subject to managing broker review and current Illinois advertising requirements.',
  },
  agent: {
    name: 'Ayomiposi Fadeni',
    title: 'Illinois Real Estate Broker',
    bio: 'I combine a computer science and technology background with practical real estate guidance to help buyers and sellers evaluate options with confidence.',
    headshotUrl:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80',
  },
  contact: {
    phone: '708-250-2939',
    email: 'posifadeni@yahoo.com',
    officeAddress: '260 S Schmidt Rd, Unit J, Bolingbrook, IL 60440',
  },
  serviceAreas: [
    'Chicago',
    'Chatham',
    'Auburn Gresham',
    'Greater Grand Crossing',
    'South Shore',
    'Beverly',
    'Bronzeville',
    'Hyde Park',
    'Bolingbrook',
  ],
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
} as const

export type InquiryType =
  | 'Buyer Inquiry'
  | 'Seller Inquiry'
  | 'CMA Request'
  | 'Showing Request'
  | 'General Contact'
