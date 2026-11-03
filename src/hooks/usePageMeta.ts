import { useEffect } from 'react'

export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title

    const ensureMeta = (selector: string, attr: 'name' | 'property', value: string, content: string) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, value)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    ensureMeta('meta[name="description"]', 'name', 'description', description)
    ensureMeta('meta[property="og:title"]', 'property', 'og:title', title)
    ensureMeta('meta[property="og:description"]', 'property', 'og:description', description)
  }, [title, description])
}
