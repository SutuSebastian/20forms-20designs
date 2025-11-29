import { useState } from 'react'
import {
  Input,
  Button,
  Select,
  Textarea,
  Radio,
  Spacer,
  Text,
} from '@geist-ui/core'

function SupportTicketForm() {
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
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
      <Input name="subject" width="100%" placeholder="Subject" required>
        Subject
      </Input>
      <Spacer h={1} />
      <Text small>Category</Text>
      <Spacer h={0.5} />
      <Select
        placeholder="Select category"
        width="100%"
        value={category}
        onChange={(val) => setCategory(val)}
      >
        <Select.Option value="technical">Technical issue</Select.Option>
        <Select.Option value="billing">Billing</Select.Option>
        <Select.Option value="account">Account</Select.Option>
        <Select.Option value="general">General inquiry</Select.Option>
      </Select>
      <Spacer h={1} />
      <Text small>Priority</Text>
      <Spacer h={0.5} />
      <Radio.Group value={priority} onChange={(val) => setPriority(val)}>
        <Radio value="low">Low</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="high">High</Radio>
      </Radio.Group>
      <Spacer h={1} />
      <Text small>Description</Text>
      <Spacer h={0.5} />
      <Textarea
        name="description"
        width="100%"
        placeholder="Describe your issue"
        rows={4}
        required
      />
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
