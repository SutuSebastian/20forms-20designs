import { Button, Input, Label, YStack, Text } from 'tamagui'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Tracking order...')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <Text>Enter your order number to track your shipment.</Text>

        <YStack gap="$1">
          <Label htmlFor="orderNumber">Order number</Label>
          <Input
            id="orderNumber"
            name="orderNumber"
            placeholder="e.g., ORD-123456"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="email">Email address (optional)</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email address"
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Track order
        </Button>
      </YStack>
    </form>
  )
}

export default OrderTrackingForm
