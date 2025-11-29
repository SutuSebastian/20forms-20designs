import { Input, Button } from '@nextui-org/react'

function PasswordChangeForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password changed!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Current password"
        name="currentPassword"
        type="password"
        isRequired
        variant="bordered"
      />
      <Input
        label="New password"
        name="newPassword"
        type="password"
        isRequired
        variant="bordered"
      />
      <Input
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        isRequired
        variant="bordered"
      />
      <Button type="submit" color="primary">
        Change password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
