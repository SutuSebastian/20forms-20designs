import { useState, useCallback } from 'react'
import { Field, Label, Input, Radio } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'

const SHIPPING_OPTIONS = [
  { value: 'standard', label: 'Standard Shipping (5-7 days) - Free' },
  { value: 'express', label: 'Express Shipping (2-3 days) - $9.99' },
  { value: 'overnight', label: 'Overnight Shipping - $19.99' },
]

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState('standard')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Order placed!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Label style={{ marginBottom: '8px', display: 'block' }}>
              Shipping method
            </Label>
            {SHIPPING_OPTIONS.map((option) => (
              <Field key={option.value} style={{ marginBottom: '8px' }}>
                <Radio
                  name="shipping"
                  value={option.value}
                  checked={shippingMethod === option.value}
                  onChange={() => setShippingMethod(option.value)}
                >
                  <Label>{option.label}</Label>
                </Radio>
              </Field>
            ))}
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Card number</Label>
              <Input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col sm={6}>
            <Field>
              <Label>Expiration date</Label>
              <Input
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </Field>
          </Col>
          <Col sm={6}>
            <Field>
              <Label>CVC</Label>
              <Input
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="123"
                maxLength={4}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Promo code (optional)</Label>
              <Input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Place order
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default CheckoutPaymentForm
