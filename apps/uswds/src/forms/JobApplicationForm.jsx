import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-job-full-name">Full name</Label>
        <TextInput
          id="uswds-job-full-name"
          name="fullName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-job-email">Email address</Label>
        <TextInput id="uswds-job-email" name="email" type="email" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-job-phone">Phone number</Label>
        <TextInput
          id="uswds-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-job-role">Role applied for</Label>
        <TextInput id="uswds-job-role" name="role" type="text" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-job-resume">Resume link</Label>
        <TextInput id="uswds-job-resume" name="resume" type="url" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-job-cover-letter">Cover letter</Label>
        <Textarea id="uswds-job-cover-letter" name="coverLetter" required />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-job-updates"
          name="updates"
          label="Keep me informed about future roles"
        />
      </FormGroup>
      <Button type="submit">Submit application</Button>
    </Form>
  )
}

export default JobApplicationForm
