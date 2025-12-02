import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Textarea,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-feedback-name">Name</Label>
        <TextInput id="uswds-feedback-name" name="name" type="text" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-feedback-email">Email address</Label>
        <TextInput
          id="uswds-feedback-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-feedback-rating">Overall rating</Label>
        <Select id="uswds-feedback-rating" name="rating" required>
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-feedback-comments">Comments</Label>
        <Textarea id="uswds-feedback-comments" name="comments" required />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-feedback-followup"
          name="followUp"
          label="I would like a follow-up"
        />
      </FormGroup>
      <Button type="submit">Send feedback</Button>
    </Form>
  )
}

export default CustomerFeedbackForm
