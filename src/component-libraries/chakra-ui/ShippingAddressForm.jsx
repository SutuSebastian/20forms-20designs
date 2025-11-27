import { useState } from 'react'
import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Checkbox, Select } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'
import {
  CANADIAN_PROVINCES,
  COUNTRIES,
  US_STATES,
} from '../../constants/locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Recipient name</FieldLabel>
            <Input name="fullName" type="text" placeholder="Full name" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Street address</FieldLabel>
            <Input name="street" type="text" placeholder="Street address" />
          </FieldRoot>
          <FieldRoot>
            <FieldLabel>Apartment, suite, etc.</FieldLabel>
            <Input name="street2" type="text" placeholder="Apt, suite, etc." />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>City</FieldLabel>
            <Input name="city" type="text" placeholder="City" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Country</FieldLabel>
            <Select
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {COUNTRIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </Select>
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>State / Province / Territory</FieldLabel>
            <Select name="region" placeholder="Select an option">
              {regionOptions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </Select>
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Postal code</FieldLabel>
            <Input name="postalCode" type="text" placeholder="Postal code" />
          </FieldRoot>
          <Checkbox name="default">Use as default shipping address</Checkbox>
          <Button type="submit" colorScheme="blue">
            Save address
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default ShippingAddressForm
