import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-newsletter-email">Email address</Label>
        <TextInput
          id="uswds-newsletter-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-newsletter-frequency">Frequency</Label>
        <Select id="uswds-newsletter-frequency" name="frequency" required>
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-newsletter-agree"
          name="agree"
          label="Receive product updates"
        />
      </FormGroup>
      <Button type="submit">Subscribe</Button>
    </Form>
  )
}

export default NewsletterSubscriptionForm
