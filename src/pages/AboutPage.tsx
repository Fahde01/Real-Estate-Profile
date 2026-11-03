import { siteConfig } from '../config/siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

export const AboutPage = () => {
  usePageMeta('About | Ayomiposi Fadeni', 'Learn about Ayomiposi Fadeni, Illinois broker with a technology-driven real estate approach.')

  return (
    <section className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <img src={siteConfig.agent.headshotUrl} alt={`${siteConfig.agent.name} professional placeholder portrait`} className="w-full rounded-xl object-cover" loading="lazy" />
      <div>
        <h1 className="text-4xl font-bold text-navy-900">About {siteConfig.agent.name}</h1>
        <p className="mt-4 text-warm-700">I am a licensed Illinois real estate broker affiliated with {siteConfig.brand.brokerageName}, serving Chicago and surrounding suburbs.</p>
        <p className="mt-4 text-warm-700">My background in computer science and technology helps me deliver research-based recommendations, structured market analysis, and practical guidance for homebuyers and sellers.</p>
        <p className="mt-4 text-warm-700">Clients can expect clear communication, responsiveness, personalized attention, and a professional process focused on education and informed choices.</p>
        <div className="mt-6 rounded-lg border border-warm-200 bg-white p-5 text-sm">
          <p><strong>Brokerage:</strong> {siteConfig.brand.brokerageName}</p>
          <p><strong>License:</strong> {siteConfig.brand.license}</p>
          <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-gold-700">{siteConfig.contact.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${siteConfig.contact.phone}`} className="text-gold-700">{siteConfig.contact.phone}</a></p>
        </div>
      </div>
    </section>
  )
}
