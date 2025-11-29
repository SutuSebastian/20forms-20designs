import { useState } from 'react'
import { Input, Button, Checkbox, Select, SelectItem } from '@heroui/react'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Recipient name"
        name="fullName"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Street address"
        name="street"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Apartment, suite, etc."
        name="street2"
        type="text"
        variant="bordered"
      />
      <Input
        label="City"
        name="city"
        type="text"
        isRequired
        variant="bordered"
      />
      <Select
        label="Country"
        name="country"
        isRequired
        variant="bordered"
        selectedKeys={[country]}
        onSelectionChange={(keys) => setCountry(Array.from(keys)[0])}
      >
        {COUNTRIES.map((c) => (
          <SelectItem key={c.value}>{c.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="State / Province / Territory"
        name="region"
        isRequired
        variant="bordered"
        placeholder="Select an option"
      >
        {regionOptions.map((region) => (
          <SelectItem key={region}>{region}</SelectItem>
        ))}
      </Select>
      <Input
        label="Postal code"
        name="postalCode"
        type="text"
        isRequired
        variant="bordered"
      />
      <Checkbox name="default">Use as default shipping address</Checkbox>
      <Button type="submit" color="primary">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
