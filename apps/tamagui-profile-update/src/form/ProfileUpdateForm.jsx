import { Button, Input, Label, YStack, TextArea } from 'tamagui'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="displayName">Display name</Label>
          <Input
            id="displayName"
            name="displayName"
            placeholder="Display name"
            required
          />
        </YStack>

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

        <YStack gap="$1">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            inputMode="tel"
            placeholder="Phone number"
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="bio">Bio</Label>
          <TextArea
            id="bio"
            name="bio"
            placeholder="Tell us about yourself"
            rows={3}
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            inputMode="url"
            placeholder="https://example.com"
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Save changes
        </Button>
      </YStack>
    </form>
  )
}

export default ProfileUpdateForm
