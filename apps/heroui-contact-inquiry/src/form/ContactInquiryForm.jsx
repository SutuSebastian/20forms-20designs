import {
  Input,
  Button,
  Checkbox,
  Textarea,
  Select,
  SelectItem,
} from '@heroui/react'

function ContactInquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inquiry submitted!')
  }

  const topics = [
    { key: 'support', label: 'Support' },
    { key: 'sales', label: 'Sales' },
    { key: 'feedback', label: 'Feedback' },
    { key: 'other', label: 'Other' },
  ]

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
      <Select
        label="Topic"
        name="topic"
        isRequired
        variant="bordered"
        placeholder="Select topic"
      >
        {topics.map((topic) => (
          <SelectItem key={topic.key}>{topic.label}</SelectItem>
        ))}
      </Select>
      <Textarea
        label="Message"
        name="message"
        minRows={4}
        isRequired
        variant="bordered"
      />
      <Checkbox name="consent">Allow follow-up communication</Checkbox>
      <Button type="submit" color="primary">
        Submit inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
