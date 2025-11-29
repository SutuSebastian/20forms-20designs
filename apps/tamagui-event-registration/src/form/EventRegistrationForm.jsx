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

function EventRegistrationForm() {
  const [ticketType, setTicketType] = useState('')
  const [dietaryRestrictions, setDietaryRestrictions] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Full name"
            required
          />
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
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            inputMode="tel"
            placeholder="Phone number"
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="organization">Organization (optional)</Label>
          <Input
            id="organization"
            name="organization"
            placeholder="Organization"
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="ticketType">Ticket type</Label>
          <Select
            id="ticketType"
            value={ticketType}
            onValueChange={setTicketType}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select ticket type" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="general">
                <Select.ItemText>General Admission</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="vip">
                <Select.ItemText>VIP</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="student">
                <Select.ItemText>Student</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="specialRequirements">Special requirements</Label>
          <TextArea
            id="specialRequirements"
            name="specialRequirements"
            placeholder="Any special requirements"
            rows={3}
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="dietary"
            checked={dietaryRestrictions}
            onCheckedChange={setDietaryRestrictions}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="dietary">I have dietary restrictions</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Register
        </Button>
      </YStack>
    </form>
  )
}

export default EventRegistrationForm
