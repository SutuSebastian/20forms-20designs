import {
  Button,
  FieldRoot,
  FieldLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Box,
} from '@chakra-ui/react'
import { Checkbox } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <VStack spacing={4}>
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
              <Input name="email" type="email" placeholder="your@email.com" />
            </FieldRoot>
          </VStack>

          <Box>
            <Heading size="sm" mb={3}>
              Communication channels
            </Heading>
            <VStack align="start" spacing={2}>
              <Checkbox name="emailOptIn">Email updates</Checkbox>
              <Checkbox name="smsOptIn">SMS notifications</Checkbox>
              <Checkbox name="phoneOptIn">Phone calls</Checkbox>
            </VStack>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>
              Privacy options
            </Heading>
            <VStack align="start" spacing={2}>
              <Checkbox name="analytics">Allow analytics cookies</Checkbox>
              <Checkbox name="personalization">
                Allow personalized content
              </Checkbox>
            </VStack>
          </Box>

          <FieldRoot>
            <FieldLabel>Additional notes</FieldLabel>
            <Textarea
              name="notes"
              placeholder="Any additional preferences"
              rows={3}
            />
          </FieldRoot>

          <Button type="submit" colorScheme="blue">
            Save preferences
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default PrivacyConsentForm
