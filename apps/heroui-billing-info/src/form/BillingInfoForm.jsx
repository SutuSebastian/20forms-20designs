import { Input, Button, Select, SelectItem } from '@heroui/react'

function BillingInfoForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Billing details saved!')
  }

  const countries = [
    { key: 'US', label: 'United States' },
    { key: 'CA', label: 'Canada' },
  ]

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Name on card"
        name="cardName"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Card number"
        name="cardNumber"
        type="text"
        inputMode="numeric"
        maxLength={19}
        isRequired
        variant="bordered"
      />
      <div className="flex gap-4">
        <Input
          label="Expiration date"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          inputMode="numeric"
          isRequired
          variant="bordered"
          className="flex-1"
        />
        <Input
          label="Security code"
          name="cvc"
          type="text"
          inputMode="numeric"
          maxLength={4}
          isRequired
          variant="bordered"
          className="flex-1"
        />
      </div>
      <Input
        label="Billing address"
        name="address"
        type="text"
        isRequired
        variant="bordered"
      />
      <Select
        label="Country"
        name="country"
        isRequired
        variant="bordered"
        placeholder="Select country"
      >
        {countries.map((country) => (
          <SelectItem key={country.key}>{country.label}</SelectItem>
        ))}
      </Select>
      <Button type="submit" color="primary">
        Save billing details
      </Button>
    </form>
  )
}

export default BillingInfoForm
