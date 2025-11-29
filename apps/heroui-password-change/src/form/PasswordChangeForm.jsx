import { Input, Button, Checkbox } from '@heroui/react'

function PasswordChangeForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password change requested!')
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
        minLength={8}
        isRequired
        variant="bordered"
      />
      <Input
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        minLength={8}
        isRequired
        variant="bordered"
      />
      <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
      <Button type="submit" color="primary">
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
