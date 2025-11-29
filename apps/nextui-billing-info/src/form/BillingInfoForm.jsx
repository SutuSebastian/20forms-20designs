import { Input, Button, Select, SelectItem } from '@nextui-org/react'

const countries = [
  { key: 'us', label: 'United States' },
  { key: 'ca', label: 'Canada' },
  { key: 'uk', label: 'United Kingdom' },
  { key: 'de', label: 'Germany' },
  { key: 'fr', label: 'France' },
]

function BillingInfoForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Billing information saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input label="Full name" name="name" isRequired variant="bordered" />
      <Input label="Company (optional)" name="company" variant="bordered" />
      <Input
        label="Street address"
        name="address"
        isRequired
        variant="bordered"
      />
      <Input
        label="Apt, suite, etc. (optional)"
        name="apt"
        variant="bordered"
      />
      <div className="flex gap-4">
        <Input
          label="City"
          name="city"
          isRequired
          variant="bordered"
          className="flex-1"
        />
        <Input
          label="State/Province"
          name="state"
          isRequired
          variant="bordered"
          className="flex-1"
        />
      </div>
      <div className="flex gap-4">
        <Input
          label="ZIP/Postal code"
          name="zip"
          isRequired
          variant="bordered"
          className="flex-1"
        />
        <Select
          label="Country"
          name="country"
          isRequired
          variant="bordered"
          className="flex-1"
        >
          {countries.map((country) => (
            <SelectItem key={country.key}>{country.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Input label="Phone number" name="phone" type="tel" variant="bordered" />
      <Button type="submit" color="primary">
        Save billing info
      </Button>
    </form>
  )
}

export default BillingInfoForm
