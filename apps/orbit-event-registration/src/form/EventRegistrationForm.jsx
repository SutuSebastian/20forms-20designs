import { InputField, Button, Stack, Select, Checkbox } from '@kiwicom/orbit-components'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  const ticketOptions = [
    { label: 'Select ticket', value: '' },
    { label: 'General admission', value: 'general' },
    { label: 'VIP', value: 'vip' },
    { label: 'Student', value: 'student' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Full name" name="fullName" type="text" required />
        <InputField label="Email address" name="email" type="email" required />
        <Select label="Ticket type" name="ticketType" options={ticketOptions} required />
        <InputField label="Number of guests" name="guestCount" type="number" min={0} max={20} required />
        <Checkbox label="Notify me about future events" name="newsletter" />
        <Button type="primary" submit>Register</Button>
      </Stack>
    </form>
  )
}

export default EventRegistrationForm
