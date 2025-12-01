import { Box, Button, CheckBox, Form, FormField, Heading, Text, TextArea, TextInput } from 'grommet'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy consent saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={3} margin={{ bottom: 'medium' }}>Privacy Consent</Heading>

      <FormField
        label="Full name"
        name="fullName"
        htmlFor="grommet-privacy-name"
        required
      >
        <TextInput
          id="grommet-privacy-name"
          name="fullName"
        />
      </FormField>

      <FormField
        label="Email"
        name="email"
        htmlFor="grommet-privacy-email"
        required
      >
        <TextInput
          id="grommet-privacy-email"
          name="email"
          type="email"
        />
      </FormField>

      <Box margin={{ vertical: 'small' }}>
        <Text weight="bold" margin={{ bottom: 'small' }}>Communication channels</Text>
        <Box gap="small">
          <CheckBox
            name="emailUpdates"
            label="Email updates"
          />
          <CheckBox
            name="smsNotifications"
            label="SMS notifications"
          />
          <CheckBox
            name="pushNotifications"
            label="Push notifications"
          />
        </Box>
      </Box>

      <Box margin={{ vertical: 'small' }}>
        <Text weight="bold" margin={{ bottom: 'small' }}>Privacy options</Text>
        <Box gap="small">
          <CheckBox
            name="analytics"
            label="Allow analytics cookies"
          />
          <CheckBox
            name="marketing"
            label="Allow marketing communications"
          />
          <CheckBox
            name="thirdParty"
            label="Share data with partners"
          />
        </Box>
      </Box>

      <FormField
        label="Additional notes"
        name="notes"
        htmlFor="grommet-privacy-notes"
      >
        <TextArea
          id="grommet-privacy-notes"
          name="notes"
          rows={3}
        />
      </FormField>

      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Save preferences" />
      </Box>
    </Form>
  )
}

export default PrivacyConsentForm
