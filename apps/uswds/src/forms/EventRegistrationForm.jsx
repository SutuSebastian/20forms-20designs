import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-event-name">Full name</Label>
        <TextInput id="uswds-event-name" name="fullName" type="text" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-event-email">Email address</Label>
        <TextInput id="uswds-event-email" name="email" type="email" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-event-ticket">Ticket type</Label>
        <Select id="uswds-event-ticket" name="ticketType" required>
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-event-guests">Number of guests</Label>
        <TextInput
          id="uswds-event-guests"
          name="guestCount"
          type="number"
          min={0}
          max={20}
          required
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-event-newsletter"
          name="newsletter"
          label="Notify me about future events"
        />
      </FormGroup>
      <Button type="submit">Register</Button>
    </Form>
  )
}

export default EventRegistrationForm
