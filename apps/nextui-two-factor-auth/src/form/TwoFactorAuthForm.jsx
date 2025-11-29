import { useState } from 'react'
import { Input, Button, RadioGroup, Radio, Link } from '@nextui-org/react'

function TwoFactorAuthForm() {
  const [method, setMethod] = useState('app')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Two-factor authentication verified!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <p className="text-default-600">
        Enter the verification code from your authenticator app or SMS.
      </p>
      <RadioGroup
        label="Verification method"
        value={method}
        onValueChange={setMethod}
      >
        <Radio value="app">Authenticator app</Radio>
        <Radio value="sms">SMS</Radio>
      </RadioGroup>
      <Input
        label="Verification code"
        name="code"
        isRequired
        maxLength={6}
        variant="bordered"
        placeholder="Enter 6-digit code"
      />
      <Button type="submit" color="primary">
        Verify
      </Button>
      <Link href="#" size="sm" className="self-start">
        Resend code
      </Link>
    </form>
  )
}

export default TwoFactorAuthForm
