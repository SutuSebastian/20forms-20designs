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

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Name</FieldLabel>
            <Input name="name" type="text" placeholder="Your name" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Email address</FieldLabel>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Overall rating</FieldLabel>
            <Select name="rating" placeholder="Select rating">
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </Select>
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Comments</FieldLabel>
            <Textarea name="comments" placeholder="Share your feedback" rows={4} />
          </FieldRoot>
          <Checkbox name="followUp">I would like a follow-up</Checkbox>
          <Button type="submit" colorScheme="blue">
            Send feedback
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default CustomerFeedbackForm
