import { Input, Button, Checkbox, Spacer } from '@geist-ui/core'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="fullName" width="100%" placeholder="Full name" required>
        Full name
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
        name="username"
        width="100%"
        placeholder="Username"
        minLength={3}
        required
      >
        Username
      </Input>
      <Spacer h={1} />
      <Input.Password
        name="password"
        width="100%"
        placeholder="Password"
        minLength={8}
        required
      >
        Password
      </Input.Password>
      <Spacer h={1} />
      <Input.Password
        name="confirmPassword"
        width="100%"
        placeholder="Confirm password"
        minLength={8}
        required
      >
        Confirm password
      </Input.Password>
      <Spacer h={1} />
      <Checkbox name="terms" required>
        I agree to the terms and conditions
      </Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Create account
      </Button>
    </form>
  )
}

export default UserRegistrationForm
