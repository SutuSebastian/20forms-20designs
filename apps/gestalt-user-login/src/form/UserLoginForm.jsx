import { useState } from 'react'
import { Box, Button, Checkbox, Flex, TextField } from 'gestalt'

function UserLoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-user-login-email"
          label="Email or username"
          onChange={({ value }) => setIdentifier(value)}
          type="text"
          value={identifier}
        />
        <TextField
          id="gestalt-user-login-password"
          label="Password"
          onChange={({ value }) => setPassword(value)}
          type="password"
          value={password}
        />
        <Checkbox
          checked={remember}
          id="gestalt-user-login-remember"
          label="Keep me signed in"
          onChange={({ checked }) => setRemember(checked)}
        />
        <Flex gap={2}>
          <Button color="red" text="Sign in" type="submit" />
          <Button
            onClick={() => alert('Password reset link flow placeholder')}
            text="Forgot password?"
            type="button"
          />
        </Flex>
      </Flex>
    </form>
  )
}

export default UserLoginForm
