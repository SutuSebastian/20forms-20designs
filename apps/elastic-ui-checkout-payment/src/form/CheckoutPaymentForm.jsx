import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiRadioGroup,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

const paymentMethodOptions = [
  { id: 'credit', label: 'Credit Card' },
  { id: 'debit', label: 'Debit Card' },
  { id: 'paypal', label: 'PayPal' },
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

function CheckoutPaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')
  const [cvv, setCvv] = useState('')
  const [saveCard, setSaveCard] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Payment processed successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Payment method">
        <EuiRadioGroup
          options={paymentMethodOptions}
          idSelected={paymentMethod}
          onChange={(id) => setPaymentMethod(id)}
        />
      </EuiFormRow>

      {paymentMethod !== 'paypal' && (
        <>
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

          <EuiFormRow>
            <EuiCheckbox
              id="saveCard"
              label="Save card for future purchases"
              checked={saveCard}
              onChange={(e) => setSaveCard(e.target.checked)}
            />
          </EuiFormRow>
        </>
      )}

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Complete payment
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default CheckoutPaymentForm
