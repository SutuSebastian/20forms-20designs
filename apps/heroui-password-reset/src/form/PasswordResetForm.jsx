import { Input, Button } from '@heroui/react'

function PasswordResetForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <p className="text-default-600">
        Request a password reset link via email.
      </p>
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Button type="submit" color="primary">
        Send reset link
      </Button>
    </form>
  )
}

export default PasswordResetForm
