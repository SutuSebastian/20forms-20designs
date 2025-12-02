import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Button,
} from '@trussworks/react-uswds'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-appointment-name">Full name</Label>
        <TextInput
          id="uswds-appointment-name"
          name="fullName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-appointment-email">Email address</Label>
        <TextInput
          id="uswds-appointment-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-appointment-date">Preferred date</Label>
        <TextInput
          id="uswds-appointment-date"
          name="date"
          type="date"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-appointment-time">Preferred time</Label>
        <TextInput
          id="uswds-appointment-time"
          name="time"
          type="time"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-appointment-reason">Reason for visit</Label>
        <Textarea id="uswds-appointment-reason" name="reason" required />
      </FormGroup>
      <Button type="submit">Request appointment</Button>
    </Form>
  )
}

export default AppointmentRequestForm
