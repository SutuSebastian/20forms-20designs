import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Select } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Name on card</FieldLabel>
            <Input name="cardName" type="text" placeholder="Full name" />
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
            <FieldLabel>Expiration date</FieldLabel>
            <Input
              name="expiration"
              type="text"
              placeholder="MM/YY"
              inputMode="numeric"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Security code</FieldLabel>
            <Input
              name="cvc"
              type="text"
              placeholder="CVC"
              inputMode="numeric"
            />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Billing address</FieldLabel>
            <Input name="address" type="text" placeholder="Street address" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Country</FieldLabel>
            <Select name="country" placeholder="Select country">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </Select>
          </FieldRoot>
          <Button type="submit" colorScheme="blue">
            Save billing details
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default BillingInfoForm
