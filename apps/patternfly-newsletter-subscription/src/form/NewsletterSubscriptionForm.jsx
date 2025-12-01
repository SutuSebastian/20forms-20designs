import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Checkbox,
  ActionGroup,
  FormSelect,
  FormSelectOption,
} from '@patternfly/react-core'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Email address" isRequired fieldId="pf-newsletter-email">
        <TextInput
          isRequired
          type="email"
          id="pf-newsletter-email"
          name="email"
        />
      </FormGroup>
      <FormGroup label="Frequency" isRequired fieldId="pf-newsletter-frequency">
        <FormSelect id="pf-newsletter-frequency" name="frequency" isRequired>
          <FormSelectOption value="" label="Select frequency" isPlaceholder />
          <FormSelectOption value="weekly" label="Weekly" />
          <FormSelectOption value="monthly" label="Monthly" />
          <FormSelectOption value="quarterly" label="Quarterly" />
        </FormSelect>
      </FormGroup>
      <FormGroup fieldId="pf-newsletter-agree">
        <Checkbox
          label="Receive product updates"
          id="pf-newsletter-agree"
          name="agree"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default NewsletterSubscriptionForm
