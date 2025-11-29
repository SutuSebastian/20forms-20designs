import { useState, useCallback } from 'react'
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

const FREQUENCY_OPTIONS = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
]

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState(FREQUENCY_OPTIONS[1])
  const [productUpdates, setProductUpdates] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Subscribed successfully!')
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
            <Field>
              <Label>Frequency</Label>
              <Dropdown
                selectedItem={frequency}
                onSelect={(item) => setFrequency(item)}
                downshiftProps={{ itemToString: (item) => item?.label || '' }}
              >
                <Trigger>
                  <Select>{frequency.label}</Select>
                </Trigger>
                <Menu>
                  {FREQUENCY_OPTIONS.map((option) => (
                    <Item key={option.value} value={option}>
                      {option.label}
                    </Item>
                  ))}
                </Menu>
              </Dropdown>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Checkbox
                checked={productUpdates}
                onChange={(e) => setProductUpdates(e.target.checked)}
              >
                <Label>Also receive product updates</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Subscribe
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default NewsletterSubscriptionForm
