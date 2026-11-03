import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitLead } from '../../services/leadService'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  consultationType: z.enum(['Buyer consultation', 'Seller consultation', 'Home valuation consultation', 'General real estate consultation']),
  notes: z.string().min(5),
})

type Values = z.infer<typeof schema>

export const ConsultationForm = () => {
  const [result, setResult] = useState('')
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { consultationType: 'General real estate consultation' },
  })

  const onSubmit = async (values: Values) => {
    const response = await submitLead({
      name: values.name,
      email: values.email,
      phone: values.phone,
      inquiryType: 'General Contact',
      message: `${values.consultationType}: ${values.notes}`,
    })
    setResult(
      response.success
        ? 'Thanks. We will confirm details directly. Calendar integration will be enabled after provider setup.'
        : response.message,
    )
    if (response.success) reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 rounded-xl border border-warm-200 bg-white p-6">
      <input className="input" placeholder="Name" {...register('name')} />
      <input className="input" type="email" placeholder="Email" {...register('email')} />
      <input className="input" placeholder="Phone" {...register('phone')} />
      <select className="input" {...register('consultationType')}>
        <option>Buyer consultation</option>
        <option>Seller consultation</option>
        <option>Home valuation consultation</option>
        <option>General real estate consultation</option>
      </select>
      <textarea className="input min-h-24" placeholder="Tell us your goals" {...register('notes')} />
      <button className="btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Request Consultation'}</button>
      {result ? <p className="text-sm text-navy-900">{result}</p> : null}
    </form>
  )
}
