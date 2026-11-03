import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { listings } from '../data/listings'
import { PropertyCard } from '../components/properties/PropertyCard'
import { ServiceCard } from '../components/home/ServiceCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { usePageMeta } from '../hooks/usePageMeta'

const services = [
  'Buying a Home',
  'Selling a Home',
  'Home Valuation and CMA',
  'First-Time Homebuyer Guidance',
  'Real Estate Market Consultations',
]

export const HomePage = () => {
  usePageMeta('Chicago Real Estate Agent | Ayomiposi Fadeni', 'Chicago real estate guidance for buyers and sellers with responsive, personalized support.')

  return (
    <div className="space-y-16">
      <section className="overflow-hidden rounded-2xl bg-navy-950 text-white">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-300">Chicago Real Estate Agent</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Your Next Move Starts Here.</h1>
            <p className="mt-4 text-warm-100">Helping buyers and sellers navigate Chicago real estate with confidence, clarity, and personalized service.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-secondary" to="/listings">Find Your Home</Link>
              <Link className="btn-ghost-light" to="/sell">What&apos;s My Home Worth?</Link>
              <Link className="btn-ghost-light" to="/schedule">Schedule a Consultation</Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80"
            alt="Chicago residential neighborhood skyline"
            className="h-full min-h-72 w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <SectionTitle title="Meet Your Agent" />
        <div className="grid items-center gap-6 rounded-xl border border-warm-200 bg-white p-6 sm:grid-cols-[180px_1fr]">
          <img src={siteConfig.agent.headshotUrl} alt={`${siteConfig.agent.name} professional placeholder`} className="h-44 w-44 rounded-xl object-cover" loading="lazy" />
          <div>
            <p className="text-lg font-semibold text-navy-900">{siteConfig.agent.name} | {siteConfig.agent.title}</p>
            <p className="mt-2 text-warm-700">{siteConfig.agent.bio}</p>
            <Link to="/about" className="mt-4 inline-block font-semibold text-gold-700">Read full bio →</Link>
          </div>
        </div>
      </motion.section>

      <section>
        <SectionTitle title="Services" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service} title={service} description="Personalized planning, transparent communication, and market-focused strategy." />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Featured Properties" description="Only sample data is displayed here for development. Live listings require authorized IDX/MLS integration." />
        <div className="grid gap-5 lg:grid-cols-3">
          {listings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-white p-7 shadow-sm">
        <SectionTitle title="Why Work With Me" />
        <ul className="grid gap-3 text-warm-700 sm:grid-cols-2">
          <li>• Personalized service tailored to your goals</li>
          <li>• Clear communication at every step</li>
          <li>• Research-driven market recommendations</li>
          <li>• Detail-oriented transaction support</li>
          <li>• Commitment to informed decision-making</li>
        </ul>
      </section>

      <section className="rounded-xl bg-gold-100 p-8 text-center">
        <h2 className="text-3xl font-bold text-navy-900">Let&apos;s Make Your Next Move a Smart One.</h2>
        <Link to="/contact" className="btn-primary mt-5 inline-flex">Contact Ayomiposi Fadeni</Link>
      </section>
    </div>
  )
}
