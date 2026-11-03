import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
  <section className="rounded-xl bg-white p-8 text-center">
    <h1 className="text-4xl font-bold">Page Not Found</h1>
    <p className="mt-3 text-warm-700">The page you requested could not be found.</p>
    <Link to="/" className="btn-primary mt-5 inline-flex">Back Home</Link>
  </section>
)
