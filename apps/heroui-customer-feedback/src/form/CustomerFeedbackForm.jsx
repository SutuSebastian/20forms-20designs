import {
  Input,
  Button,
  Select,
  SelectItem,
  Textarea,
  RadioGroup,
  Radio,
} from '@heroui/react'

const FEEDBACK_CATEGORIES = [
  { value: 'product', label: 'Product' },
  { value: 'service', label: 'Service' },
  { value: 'website', label: 'Website' },
  { value: 'support', label: 'Support' },
  { value: 'other', label: 'Other' },
]

function CustomerFeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input label="Name" name="name" type="text" variant="bordered" />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Select
        label="Category"
        name="category"
        isRequired
        variant="bordered"
        placeholder="Select a category"
      >
        {FEEDBACK_CATEGORIES.map((cat) => (
          <SelectItem key={cat.value}>{cat.label}</SelectItem>
        ))}
      </Select>
      <RadioGroup
        label="Overall satisfaction"
        name="satisfaction"
        isRequired
        orientation="horizontal"
      >
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
        <Radio value="4">4</Radio>
        <Radio value="5">5</Radio>
      </RadioGroup>
      <RadioGroup label="Would you recommend us?" name="recommend" isRequired>
        <Radio value="yes">Yes</Radio>
        <Radio value="maybe">Maybe</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>
      <Textarea
        label="Comments"
        name="comments"
        placeholder="Tell us more about your experience"
        isRequired
        variant="bordered"
      />
      <Button type="submit" color="primary">
        Submit feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
