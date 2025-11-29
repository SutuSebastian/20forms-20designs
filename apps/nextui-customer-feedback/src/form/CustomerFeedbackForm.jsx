import { useState } from 'react'
import {
  Input,
  Button,
  Textarea,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
  Checkbox,
} from '@nextui-org/react'

const categories = [
  { key: 'product', label: 'Product Quality' },
  { key: 'service', label: 'Customer Service' },
  { key: 'delivery', label: 'Delivery Experience' },
  { key: 'website', label: 'Website/App' },
  { key: 'other', label: 'Other' },
]

function CustomerFeedbackForm() {
  const [rating, setRating] = useState('5')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input label="Name (optional)" name="name" variant="bordered" />
      <Input
        label="Email (optional)"
        name="email"
        type="email"
        variant="bordered"
      />
      <Select
        label="Feedback category"
        name="category"
        isRequired
        variant="bordered"
      >
        {categories.map((c) => (
          <SelectItem key={c.key}>{c.label}</SelectItem>
        ))}
      </Select>
      <RadioGroup
        label="Overall satisfaction"
        value={rating}
        onValueChange={setRating}
        orientation="horizontal"
      >
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
        <Radio value="4">4</Radio>
        <Radio value="5">5</Radio>
      </RadioGroup>
      <p className="text-xs text-default-500">
        1 = Very Unsatisfied, 5 = Very Satisfied
      </p>
      <Textarea
        label="Your feedback"
        name="feedback"
        isRequired
        variant="bordered"
        minRows={4}
        placeholder="Please share your experience with us..."
      />
      <Textarea
        label="Suggestions for improvement (optional)"
        name="suggestions"
        variant="bordered"
        minRows={2}
      />
      <Checkbox name="contact">
        I would like to be contacted about my feedback
      </Checkbox>
      <Button type="submit" color="primary">
        Submit feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
