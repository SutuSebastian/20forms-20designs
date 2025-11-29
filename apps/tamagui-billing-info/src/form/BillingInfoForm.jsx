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

function BillingInfoForm() {
  const [country, setCountry] = useState('US')
  const [sameAsShipping, setSameAsShipping] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing information saved!')
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
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" name="company" placeholder="Company" />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="address">Street address</Label>
          <Input
            id="address"
            name="address"
            placeholder="Street address"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" placeholder="City" required />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="country">Country</Label>
          <Select id="country" value={country} onValueChange={setCountry}>
            <Select.Trigger>
              <Select.Value placeholder="Select country" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="US">
                <Select.ItemText>United States</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="CA">
                <Select.ItemText>Canada</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="UK">
                <Select.ItemText>United Kingdom</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="postalCode">Postal code</Label>
          <Input
            id="postalCode"
            name="postalCode"
            placeholder="Postal code"
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

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="sameAsShipping"
            checked={sameAsShipping}
            onCheckedChange={setSameAsShipping}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="sameAsShipping">Same as shipping address</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Save billing information
        </Button>
      </YStack>
    </form>
  )
}

export default BillingInfoForm
