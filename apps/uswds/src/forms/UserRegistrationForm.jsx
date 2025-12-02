import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-user-registration-name">Full name</Label>
        <TextInput
          id="uswds-user-registration-name"
          name="fullName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-user-registration-email">Email address</Label>
        <TextInput
          id="uswds-user-registration-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-user-registration-username">Username</Label>
        <TextInput
          id="uswds-user-registration-username"
          name="username"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-user-registration-password">Password</Label>
        <TextInput
          id="uswds-user-registration-password"
          name="password"
          type="password"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-user-registration-confirm">
          Confirm password
        </Label>
        <TextInput
          id="uswds-user-registration-confirm"
          name="confirmPassword"
          type="password"
          required
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-user-registration-terms"
          name="terms"
          label="I agree to the terms and conditions"
          required
        />
      </FormGroup>
      <Button type="submit">Create account</Button>
    </Form>
  )
}

export default UserRegistrationForm
