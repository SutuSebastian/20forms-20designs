import { useState } from 'react'
import { Box, Button, Flex, Text, TextField } from 'gestalt'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <Text>Request a password reset link via email.</Text>
        <TextField
          id="gestalt-password-reset-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <Box>
          <Button color="red" text="Send reset link" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default PasswordResetForm
