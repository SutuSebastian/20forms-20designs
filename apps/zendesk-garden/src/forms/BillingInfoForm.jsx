import { useState, useCallback } from 'react'
import { Field, Input, Select } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid } from '@zendeskgarden/react-grid'

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
        <Grid.Row>
          <Grid.Col>
            <Field>
              <Field.Label>Name on card</Field.Label>
              <Input
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
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
              <Field.Label>Expiration date</Field.Label>
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
              <Field.Label>Security code</Field.Label>
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
              <Field.Label>Billing address</Field.Label>
              <Input
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Country</Field.Label>
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
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <Button type="submit" isPrimary>
              Save billing details
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </form>
  )
}

export default BillingInfoForm
