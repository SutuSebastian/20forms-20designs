import {
  Button,
  FieldRoot,
  FieldLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Box,
  HStack,
} from '@chakra-ui/react'
import { Checkbox, Select } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading size="md" mb={4}>
              Step 1: Account
            </Heading>
            <VStack spacing={4}>
              <FieldRoot isRequired>
                <FieldLabel>Work email</FieldLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                />
              </FieldRoot>
              <FieldRoot isRequired>
                <FieldLabel>Password</FieldLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                />
              </FieldRoot>
            </VStack>
          </Box>

          <Box>
            <Heading size="md" mb={4}>
              Step 2: Team
            </Heading>
            <VStack spacing={4}>
              <FieldRoot isRequired>
                <FieldLabel>Team name</FieldLabel>
                <Input name="teamName" type="text" placeholder="Your team name" />
              </FieldRoot>
              <FieldRoot isRequired>
                <FieldLabel>Team size</FieldLabel>
                <Select name="teamSize" placeholder="Select size">
                  <option value="1-5">1-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="50+">50+</option>
                </Select>
              </FieldRoot>
            </VStack>
          </Box>

          <Box>
            <Heading size="md" mb={4}>
              Step 3: Preferences
            </Heading>
            <VStack spacing={4}>
              <FieldRoot isRequired>
                <FieldLabel>Primary goal</FieldLabel>
                <Textarea
                  name="goal"
                  placeholder="What do you want to achieve?"
                  rows={3}
                />
              </FieldRoot>
              <Checkbox name="updates">Send me product tips</Checkbox>
            </VStack>
          </Box>

          <HStack spacing={4}>
            <Button onClick={() => alert('Back action placeholder')}>Back</Button>
            <Button type="submit" colorScheme="blue">
              Finish setup
            </Button>
          </HStack>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default OnboardingWizardForm
