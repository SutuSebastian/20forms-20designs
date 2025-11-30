import { Input, Button, Checkbox, Spacer } from '@geist-ui/core'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input.Password
        id="nocss-password-change-current"
        name="currentPassword"
        width="100%"
        placeholder="Current password"
        required
      >
        Current password
      </Input.Password>
      <Spacer h={1} />
      <Input.Password
        id="nocss-password-change-new"
        name="newPassword"
        width="100%"
        placeholder="New password"
        minLength={8}
        required
      >
        New password
      </Input.Password>
      <Spacer h={1} />
      <Input.Password
        id="nocss-password-change-confirm"
        name="confirmPassword"
        width="100%"
        placeholder="Confirm new password"
        minLength={8}
        required
      >
        Confirm new password
      </Input.Password>
      <Spacer h={1} />
      <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
