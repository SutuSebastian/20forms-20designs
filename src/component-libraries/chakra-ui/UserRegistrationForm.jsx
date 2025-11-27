import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Checkbox } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Full name</FieldLabel>
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Email address</FieldLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Username</FieldLabel>
            <Input
              name="username"
              type="text"
              placeholder="Choose a username"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Password</FieldLabel>
            <Input
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Confirm password</FieldLabel>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
          </FieldRoot>
          <Checkbox name="terms" isRequired>
            I agree to the terms and conditions
          </Checkbox>
          <Button type="submit" colorScheme="blue">
            Create account
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default UserRegistrationForm
