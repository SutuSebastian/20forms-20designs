import { Input, Button, Select, SelectItem, Textarea, RadioGroup, Radio } from '@heroui/react'

const ISSUE_TYPES = [
  { value: 'technical', label: 'Technical Issue' },
  { value: 'billing', label: 'Billing' },
  { value: 'account', label: 'Account' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'other', label: 'Other' },
]

function SupportTicketForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Name"
        name="name"
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
      <Input
        label="Subject"
        name="subject"
        type="text"
        isRequired
        variant="bordered"
      />
      <Select
        label="Issue type"
        name="issueType"
        isRequired
        variant="bordered"
        placeholder="Select issue type"
      >
        {ISSUE_TYPES.map((type) => (
          <SelectItem key={type.value}>{type.label}</SelectItem>
        ))}
      </Select>
      <RadioGroup
        label="Priority"
        name="priority"
        isRequired
        orientation="horizontal"
      >
        <Radio value="low">Low</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="high">High</Radio>
      </RadioGroup>
      <Textarea
        label="Description"
        name="description"
        placeholder="Please describe your issue in detail"
        isRequired
        variant="bordered"
      />
      <Input
        label="Order / Reference number"
        name="reference"
        type="text"
        description="If applicable"
        variant="bordered"
      />
      <Button type="submit" color="primary">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
