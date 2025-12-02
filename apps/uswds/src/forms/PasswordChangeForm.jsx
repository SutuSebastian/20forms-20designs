import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-password-change-current">Current password</Label>
        <TextInput
          id="uswds-password-change-current"
          name="currentPassword"
          type="password"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-password-change-new">New password</Label>
        <TextInput
          id="uswds-password-change-new"
          name="newPassword"
          type="password"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-password-change-confirm">
          Confirm new password
        </Label>
        <TextInput
          id="uswds-password-change-confirm"
          name="confirmPassword"
          type="password"
          required
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-password-change-logout"
          name="logoutOthers"
          label="Sign out of other devices"
        />
      </FormGroup>
      <Button type="submit">Update password</Button>
    </Form>
  )
}

export default PasswordChangeForm
