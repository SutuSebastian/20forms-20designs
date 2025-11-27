import {
  Button,
  FieldRoot,
  FieldLabel,
  Input,
  Textarea,
  VStack,
  HStack,
} from '@chakra-ui/react'
import ChakraUiProvider from './ChakraUiProvider'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
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
          <HStack spacing={4}>
            <FieldRoot isRequired>
              <FieldLabel>Preferred date</FieldLabel>
              <Input name="date" type="date" />
            </FieldRoot>
            <FieldRoot isRequired>
              <FieldLabel>Preferred time</FieldLabel>
              <Input name="time" type="time" />
            </FieldRoot>
          </HStack>
          <FieldRoot isRequired>
            <FieldLabel>Reason for visit</FieldLabel>
            <Textarea name="reason" placeholder="Describe your reason" rows={3} />
          </FieldRoot>
          <Button type="submit" colorScheme="blue">
            Request appointment
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default AppointmentRequestForm
