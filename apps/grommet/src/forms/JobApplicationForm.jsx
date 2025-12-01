import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  TextArea,
  TextInput,
} from 'grommet'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Full name"
        name="fullName"
        htmlFor="grommet-job-full-name"
        required
      >
        <TextInput id="grommet-job-full-name" name="fullName" type="text" />
      </FormField>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-job-email"
        required
      >
        <TextInput id="grommet-job-email" name="email" type="email" />
      </FormField>
      <FormField
        label="Phone number"
        name="phone"
        htmlFor="grommet-job-phone"
        required
      >
        <TextInput id="grommet-job-phone" name="phone" type="tel" />
      </FormField>
      <FormField
        label="Role applied for"
        name="role"
        htmlFor="grommet-job-role"
        required
      >
        <TextInput id="grommet-job-role" name="role" type="text" />
      </FormField>
      <FormField
        label="Resume link"
        name="resume"
        htmlFor="grommet-job-resume"
        required
      >
        <TextInput id="grommet-job-resume" name="resume" type="url" />
      </FormField>
      <FormField
        label="Cover letter"
        name="coverLetter"
        htmlFor="grommet-job-cover-letter"
        required
      >
        <TextArea id="grommet-job-cover-letter" name="coverLetter" rows={4} />
      </FormField>
      <FormField name="updates" htmlFor="grommet-job-updates">
        <CheckBox
          id="grommet-job-updates"
          name="updates"
          label="Keep me informed about future roles"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Submit application" />
      </Box>
    </Form>
  )
}

export default JobApplicationForm
