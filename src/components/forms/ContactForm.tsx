import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitLead } from '../../services/leadService'
import { LeadFormNotice } from './LeadFormNotice'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
})

type Values = z.infer<typeof schema>

export const ContactForm = ({ inquiryType = 'General Contact' }: { inquiryType?: 'General Contact' | 'CMA Request' }) => {
  const [result, setResult] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: Values) => {
    const response = await submitLead({ ...values, inquiryType })
    setResult(response.message)
    if (response.success) reset()
  }

  return (
    <form className="space-y-4 rounded-xl border border-warm-200 bg-white p-6" onSubmit={handleSubmit(onSubmit)}>
      <LeadFormNotice />
      <input className="input" placeholder="Name" {...register('name')} />
      {errors.name ? <p className="error">Please enter your name.</p> : null}
      <input className="input" type="email" placeholder="Email" {...register('email')} />
      {errors.email ? <p className="error">Please provide a valid email.</p> : null}
      <input className="input" placeholder="Phone" {...register('phone')} />
      {errors.phone ? <p className="error">Please provide a valid phone number.</p> : null}
      <textarea className="input min-h-28" placeholder="How can I help?" {...register('message')} />
      {errors.message ? <p className="error">Please share at least a short message.</p> : null}
      <button disabled={isSubmitting} className="btn-primary" type="submit">{isSubmitting ? 'Submitting...' : 'Submit'}</button>
      {result ? <p className="text-sm text-navy-900">{result}</p> : null}
    </form>
  )
}
