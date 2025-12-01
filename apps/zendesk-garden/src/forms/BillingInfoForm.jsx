import { useState, useCallback } from 'react'
import { Field, Label, Input, Select } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'

function BillingInfoForm() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [billingAddress, setBillingAddress] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Name on card</Label>
              <Input
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
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
              <Label>Expiration date</Label>
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
              <Label>Security code</Label>
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
              <Label>Billing address</Label>
              <Input
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Country</Label>
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </Select>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Save billing details
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default BillingInfoForm
