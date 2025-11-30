import { Button, Input, Checkbox, Select, DatePicker, Radio,  InputNumber, TimePicker, Switch, Form } from '@arco-design/web-react'

import { useState } from 'react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-shipping-full-name">Recipient name</label>
        <Input id="nocss-shipping-full-name"
          name="fullName"
          type="text"
          required
         style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-shipping-street">Street address</label>
        <Input id="nocss-shipping-street" name="street" type="text" required  style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-shipping-street-2">Apartment, suite, etc.</label>
        <Input id="nocss-shipping-street-2" name="street2" type="text"  style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-shipping-city">City</label>
        <Input id="nocss-shipping-city" name="city" type="text" required  style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-shipping-country">Country</label>
        <Select id="nocss-shipping-country"
          name="country"
          value={country}
          onChange={(event) = style={{ width: '100%' }}> setCountry(event.target.value)}
          required
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-shipping-region">
          State / Province / Territory
        </label>
        <Select id="nocss-shipping-region" name="region" required style={{ width: '100%' }}>
        <Select.Option value="">Select an option</Select.Option>
        </Select>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-shipping-postal">Postal code</label>
        <Input id="nocss-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          required
         style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          <Checkbox name="default">
          Use as default shipping address
        </Checkbox>
        </label>
      </div>
      <Button type="primary" htmlType="submit">Save address</Button>
      </div>
    </form>
  )
}

export default ShippingAddressForm
