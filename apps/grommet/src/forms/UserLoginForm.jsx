import { Box, Button, CheckBox, Form, FormField, TextInput } from 'grommet'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Email or username"
        name="identifier"
        htmlFor="grommet-user-login-email"
        required
      >
        <TextInput
          id="grommet-user-login-email"
          name="identifier"
          type="text"
        />
      </FormField>
      <FormField
        label="Password"
        name="password"
        htmlFor="grommet-user-login-password"
        required
      >
        <TextInput
          id="grommet-user-login-password"
          name="password"
          type="password"
        />
      </FormField>
      <FormField name="remember" htmlFor="grommet-user-login-remember">
        <CheckBox
          id="grommet-user-login-remember"
          name="remember"
          label="Keep me signed in"
        />
      </FormField>
      <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Sign in" />
        <Button
          type="button"
          label="Forgot password?"
          onClick={() => alert('Password reset link flow placeholder')}
        />
      </Box>
    </Form>
  )
}

export default UserLoginForm
