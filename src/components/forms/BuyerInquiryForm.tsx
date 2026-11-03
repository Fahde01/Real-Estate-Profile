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
  preferredLocations: z.string().min(2),
  budgetRange: z.string().min(2),
  minBedrooms: z.string().min(1),
  minBathrooms: z.string().min(1),
  propertyType: z.string().min(2),
  financingStatus: z.string().min(2),
  timeline: z.string().min(2),
  additionalPreferences: z.string().optional(),
})

type Values = z.infer<typeof schema>

export const BuyerInquiryForm = () => {
  const [result, setResult] = useState('')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: Values) => {
    const response = await submitLead({
      name: values.name,
      email: values.email,
      phone: values.phone,
      inquiryType: 'Buyer Inquiry',
      message: JSON.stringify(values),
    })
    setResult(response.message)
    if (response.success) reset()
  }

  return (
    <form className="space-y-3 rounded-xl border border-warm-200 bg-white p-6" onSubmit={handleSubmit(onSubmit)}>
      <LeadFormNotice />
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder="Name" {...register('name')} />
        <input className="input" placeholder="Email" type="email" {...register('email')} />
        <input className="input" placeholder="Phone" {...register('phone')} />
        <input className="input" placeholder="Preferred locations" {...register('preferredLocations')} />
        <input className="input" placeholder="Budget range" {...register('budgetRange')} />
        <input className="input" placeholder="Minimum bedrooms" {...register('minBedrooms')} />
        <input className="input" placeholder="Minimum bathrooms" {...register('minBathrooms')} />
        <input className="input" placeholder="Property type" {...register('propertyType')} />
        <input className="input" placeholder="Financing/preapproval status" {...register('financingStatus')} />
        <input className="input" placeholder="Desired buying timeline" {...register('timeline')} />
      </div>
      <textarea className="input min-h-24" placeholder="Additional preferences" {...register('additionalPreferences')} />
      {Object.keys(errors).length ? <p className="error">Please complete required buyer intake fields.</p> : null}
      <button className="btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Buyer Inquiry'}</button>
      {result ? <p className="text-sm text-navy-900">{result}</p> : null}
    </form>
  )
}
