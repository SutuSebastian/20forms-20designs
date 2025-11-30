import { Input, Button, Textarea, Spacer, Text } from '@geist-ui/core'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-appointment-name"
        name="fullName"
        width="100%"
        placeholder="Full name"
        required
      >
        Full name
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-appointment-email"
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-appointment-date"
        name="date"
        htmlType="date"
        width="100%"
        required
      >
        Preferred date
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-appointment-time"
        name="time"
        htmlType="time"
        width="100%"
        required
      >
        Preferred time
      </Input>
      <Spacer h={1} />
      <Text small>Reason for visit</Text>
      <Spacer h={0.5} />
      <Textarea
        id="nocss-appointment-reason"
        name="reason"
        width="100%"
        placeholder="Reason for visit"
        rows={3}
        required
      />
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
