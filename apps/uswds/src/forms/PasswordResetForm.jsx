import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Button,
} from '@trussworks/react-uswds'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p>Request a password reset link via email.</p>
      <FormGroup>
        <Label htmlFor="uswds-password-reset-email">Email address</Label>
        <TextInput
          id="uswds-password-reset-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <Button type="submit">Send reset link</Button>
    </Form>
  )
}

export default PasswordResetForm
