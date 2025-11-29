import {
  Button,
  Checkbox,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  Select,
  TextArea,
} from 'tamagui'
import { useState } from 'react'

function CustomerFeedbackForm() {
  const [satisfaction, setSatisfaction] = useState('')
  const [recommend, setRecommend] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
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
          <Label htmlFor="satisfaction">Satisfaction level</Label>
          <Select
            id="satisfaction"
            value={satisfaction}
            onValueChange={setSatisfaction}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select satisfaction level" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="very-satisfied">
                <Select.ItemText>Very satisfied</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="satisfied">
                <Select.ItemText>Satisfied</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="neutral">
                <Select.ItemText>Neutral</Select.ItemText>
              </Select.Item>
              <Select.Item index={3} value="dissatisfied">
                <Select.ItemText>Dissatisfied</Select.ItemText>
              </Select.Item>
              <Select.Item index={4} value="very-dissatisfied">
                <Select.ItemText>Very dissatisfied</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="feedback">Feedback</Label>
          <TextArea
            id="feedback"
            name="feedback"
            placeholder="Share your experience with us"
            rows={4}
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="recommend"
            checked={recommend}
            onCheckedChange={setRecommend}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="recommend">I would recommend this product</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Submit feedback
        </Button>
      </YStack>
    </form>
  )
}

export default CustomerFeedbackForm
