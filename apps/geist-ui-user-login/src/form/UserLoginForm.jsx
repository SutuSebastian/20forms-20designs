import { Input, Button, Checkbox, Spacer } from '@geist-ui/core'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="identifier"
        width="100%"
        placeholder="Email or username"
        required
      >
        Email or username
      </Input>
      <Spacer h={1} />
      <Input.Password
        name="password"
        width="100%"
        placeholder="Password"
        required
      >
        Password
      </Input.Password>
      <Spacer h={1} />
      <Checkbox name="remember">Keep me signed in</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Sign in
      </Button>
      <Spacer h={0.5} />
      <Button
        type="secondary"
        width="100%"
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </Button>
    </form>
  )
}

export default UserLoginForm
