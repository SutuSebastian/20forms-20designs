import { useState } from 'react'
import { Input, Button, Select, Checkbox, Spacer, Text } from '@geist-ui/core'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <form onSubmit={handleSubmit}>
      <Input name="fullName" width="100%" placeholder="Recipient name" required>
        Recipient name
      </Input>
      <Spacer h={1} />
      <Input name="street" width="100%" placeholder="Street address" required>
        Street address
      </Input>
      <Spacer h={1} />
      <Input name="street2" width="100%" placeholder="Apartment, suite, etc.">
        Apartment, suite, etc.
      </Input>
      <Spacer h={1} />
      <Input name="city" width="100%" placeholder="City" required>
        City
      </Input>
      <Spacer h={1} />
      <Text small>Country</Text>
      <Spacer h={0.5} />
      <Select
        name="country"
        value={country}
        onChange={(val) => setCountry(val)}
        width="100%"
      >
        {COUNTRIES.map(({ value, label }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
      <Spacer h={1} />
      <Text small>State / Province / Territory</Text>
      <Spacer h={0.5} />
      <Select name="region" placeholder="Select an option" width="100%">
        {regionOptions.map((region) => (
          <Select.Option key={region} value={region}>
            {region}
          </Select.Option>
        ))}
      </Select>
      <Spacer h={1} />
      <Input name="postalCode" width="100%" placeholder="Postal code" required>
        Postal code
      </Input>
      <Spacer h={1} />
      <Checkbox name="default">Use as default shipping address</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
