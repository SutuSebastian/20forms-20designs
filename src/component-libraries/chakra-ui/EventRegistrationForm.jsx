import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Checkbox, Select } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
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
            <FieldLabel>Ticket type</FieldLabel>
            <Select name="ticketType" placeholder="Select ticket">
              <option value="general">General admission</option>
              <option value="vip">VIP</option>
              <option value="student">Student</option>
            </Select>
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Number of guests</FieldLabel>
            <Input
              name="guestCount"
              type="number"
              inputMode="numeric"
              placeholder="0"
            />
          </FieldRoot>
          <Checkbox name="newsletter">Notify me about future events</Checkbox>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default EventRegistrationForm
