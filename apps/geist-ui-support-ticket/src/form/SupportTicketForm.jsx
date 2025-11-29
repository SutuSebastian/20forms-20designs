import { useState } from 'react'
import { Input, Button, Textarea, Radio, Spacer, Text } from '@geist-ui/core'

function SupportTicketForm() {
  const [priority, setPriority] = useState('low')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="subject" width="100%" placeholder="Subject" required>
        Subject
      </Input>
      <Spacer h={1} />
      <Text small>Priority</Text>
      <Spacer h={0.5} />
      <Radio.Group value={priority} onChange={(val) => setPriority(val)}>
        <Radio value="low">Low</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="high">High</Radio>
      </Radio.Group>
      <Spacer h={1} />
      <Text small>Issue description</Text>
      <Spacer h={0.5} />
      <Textarea
        name="description"
        width="100%"
        placeholder="Describe your issue"
        rows={4}
        required
      />
      <Spacer h={1} />
      <Text small>Attachments</Text>
      <Spacer h={0.5} />
      <input type="file" name="attachments" multiple />
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
