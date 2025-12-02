import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Radio,
  Button,
  Fieldset,
} from '@trussworks/react-uswds'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-ticket-subject">Subject</Label>
        <TextInput
          id="uswds-ticket-subject"
          name="subject"
          type="text"
          required
        />
      </FormGroup>
      <Fieldset legend="Priority">
        <Radio
          id="uswds-ticket-priority-low"
          name="priority"
          value="low"
          label="Low"
          defaultChecked
        />
        <Radio
          id="uswds-ticket-priority-medium"
          name="priority"
          value="medium"
          label="Medium"
        />
        <Radio
          id="uswds-ticket-priority-high"
          name="priority"
          value="high"
          label="High"
        />
      </Fieldset>
      <FormGroup>
        <Label htmlFor="uswds-ticket-description">Issue description</Label>
        <Textarea id="uswds-ticket-description" name="description" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-ticket-attachments">Attachments</Label>
        <input
          id="uswds-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="usa-file-input"
        />
      </FormGroup>
      <Button type="submit">Submit ticket</Button>
    </Form>
  )
}

export default SupportTicketForm
