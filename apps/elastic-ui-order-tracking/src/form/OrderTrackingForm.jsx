import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
} from '@elastic/eui'

function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Tracking information requested!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow>
        <EuiText size="s">
          <p>Enter your order number and email address to track your order</p>
        </EuiText>
      </EuiFormRow>

      <EuiFormRow label="Order number">
        <EuiFieldText
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="e.g., ORD-123456"
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiButton type="submit" fill>
              Track order
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFormRow>
    </EuiForm>
  )
}

export default OrderTrackingForm
