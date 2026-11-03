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
  propertyAddress: z.string().min(5),
  propertyType: z.string().min(2),
  bedrooms: z.string().min(1),
  bathrooms: z.string().min(1),
  squareFootage: z.string().min(1),
  propertyCondition: z.string().min(2),
  majorUpdates: z.string().min(2),
  timeline: z.string().min(2),
  additionalInformation: z.string().optional(),
})

type Values = z.infer<typeof schema>

export const SellerLeadForm = () => {
  const [result, setResult] = useState('')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: Values) => {
    const response = await submitLead({
      name: values.name,
      email: values.email,
      phone: values.phone,
      inquiryType: 'Seller Inquiry',
      message: JSON.stringify(values),
    })
    setResult(response.success ? 'Thank you. Your seller request was submitted.' : response.message)
    if (response.success) reset()
  }

  return (
    <form className="space-y-3 rounded-xl border border-warm-200 bg-white p-6" onSubmit={handleSubmit(onSubmit)}>
      <LeadFormNotice />
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="input" placeholder="Name" {...register('name')} />
        <input className="input" placeholder="Email" type="email" {...register('email')} />
        <input className="input" placeholder="Phone" {...register('phone')} />
        <input className="input" placeholder="Property address" {...register('propertyAddress')} />
        <input className="input" placeholder="Property type" {...register('propertyType')} />
        <input className="input" placeholder="Bedrooms" {...register('bedrooms')} />
        <input className="input" placeholder="Bathrooms" {...register('bathrooms')} />
        <input className="input" placeholder="Approximate square footage" {...register('squareFootage')} />
        <input className="input" placeholder="Property condition" {...register('propertyCondition')} />
        <input className="input" placeholder="Major updates" {...register('majorUpdates')} />
        <input className="input" placeholder="Expected selling timeline" {...register('timeline')} />
      </div>
      <textarea className="input min-h-24" placeholder="Additional information" {...register('additionalInformation')} />
      {Object.keys(errors).length ? <p className="error">Please complete all required seller lead fields.</p> : null}
      <button className="btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Seller Request'}</button>
      {result ? <p className="text-sm text-navy-900">{result}</p> : null}
    </form>
  )
}
