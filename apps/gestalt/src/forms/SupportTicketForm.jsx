import { useState } from 'react'
import { Box, Button, Flex, RadioGroup, TextArea, TextField } from 'gestalt'

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('low')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-ticket-subject"
          label="Subject"
          onChange={({ value }) => setSubject(value)}
          type="text"
          value={subject}
        />
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
          label="Issue description"
          onChange={({ value }) => setDescription(value)}
          value={description}
        />
        <Box>
          <label htmlFor="gestalt-ticket-attachments">Attachments</label>
          <input
            id="gestalt-ticket-attachments"
            name="attachments"
            type="file"
            multiple
          />
        </Box>
        <Box>
          <Button color="red" text="Submit ticket" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default SupportTicketForm
