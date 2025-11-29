import {
  Input,
  Button,
  Select,
  SelectItem,
  Checkbox,
  Textarea,
} from '@heroui/react'

const TICKET_TYPES = [
  { value: 'general', label: 'General Admission' },
  { value: 'vip', label: 'VIP' },
  { value: 'early-bird', label: 'Early Bird' },
  { value: 'student', label: 'Student' },
]

function EventRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Full name"
        name="fullName"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input label="Phone number" name="phone" type="tel" variant="bordered" />
      <Input
        label="Organization"
        name="organization"
        type="text"
        variant="bordered"
      />
      <Select
        label="Ticket type"
        name="ticketType"
        isRequired
        variant="bordered"
        placeholder="Select ticket type"
      >
        {TICKET_TYPES.map((type) => (
          <SelectItem key={type.value}>{type.label}</SelectItem>
        ))}
      </Select>
      <Input
        label="Number of attendees"
        name="attendees"
        type="number"
        min={1}
        max={10}
        defaultValue="1"
        isRequired
        variant="bordered"
      />
      <Textarea
        label="Dietary restrictions"
        name="dietaryRestrictions"
        placeholder="Any dietary restrictions or allergies"
        variant="bordered"
      />
      <Checkbox name="terms" isRequired>
        I agree to the terms and conditions
      </Checkbox>
      <Button type="submit" color="primary">
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
