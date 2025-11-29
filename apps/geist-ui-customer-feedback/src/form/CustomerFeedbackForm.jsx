import { useState } from 'react'
import {
  Input,
  Button,
  Select,
  Textarea,
  Checkbox,
  Spacer,
  Text,
} from '@geist-ui/core'

function CustomerFeedbackForm() {
  const [satisfaction, setSatisfaction] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" width="100%" placeholder="Your name" required>
        Your name
      </Input>
      <Spacer h={1} />
      <Input
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Text small>Satisfaction level</Text>
      <Spacer h={0.5} />
      <Select
        placeholder="Select satisfaction level"
        width="100%"
        value={satisfaction}
        onChange={(val) => setSatisfaction(val)}
      >
        <Select.Option value="very-satisfied">Very satisfied</Select.Option>
        <Select.Option value="satisfied">Satisfied</Select.Option>
        <Select.Option value="neutral">Neutral</Select.Option>
        <Select.Option value="dissatisfied">Dissatisfied</Select.Option>
        <Select.Option value="very-dissatisfied">
          Very dissatisfied
        </Select.Option>
      </Select>
      <Spacer h={1} />
      <Text small>Feedback</Text>
      <Spacer h={0.5} />
      <Textarea
        name="feedback"
        width="100%"
        placeholder="Share your experience with us"
        rows={4}
        required
      />
      <Spacer h={1} />
      <Checkbox name="recommend">I would recommend this product</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Submit feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
