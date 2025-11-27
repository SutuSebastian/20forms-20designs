import { Button, FieldRoot, FieldLabel, Input, Textarea, VStack } from '@chakra-ui/react'
import { Checkbox } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Full name</FieldLabel>
            <Input name="fullName" type="text" placeholder="Enter your full name" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Email address</FieldLabel>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Phone number</FieldLabel>
            <Input name="phone" type="tel" placeholder="+1 234 567 8900" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Role applied for</FieldLabel>
            <Input name="role" type="text" placeholder="Position title" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Resume link</FieldLabel>
            <Input name="resume" type="url" placeholder="https://" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Cover letter</FieldLabel>
            <Textarea
              name="coverLetter"
              placeholder="Tell us why you're a great fit"
              rows={4}
            />
          </FieldRoot>
          <Checkbox name="updates">Keep me informed about future roles</Checkbox>
          <Button type="submit" colorScheme="blue">
            Submit application
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default JobApplicationForm
