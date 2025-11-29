import { useState, useCallback, useMemo } from 'react'
import { Field, Label, Input, Checkbox } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import {
  Dropdown,
  Trigger,
  Select,
  Menu,
  Item,
} from '@zendeskgarden/react-dropdowns'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

function ShippingAddressForm() {
  const [fullName, setFullName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [streetAddress2, setStreetAddress2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState({
    value: 'US',
    label: 'United States',
  })
  const [region, setRegion] = useState(null)
  const [postalCode, setPostalCode] = useState('')
  const [isDefault, setIsDefault] = useState(false)

  const regionOptions = useMemo(() => {
    if (country?.value === 'US') {
      return US_STATES.map((s) => ({ value: s, label: s }))
    } else if (country?.value === 'CA') {
      return CANADIAN_PROVINCES.map((p) => ({ value: p, label: p }))
    }
    return []
  }, [country])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Address saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Full name</Label>
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
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Street address line 2</Label>
              <Input
                value={streetAddress2}
                onChange={(e) => setStreetAddress2(e.target.value)}
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col sm={6}>
            <Field>
              <Label>City</Label>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Field>
          </Col>
          <Col sm={6}>
            <Field>
              <Label>Country</Label>
              <Dropdown
                selectedItem={country}
                onSelect={(item) => {
                  setCountry(item)
                  setRegion(null)
                }}
                downshiftProps={{ itemToString: (item) => item?.label || '' }}
              >
                <Trigger>
                  <Select>{country?.label || 'Select country'}</Select>
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

        <Row style={{ marginTop: '16px' }}>
          <Col sm={6}>
            {regionOptions.length > 0 && (
              <Field>
                <Label>State / Province</Label>
                <Dropdown
                  selectedItem={region}
                  onSelect={(item) => setRegion(item)}
                  downshiftProps={{ itemToString: (item) => item?.label || '' }}
                >
                  <Trigger>
                    <Select>{region?.label || 'Select region'}</Select>
                  </Trigger>
                  <Menu>
                    {regionOptions.map((r) => (
                      <Item key={r.value} value={r}>
                        {r.label}
                      </Item>
                    ))}
                  </Menu>
                </Dropdown>
              </Field>
            )}
          </Col>
          <Col sm={6}>
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
                <Label>Set as default shipping address</Label>
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
