import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { useState } from 'react'

const countries = [
  { value: '', label: 'Select country' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
]

function BillingInfoForm() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!selectedCountry.value) {
      alert('Please select a country')
      return
    }
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-billing-info-name-on-card">
          Name on card
        </Label>
        <input
          id="headlessui-billing-info-name-on-card"
          name="nameOnCard"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-billing-info-card-number">
          Card number
        </Label>
        <input
          id="headlessui-billing-info-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          className="input"
          required
        />
      </Field>

      <div className="form-row">
        <Field className="form-field" style={{ flex: 1 }}>
          <Label
            className="label"
            htmlFor="headlessui-billing-info-expiration-date"
          >
            Expiration date
          </Label>
          <input
            id="headlessui-billing-info-expiration-date"
            name="expirationDate"
            type="text"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            inputMode="numeric"
            className="input"
            required
          />
        </Field>

        <Field className="form-field" style={{ flex: 1 }}>
          <Label
            className="label"
            htmlFor="headlessui-billing-info-security-code"
          >
            Security code
          </Label>
          <input
            id="headlessui-billing-info-security-code"
            name="securityCode"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength={4}
            className="input"
            required
          />
        </Field>
      </div>

      <Field className="form-field">
        <Label
          className="label"
          htmlFor="headlessui-billing-info-billing-address"
        >
          Billing address
        </Label>
        <input
          id="headlessui-billing-info-billing-address"
          name="billingAddress"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Country</Label>
        <div className="select-wrapper">
          <Listbox value={selectedCountry} onChange={setSelectedCountry}>
            <ListboxButton className="select-button">
              <span>{selectedCountry.label}</span>
              <svg
                className="select-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              {countries.map((country) => (
                <ListboxOption
                  key={country.value}
                  value={country}
                  className="select-option"
                >
                  {country.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>
      </Field>

      <button type="submit" className="button button-primary">
        Save billing details
      </button>
    </form>
  )
}

export default BillingInfoForm
