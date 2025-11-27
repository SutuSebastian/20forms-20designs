import {
  Button,
  FieldRoot,
  FieldLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import ChakraUiProvider from './ChakraUiProvider'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>First name</FieldLabel>
            <Input name="firstName" type="text" placeholder="Enter first name" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Last name</FieldLabel>
            <Input name="lastName" type="text" placeholder="Enter last name" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Email address</FieldLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FieldRoot>
          <FieldRoot>
            <FieldLabel>Phone number</FieldLabel>
            <Input name="phone" type="tel" placeholder="Enter phone number" />
          </FieldRoot>
          <FieldRoot>
            <FieldLabel>Short bio</FieldLabel>
            <Textarea name="bio" placeholder="Tell us about yourself" rows={3} />
          </FieldRoot>
          <Button type="submit" colorScheme="blue">
            Save changes
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default ProfileUpdateForm
