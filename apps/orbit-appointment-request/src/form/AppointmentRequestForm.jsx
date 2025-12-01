import { InputField, Button, Stack, Textarea } from '@kiwicom/orbit-components'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Full name" name="fullName" type="text" required />
        <InputField label="Email address" name="email" type="email" required />
        <InputField label="Preferred date" name="date" type="date" required />
        <InputField label="Preferred time" name="time" type="time" required />
        <Textarea label="Reason for visit" name="reason" rows={3} required />
        <Button type="primary" submit>
          Request appointment
        </Button>
      </Stack>
    </form>
  )
}

export default AppointmentRequestForm
