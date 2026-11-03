import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { AccessibilityPage } from './pages/AccessibilityPage'
import { AreaGuidePage } from './pages/AreaGuidePage'
import { AreasPage } from './pages/AreasPage'
import { BuyPage } from './pages/BuyPage'
import { ContactPage } from './pages/ContactPage'
import { FairHousingPage } from './pages/FairHousingPage'
import { HomePage } from './pages/HomePage'
import { ListingsPage } from './pages/ListingsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { PropertyDetailsPage } from './pages/PropertyDetailsPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { SchedulePage } from './pages/SchedulePage'
import { SellPage } from './pages/SellPage'
import { TermsPage } from './pages/TermsPage'

const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/listings" element={<ListingsPage />} />
      <Route path="/listings/:listingId" element={<PropertyDetailsPage />} />
      <Route path="/areas" element={<AreasPage />} />
      <Route path="/areas/:slug" element={<AreaGuidePage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/accessibility" element={<AccessibilityPage />} />
      <Route path="/fair-housing" element={<FairHousingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
)

export default App
