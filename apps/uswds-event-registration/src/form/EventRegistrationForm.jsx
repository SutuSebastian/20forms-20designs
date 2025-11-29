import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Textarea,
  Button,
} from '@trussworks/react-uswds'

function EventRegistrationForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  const ticketTypes = [
    'General admission',
    'VIP',
    'Early bird',
    'Student',
    'Group (5+)',
  ]

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-event-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-event-name"
          name="name"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-event-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-phone"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Phone number
        </Label>
        <TextInput
          id="uswds-event-phone"
          name="phone"
          type="tel"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-organization"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Organization / Company
        </Label>
        <TextInput
          id="uswds-event-organization"
          name="organization"
          type="text"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-ticket-type"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Ticket type
        </Label>
        <Select
          id="uswds-event-ticket-type"
          name="ticketType"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select ticket type</option>
          {ticketTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-attendees"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Number of attendees
        </Label>
        <TextInput
          id="uswds-event-attendees"
          name="attendees"
          type="number"
          min="1"
          max="20"
          defaultValue="1"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-dietary"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Dietary requirements
        </Label>
        <Textarea
          id="uswds-event-dietary"
          name="dietary"
          placeholder="Please list any dietary restrictions or allergies"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-event-terms"
          name="terms"
          label="I agree to the event terms and conditions"
        />
      </FormGroup>
      <Button type="submit">Register for event</Button>
    </Form>
  )
}

export default EventRegistrationForm
