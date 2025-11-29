import { Input, Button, Textarea, Spacer, Text } from '@geist-ui/core'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="firstName"
        width="100%"
        placeholder="First name"
        required
      >
        First name
      </Input>
      <Spacer h={1} />
      <Input
        name="lastName"
        width="100%"
        placeholder="Last name"
        required
      >
        Last name
      </Input>
      <Spacer h={1} />
      <Input
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Input
        name="phone"
        type="tel"
        width="100%"
        placeholder="Phone number"
        required
      >
        Phone number
      </Input>
      <Spacer h={1} />
      <Text small>Short bio</Text>
      <Spacer h={0.5} />
      <Textarea
        name="bio"
        width="100%"
        placeholder="Tell us about yourself"
        rows={3}
        required
      />
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
