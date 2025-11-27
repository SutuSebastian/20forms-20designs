import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Select } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Email for receipt</FieldLabel>
            <Input name="email" type="email" placeholder="your@email.com" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Shipping method</FieldLabel>
            <Select name="shippingMethod" placeholder="Select shipping">
              <option value="standard">Standard</option>
              <option value="express">Express</option>
              <option value="overnight">Overnight</option>
            </Select>
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Card number</FieldLabel>
            <Input
              name="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              inputMode="numeric"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Expiration</FieldLabel>
            <Input
              name="expiration"
              type="text"
              placeholder="MM/YY"
              inputMode="numeric"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>CVC</FieldLabel>
            <Input name="cvc" type="text" placeholder="123" inputMode="numeric" />
          </FieldRoot>
          <FieldRoot>
            <FieldLabel>Promo code</FieldLabel>
            <Input name="promoCode" type="text" placeholder="Enter code" />
          </FieldRoot>
          <Button type="submit" colorScheme="blue">
            Place order
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default CheckoutPaymentForm
