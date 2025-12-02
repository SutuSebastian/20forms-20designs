import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Button,
} from '@trussworks/react-uswds'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p>Enter the code from your authenticator app or SMS.</p>
      <FormGroup>
        <Label htmlFor="uswds-two-factor-code">Verification code</Label>
        <TextInput
          id="uswds-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-two-factor-backup">Backup code (optional)</Label>
        <TextInput
          id="uswds-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
        />
      </FormGroup>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button type="submit">Verify</Button>
        <Button
          type="button"
          outline
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </div>
    </Form>
  )
}

export default TwoFactorAuthForm
