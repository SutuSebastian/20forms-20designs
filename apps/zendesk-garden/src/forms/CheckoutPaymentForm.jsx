import { useState, useCallback } from 'react'
import { Field, Label, Input, Select } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'

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
        <Row>
          <Col>
            <Field>
              <Label>Email for receipt</Label>
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
            <Field>
              <Label>Shipping method</Label>
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
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Card number</Label>
              <Input
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                inputMode="numeric"
                maxLength={19}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col sm={6}>
            <Field>
              <Label>Expiration</Label>
              <Input
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
                placeholder="MM/YY"
                inputMode="numeric"
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
                inputMode="numeric"
                maxLength={4}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Promo code</Label>
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
