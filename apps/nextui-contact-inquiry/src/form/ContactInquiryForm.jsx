import { Input, Button, Textarea, Select, SelectItem } from '@nextui-org/react'

const subjects = [
  { key: 'general', label: 'General inquiry' },
  { key: 'support', label: 'Technical support' },
  { key: 'sales', label: 'Sales question' },
  { key: 'feedback', label: 'Feedback' },
]

function ContactInquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inquiry submitted!')
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
      <Select label="Subject" name="subject" isRequired variant="bordered">
        {subjects.map((subject) => (
          <SelectItem key={subject.key}>{subject.label}</SelectItem>
        ))}
      </Select>
      <Textarea
        label="Message"
        name="message"
        isRequired
        variant="bordered"
        minRows={4}
      />
      <Button type="submit" color="primary">
        Send message
      </Button>
    </form>
  )
}

export default ContactInquiryForm
