import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

const cardTypeOptions = [
  { value: '', text: 'Select card type' },
  { value: 'visa', text: 'Visa' },
  { value: 'mastercard', text: 'Mastercard' },
  { value: 'amex', text: 'American Express' },
  { value: 'discover', text: 'Discover' },
]

const monthOptions = [
  { value: '', text: 'Month' },
  ...Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    text: String(i + 1).padStart(2, '0'),
  })),
]

const yearOptions = [
  { value: '', text: 'Year' },
  ...Array.from({ length: 10 }, (_, i) => ({
    value: String(new Date().getFullYear() + i),
    text: String(new Date().getFullYear() + i),
  })),
]

function BillingInfoForm() {
  const [cardType, setCardType] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')
  const [cvv, setCvv] = useState('')
  const [billingAddress, setBillingAddress] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Billing information saved successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Card type">
        <EuiSelect
          options={cardTypeOptions}
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Card number">
        <EuiFieldText
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Cardholder name">
        <EuiFieldText
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="Expiry month">
            <EuiSelect
              options={monthOptions}
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Expiry year">
            <EuiSelect
              options={yearOptions}
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="CVV">
            <EuiFieldText
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength={4}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFormRow label="Billing address">
        <EuiFieldText
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Save billing info
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default BillingInfoForm
