import { useState } from 'react'
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/react'
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
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-shipping-full-name">
          Recipient name
        </CFormLabel>
        <CFormInput
          id="coreui-shipping-full-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-shipping-street">Street address</CFormLabel>
        <CFormInput
          id="coreui-shipping-street"
          name="street"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-shipping-street-2">
          Apartment, suite, etc.
        </CFormLabel>
        <CFormInput id="coreui-shipping-street-2" name="street2" type="text" />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-shipping-city">City</CFormLabel>
        <CFormInput
          id="coreui-shipping-city"
          name="city"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-shipping-country">Country</CFormLabel>
        <CFormSelect
          id="coreui-shipping-country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          required
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-shipping-region">
          State / Province / Territory
        </CFormLabel>
        <CFormSelect id="coreui-shipping-region" name="region" required>
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-shipping-postal">Postal code</CFormLabel>
        <CFormInput
          id="coreui-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-shipping-default"
          name="default"
          label="Use as default shipping address"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Save address
        </CButton>
      </div>
    </CForm>
  )
}

export default ShippingAddressForm
