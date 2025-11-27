import {
  Button,
  FieldRoot,
  FieldHelperText,
  FieldLabel,
  Input,
  VStack,
} from '@chakra-ui/react'
import ChakraUiProvider from './ChakraUiProvider'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Email address</FieldLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
            <FieldHelperText>
              Enter the email address associated with your account
            </FieldHelperText>
          </FieldRoot>
          <Button type="submit" colorScheme="blue">
            Send reset link
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default PasswordResetForm
