import { Equal, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'

export const Footer = () => (
  <footer className="mt-16 bg-navy-950 text-white">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <p className="text-lg font-semibold">{siteConfig.brand.brokerageName}</p>
        <p className="mt-2 text-sm text-warm-100">{siteConfig.agent.name}</p>
        <p className="mt-2 text-xs text-warm-100">{siteConfig.brand.license}</p>
      </div>
      <div>
        <p className="font-semibold">Contact</p>
        <a href={`tel:${siteConfig.contact.phone}`} className="mt-2 flex items-center gap-2 text-sm"><Phone className="h-4 w-4" />{siteConfig.contact.phone}</a>
        <a href={`mailto:${siteConfig.contact.email}`} className="mt-2 flex items-center gap-2 text-sm"><Mail className="h-4 w-4" />{siteConfig.contact.email}</a>
      </div>
      <div>
        <p className="font-semibold">Office</p>
        <p className="mt-2 text-sm text-warm-100">{siteConfig.contact.officeAddress}</p>
        <p className="mt-2 text-xs text-warm-100">{siteConfig.brand.complianceNote}</p>
      </div>
      <div>
        <p className="font-semibold">Legal</p>
        <div className="mt-2 space-y-1 text-sm text-warm-100">
          <Link className="block" to="/privacy">Privacy Policy</Link>
          <Link className="block" to="/terms">Terms of Use</Link>
          <Link className="block" to="/accessibility">Accessibility Statement</Link>
          <Link className="block" to="/fair-housing">Fair Housing / Equal Housing Opportunity</Link>
        </div>
      </div>
    </div>
    <div className="border-t border-navy-800 px-4 py-4 text-center text-xs text-warm-100">
      <span className="inline-flex items-center gap-1"><Equal className="h-3 w-3" />Equal Housing Opportunity.</span>
    </div>
  </footer>
)
