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
  const [frequency, setFrequency] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
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
          <Label htmlFor="frequency">Frequency</Label>
          <Select id="frequency" value={frequency} onValueChange={setFrequency}>
            <Select.Trigger>
              <Select.Value placeholder="Select frequency" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="weekly">
                <Select.ItemText>Weekly</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="monthly">
                <Select.ItemText>Monthly</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="quarterly">
                <Select.ItemText>Quarterly</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="agree"
            checked={agree}
            onCheckedChange={setAgree}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="agree">Receive product updates</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Subscribe
        </Button>
      </YStack>
    </form>
  )
}

export default NewsletterSubscriptionForm
