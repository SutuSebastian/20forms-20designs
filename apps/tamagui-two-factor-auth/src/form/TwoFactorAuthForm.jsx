import { Button, Input, Label, YStack, Text } from 'tamagui'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Code verified!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <Text>Enter the 6-digit code from your authenticator app.</Text>

        <YStack gap="$1">
          <Label htmlFor="code">Verification code</Label>
          <Input
            id="code"
            name="code"
            inputMode="numeric"
            placeholder="000000"
            maxLength={6}
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Verify
        </Button>

        <Button variant="outlined" onPress={() => alert('Resend code')}>
          Resend code
        </Button>
      </YStack>
    </form>
  )
}

export default TwoFactorAuthForm
