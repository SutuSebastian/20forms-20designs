import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Checkbox } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Current password</FieldLabel>
            <Input
              name="currentPassword"
              type="password"
              placeholder="Enter current password"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>New password</FieldLabel>
            <Input
              name="newPassword"
              type="password"
              placeholder="Enter new password"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Confirm new password</FieldLabel>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
            />
          </FieldRoot>
          <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
          <Button type="submit" colorScheme="blue">
            Update password
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default PasswordChangeForm
