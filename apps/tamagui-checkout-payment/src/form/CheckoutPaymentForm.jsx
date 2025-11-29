import { Button, Input, Label, YStack, Select } from 'tamagui'
import { useState } from 'react'

function CheckoutPaymentForm() {
  const [shippingMethod, setShippingMethod] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="email">Email for receipt</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email for receipt"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="shippingMethod">Shipping method</Label>
          <Select
            id="shippingMethod"
            value={shippingMethod}
            onValueChange={setShippingMethod}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select shipping" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="standard">
                <Select.ItemText>Standard</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="express">
                <Select.ItemText>Express</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="overnight">
                <Select.ItemText>Overnight</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="cardNumber">Card number</Label>
          <Input
            id="cardNumber"
            name="cardNumber"
            inputMode="numeric"
            placeholder="Card number"
            maxLength={19}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="expiration">Expiration</Label>
          <Input
            id="expiration"
            name="expiration"
            placeholder="MM/YY"
            inputMode="numeric"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="cvc">CVC</Label>
          <Input
            id="cvc"
            name="cvc"
            inputMode="numeric"
            placeholder="CVC"
            maxLength={4}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="promoCode">Promo code</Label>
          <Input id="promoCode" name="promoCode" placeholder="Promo code" />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Place order
        </Button>
      </YStack>
    </form>
  )
}

export default CheckoutPaymentForm
