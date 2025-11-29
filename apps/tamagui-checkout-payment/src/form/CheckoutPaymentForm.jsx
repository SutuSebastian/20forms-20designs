import {
  Button,
  Checkbox,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  Select,
} from 'tamagui'
import { useState } from 'react'

function CheckoutPaymentForm() {
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')
  const [saveCard, setSaveCard] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Payment submitted!')
  }

  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, '0')
  )
  const years = Array.from({ length: 10 }, (_, i) =>
    String(new Date().getFullYear() + i)
  )

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="cardName">Name on card</Label>
          <Input
            id="cardName"
            name="cardName"
            placeholder="Name on card"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="cardNumber">Card number</Label>
          <Input
            id="cardNumber"
            name="cardNumber"
            inputMode="numeric"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
          />
        </YStack>

        <XStack gap="$2">
          <YStack gap="$1" flex={1}>
            <Label htmlFor="expiryMonth">Expiry month</Label>
            <Select
              id="expiryMonth"
              value={expiryMonth}
              onValueChange={setExpiryMonth}
            >
              <Select.Trigger>
                <Select.Value placeholder="MM" />
              </Select.Trigger>
              <Select.Content>
                {months.map((m, index) => (
                  <Select.Item key={m} index={index} value={m}>
                    <Select.ItemText>{m}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </YStack>

          <YStack gap="$1" flex={1}>
            <Label htmlFor="expiryYear">Expiry year</Label>
            <Select
              id="expiryYear"
              value={expiryYear}
              onValueChange={setExpiryYear}
            >
              <Select.Trigger>
                <Select.Value placeholder="YYYY" />
              </Select.Trigger>
              <Select.Content>
                {years.map((y, index) => (
                  <Select.Item key={y} index={index} value={y}>
                    <Select.ItemText>{y}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </YStack>
        </XStack>

        <YStack gap="$1">
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            name="cvv"
            inputMode="numeric"
            placeholder="123"
            maxLength={4}
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="saveCard"
            checked={saveCard}
            onCheckedChange={setSaveCard}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="saveCard">Save card for future purchases</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Pay now
        </Button>
      </YStack>
    </form>
  )
}

export default CheckoutPaymentForm
