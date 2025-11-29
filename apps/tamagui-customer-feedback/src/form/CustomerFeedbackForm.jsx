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
  const [rating, setRating] = useState('')
  const [followUp, setFollowUp] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Name" required />
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
          <Label htmlFor="rating">Overall rating</Label>
          <Select
            id="rating"
            value={rating}
            onValueChange={setRating}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select rating" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="excellent">
                <Select.ItemText>Excellent</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="good">
                <Select.ItemText>Good</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="average">
                <Select.ItemText>Average</Select.ItemText>
              </Select.Item>
              <Select.Item index={3} value="poor">
                <Select.ItemText>Poor</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="comments">Comments</Label>
          <TextArea
            id="comments"
            name="comments"
            placeholder="Comments"
            rows={4}
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="followUp"
            checked={followUp}
            onCheckedChange={setFollowUp}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="followUp">I would like a follow-up</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Send feedback
        </Button>
      </YStack>
    </form>
  )
}

export default CustomerFeedbackForm
