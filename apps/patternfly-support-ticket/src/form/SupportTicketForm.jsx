import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Radio,
  ActionGroup,
  FileUpload,
} from '@patternfly/react-core'
import { useState } from 'react'

function SupportTicketForm() {
  const [filename, setFilename] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  const handleFileInputChange = (_event, file) => {
    setFilename(file.name)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Subject" isRequired fieldId="pf-ticket-subject">
        <TextInput
          isRequired
          type="text"
          id="pf-ticket-subject"
          name="subject"
        />
      </FormGroup>
      
      <FormGroup role="radiogroup" isRequired fieldId="pf-ticket-priority" label="Priority">
        <Radio
          name="priority"
          label="Low"
          id="pf-ticket-priority-low"
          value="low"
        />
        <Radio
          name="priority"
          label="Medium"
          id="pf-ticket-priority-medium"
          value="medium"
        />
        <Radio
          name="priority"
          label="High"
          id="pf-ticket-priority-high"
          value="high"
        />
      </FormGroup>

      <FormGroup label="Issue description" isRequired fieldId="pf-ticket-description">
        <TextArea
          isRequired
          id="pf-ticket-description"
          name="description"
          rows={4}
        />
      </FormGroup>

      <FormGroup label="Attachments" fieldId="pf-ticket-attachments">
        <FileUpload
          id="pf-ticket-attachments"
          filename={filename}
          onFileInputChange={handleFileInputChange}
          onClearClick={() => setFilename('')}
          isLoading={isLoading}
          browseButtonText="Upload"
        />
      </FormGroup>

      <ActionGroup>
        <Button variant="primary" type="submit">Submit ticket</Button>
      </ActionGroup>
    </Form>
  )
}

export default SupportTicketForm
