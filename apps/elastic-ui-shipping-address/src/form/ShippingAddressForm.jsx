import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

const countryOptions = [
  { value: '', text: 'Select country' },
  { value: 'us', text: 'United States' },
  { value: 'ca', text: 'Canada' },
]

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [saveAddress, setSaveAddress] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Shipping address saved successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Full name">
        <EuiFieldText
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Address line 1">
        <EuiFieldText
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Address line 2 (optional)">
        <EuiFieldText
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </EuiFormRow>

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="City">
            <EuiFieldText
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="State / Province">
            <EuiFieldText
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="Postal code">
            <EuiFieldText
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Country">
            <EuiSelect
              options={countryOptions}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFormRow>
        <EuiCheckbox
          id="saveAddress"
          label="Save this address for future orders"
          checked={saveAddress}
          onChange={(e) => setSaveAddress(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Save address
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default ShippingAddressForm
