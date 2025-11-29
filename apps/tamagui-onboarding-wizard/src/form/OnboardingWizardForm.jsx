import {
  Button,
  Checkbox,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  Select,
  Separator,
  H3,
} from 'tamagui'
import { useState } from 'react'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('')
  const [industry, setIndustry] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [notifications, setNotifications] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      alert('Onboarding complete!')
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$4">
        <XStack justifyContent="center" gap="$2">
          {[1, 2, 3].map((s) => (
            <XStack
              key={s}
              width={32}
              height={32}
              borderRadius={16}
              backgroundColor={step >= s ? '$blue10' : '$gray5'}
              alignItems="center"
              justifyContent="center"
            >
              <Text color={step >= s ? 'white' : '$gray11'}>{s}</Text>
            </XStack>
          ))}
        </XStack>

        {step === 1 && (
          <YStack gap="$3">
            <H3>Personal Information</H3>
            <Separator />

            <YStack gap="$1">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First name"
                required
              />
            </YStack>

            <YStack gap="$1">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last name"
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
          </YStack>
        )}

        {step === 2 && (
          <YStack gap="$3">
            <H3>Professional Details</H3>
            <Separator />

            <YStack gap="$1">
              <Label htmlFor="company">Company name</Label>
              <Input
                id="company"
                name="company"
                placeholder="Company name"
                required
              />
            </YStack>

            <YStack gap="$1">
              <Label htmlFor="role">Your role</Label>
              <Select id="role" value={role} onValueChange={setRole}>
                <Select.Trigger>
                  <Select.Value placeholder="Select your role" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item index={0} value="developer">
                    <Select.ItemText>Developer</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={1} value="designer">
                    <Select.ItemText>Designer</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={2} value="manager">
                    <Select.ItemText>Manager</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={3} value="executive">
                    <Select.ItemText>Executive</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={4} value="other">
                    <Select.ItemText>Other</Select.ItemText>
                  </Select.Item>
                </Select.Content>
              </Select>
            </YStack>

            <YStack gap="$1">
              <Label htmlFor="industry">Industry</Label>
              <Select
                id="industry"
                value={industry}
                onValueChange={setIndustry}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Select industry" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item index={0} value="technology">
                    <Select.ItemText>Technology</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={1} value="finance">
                    <Select.ItemText>Finance</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={2} value="healthcare">
                    <Select.ItemText>Healthcare</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={3} value="education">
                    <Select.ItemText>Education</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={4} value="retail">
                    <Select.ItemText>Retail</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={5} value="other">
                    <Select.ItemText>Other</Select.ItemText>
                  </Select.Item>
                </Select.Content>
              </Select>
            </YStack>

            <YStack gap="$1">
              <Label htmlFor="companySize">Company size</Label>
              <Select
                id="companySize"
                value={companySize}
                onValueChange={setCompanySize}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Select company size" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item index={0} value="1-10">
                    <Select.ItemText>1-10 employees</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={1} value="11-50">
                    <Select.ItemText>11-50 employees</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={2} value="51-200">
                    <Select.ItemText>51-200 employees</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={3} value="201-500">
                    <Select.ItemText>201-500 employees</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={4} value="500+">
                    <Select.ItemText>500+ employees</Select.ItemText>
                  </Select.Item>
                </Select.Content>
              </Select>
            </YStack>
          </YStack>
        )}

        {step === 3 && (
          <YStack gap="$3">
            <H3>Preferences</H3>
            <Separator />

            <YStack gap="$1">
              <Label htmlFor="username">Choose a username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </YStack>

            <YStack gap="$1">
              <Label htmlFor="bio">Short bio</Label>
              <Input id="bio" name="bio" placeholder="Tell us about yourself" />
            </YStack>

            <XStack gap="$2" alignItems="center">
              <Checkbox
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              >
                <Checkbox.Indicator>
                  <Text>✓</Text>
                </Checkbox.Indicator>
              </Checkbox>
              <Label htmlFor="notifications">Enable email notifications</Label>
            </XStack>

            <XStack gap="$2" alignItems="center">
              <Checkbox
                id="newsletter"
                checked={newsletter}
                onCheckedChange={setNewsletter}
              >
                <Checkbox.Indicator>
                  <Text>✓</Text>
                </Checkbox.Indicator>
              </Checkbox>
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </XStack>
          </YStack>
        )}

        <XStack gap="$2" justifyContent="space-between">
          {step > 1 ? (
            <Button onPress={handleBack}>Back</Button>
          ) : (
            <YStack flex={1} />
          )}
          <Button themeInverse onPress={() => {}}>
            {step < 3 ? 'Continue' : 'Complete'}
          </Button>
        </XStack>
      </YStack>
    </form>
  )
}

export default OnboardingWizardForm
