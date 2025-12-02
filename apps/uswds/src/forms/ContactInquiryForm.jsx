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

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-contact-name">Full name</Label>
        <TextInput
          id="uswds-contact-name"
          name="fullName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-contact-email">Email address</Label>
        <TextInput
          id="uswds-contact-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-contact-topic">Topic</Label>
        <Select id="uswds-contact-topic" name="topic" required>
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-contact-message">Message</Label>
        <Textarea id="uswds-contact-message" name="message" required />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-contact-consent"
          name="consent"
          label="Allow follow-up communication"
        />
      </FormGroup>
      <Button type="submit">Submit inquiry</Button>
    </Form>
  )
}

export default ContactInquiryForm
