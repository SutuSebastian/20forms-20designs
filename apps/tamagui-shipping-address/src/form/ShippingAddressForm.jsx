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
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('')
  const [isDefault, setIsDefault] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="fullName">Recipient name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Recipient name"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="street">Street address</Label>
          <Input
            id="street"
            name="street"
            placeholder="Street address"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="street2">Apartment, suite, etc.</Label>
          <Input
            id="street2"
            name="street2"
            placeholder="Apartment, suite, etc."
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
              {COUNTRIES.map((c, index) => (
                <Select.Item key={c.value} index={index} value={c.value}>
                  <Select.ItemText>{c.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="region">State / Province / Territory</Label>
          <Select id="region" value={region} onValueChange={setRegion}>
            <Select.Trigger>
              <Select.Value placeholder="Select an option" />
            </Select.Trigger>
            <Select.Content>
              {regionOptions.map((r, index) => (
                <Select.Item key={r} index={index} value={r}>
                  <Select.ItemText>{r}</Select.ItemText>
                </Select.Item>
              ))}
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

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="default"
            checked={isDefault}
            onCheckedChange={setIsDefault}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="default">Use as default shipping address</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Save address
        </Button>
      </YStack>
    </form>
  )
}

export default ShippingAddressForm
