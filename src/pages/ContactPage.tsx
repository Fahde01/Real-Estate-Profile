import { ContactForm } from '../components/forms/ContactForm'
import { siteConfig } from '../config/siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

export const ContactPage = () => {
  usePageMeta('Contact | Ayomiposi Fadeni', 'Contact Chicago real estate agent Ayomiposi Fadeni by phone, email, or consultation request.')

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <ContactForm />
      <aside className="rounded-xl border border-warm-200 bg-white p-6 text-sm">
        <p className="text-lg font-semibold text-navy-900">Contact Information</p>
        <a href={`tel:${siteConfig.contact.phone}`} className="mt-3 block text-gold-700">{siteConfig.contact.phone}</a>
        <a href={`mailto:${siteConfig.contact.email}`} className="block text-gold-700">{siteConfig.contact.email}</a>
        <p className="mt-3 text-warm-700">{siteConfig.brand.brokerageName}</p>
        <p className="text-warm-700">{siteConfig.contact.officeAddress}</p>
        <p className="mt-5 text-xs text-warm-600">Social links are placeholders and can be updated in the centralized configuration file.</p>
      </aside>
    </div>
  )
}
