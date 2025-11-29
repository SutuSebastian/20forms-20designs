import { useState } from 'react'
import { Box, Button, Flex, RadioGroup, SelectList, TextArea, TextField } from 'gestalt'

function SupportTicketForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('medium')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-ticket-name"
          label="Full name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-ticket-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <TextField
          id="gestalt-ticket-subject"
          label="Subject"
          onChange={({ value }) => setSubject(value)}
          type="text"
          value={subject}
        />
        <SelectList
          id="gestalt-ticket-category"
          label="Category"
          onChange={({ value }) => setCategory(value)}
          placeholder="Select category"
          value={category}
        >
          {[
            { label: 'Technical issue', value: 'technical' },
            { label: 'Billing inquiry', value: 'billing' },
            { label: 'General question', value: 'general' },
            { label: 'Feature request', value: 'feature' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <RadioGroup id="gestalt-ticket-priority" legend="Priority">
          <RadioGroup.RadioButton
            checked={priority === 'low'}
            id="gestalt-ticket-priority-low"
            label="Low"
            onChange={() => setPriority('low')}
            value="low"
          />
          <RadioGroup.RadioButton
            checked={priority === 'medium'}
            id="gestalt-ticket-priority-medium"
            label="Medium"
            onChange={() => setPriority('medium')}
            value="medium"
          />
          <RadioGroup.RadioButton
            checked={priority === 'high'}
            id="gestalt-ticket-priority-high"
            label="High"
            onChange={() => setPriority('high')}
            value="high"
          />
        </RadioGroup>
        <TextArea
          id="gestalt-ticket-description"
          label="Description"
          onChange={({ value }) => setDescription(value)}
          placeholder="Describe your issue in detail..."
          value={description}
        />
        <Box>
          <Button color="red" text="Submit ticket" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default SupportTicketForm
