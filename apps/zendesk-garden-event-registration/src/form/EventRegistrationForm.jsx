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

const TICKET_OPTIONS = [
  { value: 'general', label: 'General Admission - $50' },
  { value: 'vip', label: 'VIP - $150' },
  { value: 'student', label: 'Student - $25' },
]

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState(TICKET_OPTIONS[0])
  const [guestCount, setGuestCount] = useState('1')
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Registration submitted!')
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
              <Label>Ticket type</Label>
              <Dropdown
                selectedItem={ticketType}
                onSelect={(item) => setTicketType(item)}
                downshiftProps={{ itemToString: (item) => item?.label || '' }}
              >
                <Trigger>
                  <Select>{ticketType.label}</Select>
                </Trigger>
                <Menu>
                  {TICKET_OPTIONS.map((option) => (
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
              <Label>Number of guests</Label>
              <Input
                type="number"
                min="1"
                max="10"
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
                <Label>Subscribe to event newsletter</Label>
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
