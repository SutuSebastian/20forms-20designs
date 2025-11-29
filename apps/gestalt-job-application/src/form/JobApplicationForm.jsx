import { useState } from 'react'
import { Box, Button, Flex, SelectList, TextArea, TextField } from 'gestalt'

function JobApplicationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [coverLetter, setCoverLetter] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Job application submitted!')
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
        <SelectList
          id="gestalt-job-position"
          label="Position applying for"
          onChange={({ value }) => setPosition(value)}
          placeholder="Select position"
          value={position}
        >
          {[
            { label: 'Software engineer', value: 'engineer' },
            { label: 'Product designer', value: 'designer' },
            { label: 'Product manager', value: 'manager' },
            { label: 'Data analyst', value: 'analyst' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <TextArea
          id="gestalt-job-cover"
          label="Cover letter"
          onChange={({ value }) => setCoverLetter(value)}
          placeholder="Tell us why you're a great fit..."
          value={coverLetter}
        />
        <Box>
          <Button color="red" text="Submit application" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default JobApplicationForm
