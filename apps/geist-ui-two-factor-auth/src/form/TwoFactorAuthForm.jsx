import { Input, Button, Text, Spacer } from '@geist-ui/core'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Text p>Enter the code from your authenticator app or SMS.</Text>
      <Spacer h={1} />
      <Input
        name="code"
        width="100%"
        placeholder="Verification code"
        htmlType="text"
        inputMode="numeric"
        maxLength={6}
        required
      >
        Verification code
      </Input>
      <Spacer h={1} />
      <Input
        name="backupCode"
        width="100%"
        placeholder="Backup code (optional)"
        htmlType="text"
      >
        Backup code (optional)
      </Input>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Verify
      </Button>
      <Spacer h={0.5} />
      <Button
        type="secondary"
        width="100%"
        onClick={() => alert('A new code has been sent!')}
      >
        Resend code
      </Button>
    </form>
  )
}

export default TwoFactorAuthForm
