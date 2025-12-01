import { Box, Button, CheckBox, Form, FormField, TextInput } from 'grommet'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Current password"
        name="currentPassword"
        htmlFor="grommet-password-change-current"
        required
      >
        <TextInput
          id="grommet-password-change-current"
          name="currentPassword"
          type="password"
        />
      </FormField>
      <FormField
        label="New password"
        name="newPassword"
        htmlFor="grommet-password-change-new"
        required
      >
        <TextInput
          id="grommet-password-change-new"
          name="newPassword"
          type="password"
        />
      </FormField>
      <FormField
        label="Confirm new password"
        name="confirmPassword"
        htmlFor="grommet-password-change-confirm"
        required
      >
        <TextInput
          id="grommet-password-change-confirm"
          name="confirmPassword"
          type="password"
        />
      </FormField>
      <FormField name="logoutOthers" htmlFor="grommet-password-change-logout">
        <CheckBox
          id="grommet-password-change-logout"
          name="logoutOthers"
          label="Sign out of other devices"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Update password" />
      </Box>
    </Form>
  )
}

export default PasswordChangeForm
