import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Checkbox,
  ActionGroup,
} from '@patternfly/react-core'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Full name" isRequired fieldId="pf-job-full-name">
        <TextInput
          isRequired
          type="text"
          id="pf-job-full-name"
          name="fullName"
        />
      </FormGroup>
      <FormGroup label="Email address" isRequired fieldId="pf-job-email">
        <TextInput isRequired type="email" id="pf-job-email" name="email" />
      </FormGroup>
      <FormGroup label="Phone number" isRequired fieldId="pf-job-phone">
        <TextInput isRequired type="tel" id="pf-job-phone" name="phone" />
      </FormGroup>
      <FormGroup label="Role applied for" isRequired fieldId="pf-job-role">
        <TextInput isRequired type="text" id="pf-job-role" name="role" />
      </FormGroup>
      <FormGroup label="Resume link" isRequired fieldId="pf-job-resume">
        <TextInput isRequired type="url" id="pf-job-resume" name="resume" />
      </FormGroup>
      <FormGroup label="Cover letter" isRequired fieldId="pf-job-cover-letter">
        <TextArea
          isRequired
          id="pf-job-cover-letter"
          name="coverLetter"
          rows={4}
        />
      </FormGroup>
      <FormGroup fieldId="pf-job-updates">
        <Checkbox
          label="Keep me informed about future roles"
          id="pf-job-updates"
          name="updates"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Submit application
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default JobApplicationForm
