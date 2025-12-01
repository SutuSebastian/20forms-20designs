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

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('')
  const [productUpdates, setProductUpdates] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Email address</Label>
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
              <Select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              >
                <option value="">Select frequency</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
              </Select>
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
                <Label>Receive product updates</Label>
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
