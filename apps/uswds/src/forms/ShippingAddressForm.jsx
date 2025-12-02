import { useState } from 'react'
import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-shipping-full-name">Recipient name</Label>
        <TextInput
          id="uswds-shipping-full-name"
          name="fullName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-shipping-street">Street address</Label>
        <TextInput
          id="uswds-shipping-street"
          name="street"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-shipping-street-2">Apartment, suite, etc.</Label>
        <TextInput id="uswds-shipping-street-2" name="street2" type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-shipping-city">City</Label>
        <TextInput id="uswds-shipping-city" name="city" type="text" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-shipping-country">Country</Label>
        <Select
          id="uswds-shipping-country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-shipping-region">
          State / Province / Territory
        </Label>
        <Select id="uswds-shipping-region" name="region" required>
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-shipping-postal">Postal code</Label>
        <TextInput
          id="uswds-shipping-postal"
          name="postalCode"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-shipping-default"
          name="default"
          label="Use as default shipping address"
        />
      </FormGroup>
      <Button type="submit">Save address</Button>
    </Form>
  )
}

export default ShippingAddressForm
