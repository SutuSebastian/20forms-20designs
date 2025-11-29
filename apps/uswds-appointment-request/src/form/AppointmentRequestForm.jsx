import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Textarea,
  Button,
} from '@trussworks/react-uswds'

function AppointmentRequestForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  const appointmentTypes = [
    'General consultation',
    'Follow-up visit',
    'New patient appointment',
    'Specialist referral',
    'Urgent care',
  ]

  const timeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
  ]

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-appointment-name"
          name="name"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-appointment-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-phone"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Phone number
        </Label>
        <TextInput
          id="uswds-appointment-phone"
          name="phone"
          type="tel"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-type"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Appointment type
        </Label>
        <Select
          id="uswds-appointment-type"
          name="appointmentType"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select appointment type</option>
          {appointmentTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-date"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Preferred date
        </Label>
        <TextInput
          id="uswds-appointment-date"
          name="date"
          type="date"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-time"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Preferred time
        </Label>
        <Select
          id="uswds-appointment-time"
          name="time"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select time slot</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-appointment-notes"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Additional notes
        </Label>
        <Textarea
          id="uswds-appointment-notes"
          name="notes"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Request appointment</Button>
    </Form>
  )
}

export default AppointmentRequestForm
