import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Checkbox, Select } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
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
            <FieldLabel>Frequency</FieldLabel>
            <Select name="frequency" placeholder="Select frequency">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </Select>
          </FieldRoot>
          <Checkbox name="agree">Receive product updates</Checkbox>
          <Button type="submit" colorScheme="blue">
            Subscribe
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default NewsletterSubscriptionForm
