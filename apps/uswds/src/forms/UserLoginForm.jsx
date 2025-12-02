import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-user-login-email">Email or username</Label>
        <TextInput
          id="uswds-user-login-email"
          name="identifier"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-user-login-password">Password</Label>
        <TextInput
          id="uswds-user-login-password"
          name="password"
          type="password"
          required
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-user-login-remember"
          name="remember"
          label="Keep me signed in"
          tile={false}
        />
      </FormGroup>
      <Button type="submit">Sign in</Button>
      <Button
        type="button"
        unstyled
        onClick={() => alert('Password reset link flow placeholder')}
        style={{ marginLeft: '1rem' }}
      >
        Forgot password?
      </Button>
    </Form>
  )
}

export default UserLoginForm
