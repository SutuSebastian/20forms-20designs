import { InputField, Button, Stack, Textarea, Checkbox, Text } from '@kiwicom/orbit-components'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Full name" name="fullName" type="text" required />
        <InputField label="Email address" name="email" type="email" required />
        
        <Text weight="bold">Communication channels</Text>
        <Checkbox label="Email updates" name="emailOptIn" />
        <Checkbox label="SMS notifications" name="smsOptIn" />
        <Checkbox label="Phone calls" name="phoneOptIn" />
        
        <Text weight="bold">Privacy options</Text>
        <Checkbox label="Allow analytics cookies" name="analytics" />
        <Checkbox label="Allow personalized content" name="personalization" />
        
        <Textarea label="Additional notes" name="notes" rows={3} />
        <Button type="primary" submit>Save preferences</Button>
      </Stack>
    </form>
  )
}

export default PrivacyConsentForm
