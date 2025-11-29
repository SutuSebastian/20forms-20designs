import {
  Button,
  Checkbox,
  Label,
  XStack,
  YStack,
  Text,
  Separator,
  H4,
  Paragraph,
} from 'tamagui'
import { useState } from 'react'

function PrivacyConsentForm() {
  const [essential, setEssential] = useState(true)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [thirdParty, setThirdParty] = useState(false)
  const [personalization, setPersonalization] = useState(false)
  const [terms, setTerms] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [age, setAge] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!terms || !privacy || !age) {
      alert('Please accept all required agreements to continue.')
      return
    }
    alert('Preferences saved!')
  }

  const acceptAll = () => {
    setAnalytics(true)
    setMarketing(true)
    setThirdParty(true)
    setPersonalization(true)
    setTerms(true)
    setPrivacy(true)
    setAge(true)
  }

  const rejectOptional = () => {
    setAnalytics(false)
    setMarketing(false)
    setThirdParty(false)
    setPersonalization(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$4">
        <YStack gap="$2">
          <H4>Cookie Preferences</H4>
          <Paragraph size="$2" color="$gray11">
            We use cookies to enhance your browsing experience. Please select
            your preferences below.
          </Paragraph>
        </YStack>

        <Separator />

        <YStack gap="$3">
          <XStack gap="$2" alignItems="flex-start">
            <Checkbox
              id="essential"
              checked={essential}
              onCheckedChange={setEssential}
              disabled
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <YStack flex={1}>
              <Label htmlFor="essential">Essential cookies (required)</Label>
              <Text size="$2" color="$gray11">
                Necessary for the website to function properly. Cannot be
                disabled.
              </Text>
            </YStack>
          </XStack>

          <XStack gap="$2" alignItems="flex-start">
            <Checkbox
              id="analytics"
              checked={analytics}
              onCheckedChange={setAnalytics}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <YStack flex={1}>
              <Label htmlFor="analytics">Analytics cookies</Label>
              <Text size="$2" color="$gray11">
                Help us understand how visitors interact with our website.
              </Text>
            </YStack>
          </XStack>

          <XStack gap="$2" alignItems="flex-start">
            <Checkbox
              id="marketing"
              checked={marketing}
              onCheckedChange={setMarketing}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <YStack flex={1}>
              <Label htmlFor="marketing">Marketing cookies</Label>
              <Text size="$2" color="$gray11">
                Used to deliver personalized advertisements.
              </Text>
            </YStack>
          </XStack>

          <XStack gap="$2" alignItems="flex-start">
            <Checkbox
              id="thirdParty"
              checked={thirdParty}
              onCheckedChange={setThirdParty}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <YStack flex={1}>
              <Label htmlFor="thirdParty">Third-party cookies</Label>
              <Text size="$2" color="$gray11">
                Allow third-party services to provide features and content.
              </Text>
            </YStack>
          </XStack>

          <XStack gap="$2" alignItems="flex-start">
            <Checkbox
              id="personalization"
              checked={personalization}
              onCheckedChange={setPersonalization}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <YStack flex={1}>
              <Label htmlFor="personalization">Personalization</Label>
              <Text size="$2" color="$gray11">
                Remember your preferences and customize your experience.
              </Text>
            </YStack>
          </XStack>
        </YStack>

        <Separator />

        <YStack gap="$2">
          <H4>Required Agreements</H4>
        </YStack>

        <YStack gap="$3">
          <XStack gap="$2" alignItems="center">
            <Checkbox id="terms" checked={terms} onCheckedChange={setTerms}>
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="terms">I accept the Terms of Service *</Label>
          </XStack>

          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="privacy"
              checked={privacy}
              onCheckedChange={setPrivacy}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="privacy">
              I have read and understood the Privacy Policy *
            </Label>
          </XStack>

          <XStack gap="$2" alignItems="center">
            <Checkbox id="age" checked={age} onCheckedChange={setAge}>
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="age">I confirm that I am 18 years or older *</Label>
          </XStack>
        </YStack>

        <XStack gap="$2" flexWrap="wrap">
          <Button flex={1} minWidth={100} onPress={acceptAll}>
            Accept all
          </Button>
          <Button flex={1} minWidth={100} onPress={rejectOptional}>
            Reject optional
          </Button>
          <Button flex={1} minWidth={100} themeInverse onPress={() => {}}>
            Save preferences
          </Button>
        </XStack>
      </YStack>
    </form>
  )
}

export default PrivacyConsentForm
