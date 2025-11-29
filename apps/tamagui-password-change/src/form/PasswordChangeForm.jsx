import { Button, Input, Label, YStack } from 'tamagui'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password changed!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="currentPassword">Current password</Label>
          <Input
            id="currentPassword"
            name="currentPassword"
            secureTextEntry
            placeholder="Current password"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="newPassword">New password</Label>
          <Input
            id="newPassword"
            name="newPassword"
            secureTextEntry
            placeholder="New password"
            minLength={8}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="confirmPassword">Confirm new password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            secureTextEntry
            placeholder="Confirm new password"
            minLength={8}
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Change password
        </Button>
      </YStack>
    </form>
  )
}

export default PasswordChangeForm
