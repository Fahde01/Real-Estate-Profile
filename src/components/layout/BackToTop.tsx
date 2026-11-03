import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      className="fixed bottom-5 right-5 rounded-full bg-navy-900 p-3 text-white shadow-lg"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <ChevronUp className="h-4 w-4" />
    </button>
  )
}
