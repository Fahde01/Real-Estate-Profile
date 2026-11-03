import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = {
  to?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const styles = {
  primary: 'bg-navy-900 text-white hover:bg-navy-700',
  secondary: 'bg-gold-500 text-navy-900 hover:bg-gold-400',
  ghost: 'border border-navy-900 text-navy-900 hover:bg-navy-100',
}

export const Button = ({ to, children, variant = 'primary', className = '' }: Props) => {
  const classes = `inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return <button className={classes}>{children}</button>
}
