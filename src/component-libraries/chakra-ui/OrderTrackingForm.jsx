import {
  Button,
  FieldRoot,
  FieldLabel,
  Input,
  VStack,
} from '@chakra-ui/react'
import ChakraUiProvider from './ChakraUiProvider'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Order number</FieldLabel>
            <Input name="orderNumber" type="text" placeholder="ORD-123456" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Email address</FieldLabel>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Postal code</FieldLabel>
            <Input name="postalCode" type="text" placeholder="Postal code" />
          </FieldRoot>
          <Button type="submit" colorScheme="blue">
            Find order
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default OrderTrackingForm
