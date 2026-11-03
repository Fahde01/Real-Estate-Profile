import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { BackToTop } from './BackToTop'

export const AppLayout = () => (
  <div className="min-h-screen bg-warm-50 text-navy-900">
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
  </div>
)
