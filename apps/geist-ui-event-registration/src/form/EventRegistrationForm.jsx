import { Input, Button, Select, Checkbox, Spacer, Text } from '@geist-ui/core'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-event-name"
        name="fullName"
        width="100%"
        placeholder="Full name"
        required
      >
        Full name
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-event-email"
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Text small>Ticket type</Text>
      <Spacer h={0.5} />
      <Select
        id="nocss-event-ticket"
        name="ticketType"
        placeholder="Select ticket"
        width="100%"
      >
        <Select.Option value="general">General admission</Select.Option>
        <Select.Option value="vip">VIP</Select.Option>
        <Select.Option value="student">Student</Select.Option>
      </Select>
      <Spacer h={1} />
      <Input
        id="nocss-event-guests"
        name="guestCount"
        htmlType="number"
        width="100%"
        placeholder="Number of guests"
        min={0}
        max={20}
        required
      >
        Number of guests
      </Input>
      <Spacer h={1} />
      <Checkbox name="newsletter">Notify me about future events</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
