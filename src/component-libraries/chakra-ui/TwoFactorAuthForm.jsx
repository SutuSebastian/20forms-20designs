import {
  Button,
  FieldRoot,
  FieldHelperText,
  FieldLabel,
  Input,
  VStack,
} from '@chakra-ui/react'
import ChakraUiProvider from './ChakraUiProvider'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Two-factor code verified!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Verification code</FieldLabel>
            <Input
              name="code"
              type="text"
              placeholder="000000"
              inputMode="numeric"
            />
            <FieldHelperText>
              Enter the 6-digit code from your authenticator app
            </FieldHelperText>
          </FieldRoot>
          <Button type="submit" colorScheme="blue">
            Verify code
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default TwoFactorAuthForm
