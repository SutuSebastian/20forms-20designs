import { useState, useCallback } from 'react'
import { Field, Input, Select } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid } from '@zendeskgarden/react-grid'

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Field>
              <Field.Label>Email for receipt</Field.Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Shipping method</Field.Label>
              <Select
                value={shippingMethod}
                onChange={(e) => setShippingMethod(e.target.value)}
                required
              >
                <option value="">Select shipping</option>
                <option value="standard">Standard</option>
                <option value="express">Express</option>
                <option value="overnight">Overnight</option>
              </Select>
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Card number</Field.Label>
              <Input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                inputMode="numeric"
                maxLength={19}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col sm={6}>
            <Field>
              <Field.Label>Expiration</Field.Label>
              <Input
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
                placeholder="MM/YY"
                inputMode="numeric"
                required
              />
            </Field>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Field>
              <Field.Label>CVC</Field.Label>
              <Input
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                inputMode="numeric"
                maxLength={4}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Promo code</Field.Label>
              <Input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <Button type="submit" isPrimary>
              Place order
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </form>
  )
}

export default CheckoutPaymentForm
