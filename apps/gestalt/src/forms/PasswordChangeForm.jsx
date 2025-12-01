import { useState } from 'react'
import { Box, Button, Checkbox, Flex, TextField } from 'gestalt'

function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [logoutOthers, setLogoutOthers] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-password-change-current"
          label="Current password"
          onChange={({ value }) => setCurrentPassword(value)}
          type="password"
          value={currentPassword}
        />
        <TextField
          id="gestalt-password-change-new"
          label="New password"
          onChange={({ value }) => setNewPassword(value)}
          type="password"
          value={newPassword}
        />
        <TextField
          id="gestalt-password-change-confirm"
          label="Confirm new password"
          onChange={({ value }) => setConfirmPassword(value)}
          type="password"
          value={confirmPassword}
        />
        <Checkbox
          checked={logoutOthers}
          id="gestalt-password-change-logout"
          label="Sign out of other devices"
          onChange={({ checked }) => setLogoutOthers(checked)}
        />
        <Box>
          <Button color="red" text="Update password" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default PasswordChangeForm
