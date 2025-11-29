import { Input, Button, Textarea } from '@heroui/react'

function ProfileUpdateForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="First name"
        name="firstName"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Last name"
        name="lastName"
        type="text"
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
      <Input
        label="Phone number"
        name="phone"
        type="tel"
        inputMode="tel"
        isRequired
        variant="bordered"
      />
      <Textarea
        label="Short bio"
        name="bio"
        minRows={3}
        isRequired
        variant="bordered"
      />
      <Button type="submit" color="primary">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
