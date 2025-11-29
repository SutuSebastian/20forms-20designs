import { Button, Input, Label, YStack, Text } from 'tamagui'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <Text>
          Enter your email address and we will send you a link to reset your
          password.
        </Text>

        <YStack gap="$1">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email address"
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Send reset link
        </Button>

        <Button variant="outlined" onPress={() => alert('Back to login')}>
          Back to login
        </Button>
      </YStack>
    </form>
  )
}

export default PasswordResetForm
