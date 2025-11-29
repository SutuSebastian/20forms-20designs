import { Input, Button } from '@heroui/react'

function TwoFactorAuthForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <p className="text-default-600">
        Enter the code from your authenticator app or SMS.
      </p>
      <Input
        label="Verification code"
        name="code"
        type="text"
        inputMode="numeric"
        pattern="\d{6}"
        maxLength={6}
        isRequired
        variant="bordered"
      />
      <Input
        label="Backup code (optional)"
        name="backupCode"
        type="text"
        pattern="[A-Za-z0-9]{6,12}"
        variant="bordered"
      />
      <Button type="submit" color="primary">
        Verify
      </Button>
      <Button
        type="button"
        variant="light"
        onPress={() => alert('A new code has been sent!')}
      >
        Resend code
      </Button>
    </form>
  )
}

export default TwoFactorAuthForm
