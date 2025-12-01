import { useState } from 'react'
import { CdsInput, CdsSelect, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'
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
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Recipient name</label>
          <input
            id="clarity-shipping-full-name"
            name="fullName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Street address</label>
          <input
            id="clarity-shipping-street"
            name="street"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Apartment, suite, etc.</label>
          <input
            id="clarity-shipping-street-2"
            name="street2"
            type="text"
          />
        </CdsInput>

        <CdsInput>
          <label>City</label>
          <input
            id="clarity-shipping-city"
            name="city"
            type="text"
            required
          />
        </CdsInput>

        <CdsSelect>
          <label>Country</label>
          <select
            id="clarity-shipping-country"
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
          </select>
        </CdsSelect>

        <CdsSelect>
          <label>State / Province / Territory</label>
          <select id="clarity-shipping-region" name="region" required>
            <option value="">Select an option</option>
            {regionOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </CdsSelect>

        <CdsInput>
          <label>Postal code</label>
          <input
            id="clarity-shipping-postal"
            name="postalCode"
            type="text"
            pattern={postalPattern}
            inputMode="text"
            required
          />
        </CdsInput>

        <CdsCheckbox>
          <label>Use as default shipping address</label>
          <input
            type="checkbox"
            name="default"
          />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Save address
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default ShippingAddressForm
