import { useState, useCallback } from 'react'
import {
  Field,
  Label,
  Input,
  Checkbox,
  Select,
} from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [isDefault, setIsDefault] = useState(false)

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Recipient name</Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Street address</Label>
              <Input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Apartment, suite, etc.</Label>
              <Input
                value={street2}
                onChange={(e) => setStreet2(e.target.value)}
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>City</Label>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
                onChange={(e) => {
                  setCountry(e.target.value)
                  setRegion('')
                }}
                required
              >
                {COUNTRIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </Select>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>State / Province / Territory</Label>
              <Select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                {regionOptions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Select>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Postal code</Label>
              <Input
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Checkbox
                checked={isDefault}
                onChange={(e) => setIsDefault(e.target.checked)}
              >
                <Label>Use as default shipping address</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Save address
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default ShippingAddressForm
