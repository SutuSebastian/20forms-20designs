import { useState, useCallback } from 'react'
import { Field, Label, Input } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import {
  Dropdown,
  Trigger,
  Select,
  Menu,
  Item,
} from '@zendeskgarden/react-dropdowns'

const COUNTRIES = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'AU', label: 'Australia' },
]

function BillingInfoForm() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [billingAddress, setBillingAddress] = useState('')
  const [country, setCountry] = useState(COUNTRIES[0])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Billing info saved!')
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
              <Dropdown
                selectedItem={country}
                onSelect={(item) => setCountry(item)}
                downshiftProps={{ itemToString: (item) => item?.label || '' }}
              >
                <Trigger>
                  <Select>{country.label}</Select>
                </Trigger>
                <Menu>
                  {COUNTRIES.map((c) => (
                    <Item key={c.value} value={c}>
                      {c.label}
                    </Item>
                  ))}
                </Menu>
              </Dropdown>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Save billing info
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default BillingInfoForm
