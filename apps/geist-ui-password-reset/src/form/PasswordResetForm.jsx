import { Input, Button, Text, Spacer } from '@geist-ui/core'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Text p>Request a password reset link via email.</Text>
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
      <Button htmlType="submit" type="success" width="100%">
        Send reset link
      </Button>
    </form>
  )
}

export default PasswordResetForm
