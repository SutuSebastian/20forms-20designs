import { Input, Button, Textarea, Avatar } from '@nextui-org/react'

function ProfileUpdateForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div className="flex items-center gap-4">
        <Avatar size="lg" showFallback name="User" />
        <Button size="sm" variant="bordered">
          Change photo
        </Button>
      </div>
      <Input
        label="Display name"
        name="displayName"
        isRequired
        variant="bordered"
      />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input label="Phone number" name="phone" type="tel" variant="bordered" />
      <Textarea
        label="Bio"
        name="bio"
        variant="bordered"
        placeholder="Tell us about yourself"
        minRows={3}
      />
      <Input
        label="Website"
        name="website"
        type="url"
        variant="bordered"
        placeholder="https://example.com"
      />
      <Button type="submit" color="primary">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
