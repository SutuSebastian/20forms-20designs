import { useState } from 'react'
import * as Ariakit from '@ariakit/react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const defaultCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

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
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-shipping-full-name" className="label">
          Recipient name
        </label>
        <input
          id="ariakit-shipping-full-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-shipping-street" className="label">
          Street address
        </label>
        <input
          id="ariakit-shipping-street"
          name="street"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-shipping-street-2" className="label">
          Apartment, suite, etc.
        </label>
        <input
          id="ariakit-shipping-street-2"
          name="street2"
          type="text"
          className="input"
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-shipping-city" className="label">
          City
        </label>
        <input
          id="ariakit-shipping-city"
          name="city"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-shipping-country" className="label">
          Country
        </label>
        <select
          id="ariakit-shipping-country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          className="select"
          required
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-shipping-region" className="label">
          State / Province / Territory
        </label>
        <select
          id="ariakit-shipping-region"
          name="region"
          className="select"
          required
        >
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-shipping-postal" className="label">
          Postal code
        </label>
        <input
          id="ariakit-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          className="input"
          required
        />
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox
          store={defaultCheckbox}
          name="default"
          className="checkbox"
        >
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">Use as default shipping address</span>
      </label>
      <Ariakit.Button type="submit" className="button button-primary">
        Save address
      </Ariakit.Button>
    </form>
  )
}

export default ShippingAddressForm
