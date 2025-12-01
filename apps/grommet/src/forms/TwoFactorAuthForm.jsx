import { Box, Button, Form, FormField, Paragraph, TextInput } from 'grommet'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Paragraph>Enter the code from your authenticator app or SMS.</Paragraph>
      <FormField
        label="Verification code"
        name="code"
        htmlFor="grommet-two-factor-code"
        required
      >
        <TextInput
          id="grommet-two-factor-code"
          name="code"
          type="text"
          maxLength={6}
        />
      </FormField>
      <FormField
        label="Backup code (optional)"
        name="backupCode"
        htmlFor="grommet-two-factor-backup"
      >
        <TextInput
          id="grommet-two-factor-backup"
          name="backupCode"
          type="text"
        />
      </FormField>
      <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Verify" />
        <Button
          type="button"
          label="Resend code"
          onClick={() => alert('A new code has been sent!')}
        />
      </Box>
    </Form>
  )
}

export default TwoFactorAuthForm
