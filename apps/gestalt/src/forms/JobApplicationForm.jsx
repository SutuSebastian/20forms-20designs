import { useState } from 'react'
import { Box, Button, Checkbox, Flex, TextArea, TextField } from 'gestalt'

function JobApplicationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [resume, setResume] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-job-name"
          label="Full name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-job-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <TextField
          id="gestalt-job-phone"
          label="Phone number"
          onChange={({ value }) => setPhone(value)}
          type="tel"
          value={phone}
        />
        <TextField
          id="gestalt-job-role"
          label="Role applied for"
          onChange={({ value }) => setRole(value)}
          type="text"
          value={role}
        />
        <TextField
          id="gestalt-job-resume"
          label="Resume link"
          onChange={({ value }) => setResume(value)}
          type="url"
          value={resume}
        />
        <TextArea
          id="gestalt-job-cover"
          label="Cover letter"
          onChange={({ value }) => setCoverLetter(value)}
          value={coverLetter}
        />
        <Checkbox
          checked={updates}
          id="gestalt-job-updates"
          label="Keep me informed about future roles"
          onChange={({ checked }) => setUpdates(checked)}
        />
        <Box>
          <Button color="red" text="Submit application" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default JobApplicationForm
