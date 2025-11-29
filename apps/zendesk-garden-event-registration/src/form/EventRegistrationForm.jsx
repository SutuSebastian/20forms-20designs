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

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [guestCount, setGuestCount] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Event registration submitted!')
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
              <Label>Ticket type</Label>
              <Select
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
                required
              >
                <option value="">Select ticket</option>
                <option value="general">General admission</option>
                <option value="vip">VIP</option>
                <option value="student">Student</option>
              </Select>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Number of guests</Label>
              <Input
                type="number"
                min={0}
                max={20}
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Checkbox
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              >
                <Label>Notify me about future events</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Register
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default EventRegistrationForm
