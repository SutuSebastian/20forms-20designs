import { Box, Button, Form, FormField, Paragraph, TextInput } from 'grommet'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Paragraph>Request a password reset link via email.</Paragraph>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-password-reset-email"
        required
      >
        <TextInput
          id="grommet-password-reset-email"
          name="email"
          type="email"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Send reset link" />
      </Box>
    </Form>
  )
}

export default PasswordResetForm
