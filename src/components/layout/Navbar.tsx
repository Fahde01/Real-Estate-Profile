import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'

const navLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Buy', '/buy'],
  ['Sell', '/sell'],
  ['Listings', '/listings'],
  ['Areas', '/areas'],
  ['Resources', '/resources'],
  ['Contact', '/contact'],
] as const

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-warm-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-sm font-semibold text-navy-900 sm:text-base">
          {siteConfig.brand.brokerageName}
          <span className="block text-xs font-normal text-warm-700">{siteConfig.agent.name}</span>
        </Link>
        <button className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {navLinks.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => `hover:text-gold-600 ${isActive ? 'text-gold-700' : 'text-navy-900'}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/schedule" className="rounded-md bg-navy-900 px-4 py-2 font-semibold text-white">Schedule</Link>
        </nav>
      </div>
      {open ? (
        <nav className="space-y-2 border-t border-warm-200 px-4 py-4 md:hidden">
          {navLinks.map(([label, path]) => (
            <NavLink key={path} to={path} className="block text-navy-900" onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <Link to="/schedule" className="block font-semibold text-gold-700" onClick={() => setOpen(false)}>Schedule Consultation</Link>
        </nav>
      ) : null}
    </header>
  )
}
