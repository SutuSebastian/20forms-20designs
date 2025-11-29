import { useState } from 'react'
import { Input, Button, Select, SelectItem, Checkbox } from '@nextui-org/react'
import { countries, usStates, canadaProvinces } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('us')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Shipping address saved!')
  }

  const getStateOptions = () => {
    if (country === 'us') return usStates
    if (country === 'ca') return canadaProvinces
    return []
  }

  const stateOptions = getStateOptions()

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input label="Full name" name="name" isRequired variant="bordered" />
      <Input
        label="Street address"
        name="address"
        isRequired
        variant="bordered"
      />
      <Input
        label="Apt, suite, unit, etc. (optional)"
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
        {stateOptions.length > 0 ? (
          <Select
            label="State/Province"
            name="state"
            isRequired
            variant="bordered"
            className="flex-1"
          >
            {stateOptions.map((state) => (
              <SelectItem key={state.key}>{state.label}</SelectItem>
            ))}
          </Select>
        ) : (
          <Input
            label="State/Province"
            name="state"
            variant="bordered"
            className="flex-1"
          />
        )}
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
          selectedKeys={[country]}
          onSelectionChange={(keys) => setCountry(Array.from(keys)[0])}
        >
          {countries.map((c) => (
            <SelectItem key={c.key}>{c.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Input label="Phone number" name="phone" type="tel" variant="bordered" />
      <Checkbox name="defaultAddress">Set as default shipping address</Checkbox>
      <Button type="submit" color="primary">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
