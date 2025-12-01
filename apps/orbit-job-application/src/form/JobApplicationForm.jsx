import { InputField, Button, Stack, Textarea, Checkbox } from '@kiwicom/orbit-components'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Full name" name="fullName" type="text" required />
        <InputField label="Email address" name="email" type="email" required />
        <InputField label="Phone number" name="phone" type="tel" required />
        <InputField label="Role applied for" name="role" type="text" required />
        <InputField label="Resume link" name="resume" type="url" required />
        <Textarea label="Cover letter" name="coverLetter" rows={4} required />
        <Checkbox label="Keep me informed about future roles" name="updates" />
        <Button type="primary" submit>Submit application</Button>
      </Stack>
    </form>
  )
}

export default JobApplicationForm
