import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { submitLead } from '../../services/leadService'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  preferredDate: z.string().min(2),
  message: z.string().min(2),
})

type Values = z.infer<typeof schema>

export const ShowingRequestForm = ({ listingAddress }: { listingAddress?: string }) => {
  const [result, setResult] = useState('')
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: Values) => {
    const response = await submitLead({
      ...values,
      inquiryType: 'Showing Request',
      message: `${listingAddress ?? 'General showing'}: ${values.message}. Preferred date: ${values.preferredDate}`,
    })
    setResult(response.message)
    if (response.success) reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 rounded-xl border border-warm-200 bg-white p-5">
      <input className="input" placeholder="Name" {...register('name')} />
      <input className="input" type="email" placeholder="Email" {...register('email')} />
      <input className="input" placeholder="Phone" {...register('phone')} />
      <input className="input" type="date" {...register('preferredDate')} />
      <textarea className="input" placeholder="Showing details" {...register('message')} />
      <button className="btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Request Showing'}</button>
      {result ? <p className="text-sm text-navy-900">{result}</p> : null}
    </form>
  )
}
