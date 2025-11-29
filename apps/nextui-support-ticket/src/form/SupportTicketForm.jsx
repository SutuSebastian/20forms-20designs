import {
  Input,
  Button,
  Textarea,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
} from '@nextui-org/react'

const categories = [
  { key: 'technical', label: 'Technical Issue' },
  { key: 'billing', label: 'Billing Question' },
  { key: 'account', label: 'Account Help' },
  { key: 'feature', label: 'Feature Request' },
  { key: 'other', label: 'Other' },
]

const priorities = [
  { key: 'low', label: 'Low' },
  { key: 'medium', label: 'Medium' },
  { key: 'high', label: 'High' },
  { key: 'urgent', label: 'Urgent' },
]

function SupportTicketForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input label="Your name" name="name" isRequired variant="bordered" />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input label="Subject" name="subject" isRequired variant="bordered" />
      <Select label="Category" name="category" isRequired variant="bordered">
        {categories.map((c) => (
          <SelectItem key={c.key}>{c.label}</SelectItem>
        ))}
      </Select>
      <RadioGroup label="Priority" defaultValue="medium">
        {priorities.map((p) => (
          <Radio key={p.key} value={p.key}>
            {p.label}
          </Radio>
        ))}
      </RadioGroup>
      <Textarea
        label="Description"
        name="description"
        isRequired
        variant="bordered"
        minRows={4}
        placeholder="Please describe your issue in detail..."
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm text-default-600">Attachments (optional)</span>
        <input type="file" multiple className="text-sm" />
      </div>
      <Button type="submit" color="primary">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
