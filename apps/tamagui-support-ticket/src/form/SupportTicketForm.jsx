import {
  Button,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  Select,
  TextArea,
  RadioGroup,
  Circle,
} from 'tamagui'
import { useState } from 'react'

function SupportTicketForm() {
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </YStack>

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
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Brief description of your issue"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="category">Category</Label>
          <Select id="category" value={category} onValueChange={setCategory}>
            <Select.Trigger>
              <Select.Value placeholder="Select a category" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="technical">
                <Select.ItemText>Technical issue</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="billing">
                <Select.ItemText>Billing question</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="account">
                <Select.ItemText>Account management</Select.ItemText>
              </Select.Item>
              <Select.Item index={3} value="feature">
                <Select.ItemText>Feature request</Select.ItemText>
              </Select.Item>
              <Select.Item index={4} value="other">
                <Select.ItemText>Other</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label>Priority</Label>
          <RadioGroup value={priority} onValueChange={setPriority}>
            <XStack gap="$4">
              <XStack gap="$2" alignItems="center">
                <RadioGroup.Item value="low" id="priority-low">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="priority-low">Low</Label>
              </XStack>
              <XStack gap="$2" alignItems="center">
                <RadioGroup.Item value="medium" id="priority-medium">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="priority-medium">Medium</Label>
              </XStack>
              <XStack gap="$2" alignItems="center">
                <RadioGroup.Item value="high" id="priority-high">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="priority-high">High</Label>
              </XStack>
            </XStack>
          </RadioGroup>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            placeholder="Please describe your issue in detail"
            rows={5}
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Submit ticket
        </Button>
      </YStack>
    </form>
  )
}

export default SupportTicketForm
