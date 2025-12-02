import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Checkbox,
  Button,
  Fieldset,
} from '@trussworks/react-uswds'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-privacy-name">Full name</Label>
        <TextInput
          id="uswds-privacy-name"
          name="fullName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-privacy-email">Email address</Label>
        <TextInput
          id="uswds-privacy-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <Fieldset legend="Communication channels">
        <Checkbox
          id="uswds-privacy-email-opt"
          name="emailOptIn"
          label="Email updates"
        />
        <Checkbox
          id="uswds-privacy-sms-opt"
          name="smsOptIn"
          label="SMS notifications"
        />
        <Checkbox
          id="uswds-privacy-phone-opt"
          name="phoneOptIn"
          label="Phone calls"
        />
      </Fieldset>
      <Fieldset legend="Privacy options">
        <Checkbox
          id="uswds-privacy-analytics"
          name="analytics"
          label="Allow analytics cookies"
        />
        <Checkbox
          id="uswds-privacy-personalization"
          name="personalization"
          label="Allow personalized content"
        />
      </Fieldset>
      <FormGroup>
        <Label htmlFor="uswds-privacy-notes">Additional notes</Label>
        <Textarea id="uswds-privacy-notes" name="notes" />
      </FormGroup>
      <Button type="submit">Save preferences</Button>
    </Form>
  )
}

export default PrivacyConsentForm
