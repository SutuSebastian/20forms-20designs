import {
  InputField,
  Button,
  Stack,
  Select,
  Textarea,
  Checkbox,
  Heading,
  Separator,
} from '@kiwicom/orbit-components'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  const sizeOptions = [
    { label: 'Select size', value: '' },
    { label: '1-5', value: '1-5' },
    { label: '6-20', value: '6-20' },
    { label: '21-50', value: '21-50' },
    { label: '50+', value: '50+' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <Heading type="title3">Step 1: Account</Heading>
        <InputField label="Work email" name="email" type="email" required />
        <InputField
          label="Password"
          name="password"
          type="password"
          minLength={8}
          required
        />

        <Separator />

        <Heading type="title3">Step 2: Team</Heading>
        <InputField label="Team name" name="teamName" type="text" required />
        <Select
          label="Team size"
          name="teamSize"
          options={sizeOptions}
          required
        />

        <Separator />

        <Heading type="title3">Step 3: Preferences</Heading>
        <Textarea label="Primary goal" name="goal" rows={3} required />
        <Checkbox label="Send me product tips" name="updates" />

        <Stack direction="row" spacing="small">
          <Button
            type="secondary"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="primary" submit>
            Finish setup
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default OnboardingWizardForm
