import {
  Button,
  FieldRoot,
  FieldLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { Checkbox, Select } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
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
            <FieldLabel>Topic</FieldLabel>
            <Select name="topic" placeholder="Select topic">
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </Select>
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Message</FieldLabel>
            <Textarea
              name="message"
              placeholder="Enter your message"
              rows={4}
            />
          </FieldRoot>
          <Checkbox name="consent">Allow follow-up communication</Checkbox>
          <Button type="submit" colorScheme="blue">
            Submit inquiry
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default ContactInquiryForm
