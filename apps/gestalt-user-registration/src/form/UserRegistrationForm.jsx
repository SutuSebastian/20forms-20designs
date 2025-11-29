import { useState } from 'react'
import { Box, Button, Checkbox, Flex, TextField } from 'gestalt'

function UserRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-user-registration-name"
          label="Full name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-user-registration-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <TextField
          id="gestalt-user-registration-username"
          label="Username"
          onChange={({ value }) => setUsername(value)}
          type="text"
          value={username}
        />
        <TextField
          id="gestalt-user-registration-password"
          label="Password"
          onChange={({ value }) => setPassword(value)}
          type="password"
          value={password}
        />
        <TextField
          id="gestalt-user-registration-confirm"
          label="Confirm password"
          onChange={({ value }) => setConfirmPassword(value)}
          type="password"
          value={confirmPassword}
        />
        <Checkbox
          checked={terms}
          id="gestalt-user-registration-terms"
          label="I agree to the terms and conditions"
          onChange={({ checked }) => setTerms(checked)}
        />
        <Box>
          <Button color="red" text="Create account" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default UserRegistrationForm
