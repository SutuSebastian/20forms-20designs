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

function NewsletterSubscriptionForm() {
  const [frequency, setFrequency] = useState('weekly')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscription successful!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email address"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" placeholder="First name" />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="frequency">Email frequency</Label>
          <Select id="frequency" value={frequency} onValueChange={setFrequency}>
            <Select.Trigger>
              <Select.Value placeholder="Select frequency" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="daily">
                <Select.ItemText>Daily</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="weekly">
                <Select.ItemText>Weekly</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="monthly">
                <Select.ItemText>Monthly</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={setTermsAccepted}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="terms">I agree to receive marketing emails</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Subscribe
        </Button>
      </YStack>
    </form>
  )
}

export default NewsletterSubscriptionForm
