import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Checkbox } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Email address</FieldLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Password</FieldLabel>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </FieldRoot>
          <Checkbox name="rememberMe">Remember me</Checkbox>
          <Button type="submit" colorScheme="blue">
            Sign in
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default UserLoginForm
