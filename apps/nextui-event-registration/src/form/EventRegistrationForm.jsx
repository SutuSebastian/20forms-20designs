import {
  Input,
  Button,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  RadioGroup,
  Radio,
} from '@nextui-org/react'

const ticketTypes = [
  { key: 'general', label: 'General Admission - $50' },
  { key: 'vip', label: 'VIP - $150' },
  { key: 'student', label: 'Student - $25' },
]

function EventRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input label="Full name" name="name" isRequired variant="bordered" />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input label="Organization (optional)" name="org" variant="bordered" />
      <Select
        label="Ticket type"
        name="ticketType"
        isRequired
        variant="bordered"
      >
        {ticketTypes.map((t) => (
          <SelectItem key={t.key}>{t.label}</SelectItem>
        ))}
      </Select>
      <Input
        label="Number of tickets"
        name="quantity"
        type="number"
        min={1}
        max={10}
        defaultValue="1"
        isRequired
        variant="bordered"
      />
      <RadioGroup label="Meal preference">
        <Radio value="regular">Regular</Radio>
        <Radio value="vegetarian">Vegetarian</Radio>
        <Radio value="vegan">Vegan</Radio>
        <Radio value="none">No meal needed</Radio>
      </RadioGroup>
      <Textarea
        label="Special requirements (optional)"
        name="requirements"
        variant="bordered"
        minRows={2}
      />
      <Checkbox name="terms" isRequired>
        I agree to the event terms and conditions
      </Checkbox>
      <Button type="submit" color="primary">
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
