import { useState } from 'react'
import { Box, Button, Checkbox, Flex, Heading, SelectList, TextField } from 'gestalt'

function OnboardingWizardForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [industry, setIndustry] = useState('')
  const [role, setRole] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [subscribeUpdates, setSubscribeUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={6}>
        <Box>
          <Heading accessibilityLevel={3} size="400">
            Personal Information
          </Heading>
          <Box marginTop={3}>
            <Flex direction="column" gap={4}>
              <TextField
                id="gestalt-onboard-name"
                label="Full name"
                onChange={({ value }) => setFullName(value)}
                type="text"
                value={fullName}
              />
              <TextField
                id="gestalt-onboard-email"
                label="Email address"
                onChange={({ value }) => setEmail(value)}
                type="email"
                value={email}
              />
            </Flex>
          </Box>
        </Box>

        <Box>
          <Heading accessibilityLevel={3} size="400">
            Company Details
          </Heading>
          <Box marginTop={3}>
            <Flex direction="column" gap={4}>
              <TextField
                id="gestalt-onboard-company"
                label="Company name"
                onChange={({ value }) => setCompanyName(value)}
                type="text"
                value={companyName}
              />
              <SelectList
                id="gestalt-onboard-size"
                label="Company size"
                onChange={({ value }) => setCompanySize(value)}
                placeholder="Select size"
                value={companySize}
              >
                {[
                  { label: '1-10 employees', value: '1-10' },
                  { label: '11-50 employees', value: '11-50' },
                  { label: '51-200 employees', value: '51-200' },
                  { label: '201-500 employees', value: '201-500' },
                  { label: '500+ employees', value: '500+' },
                ].map(({ label, value }) => (
                  <SelectList.Option key={value} label={label} value={value} />
                ))}
              </SelectList>
              <SelectList
                id="gestalt-onboard-industry"
                label="Industry"
                onChange={({ value }) => setIndustry(value)}
                placeholder="Select industry"
                value={industry}
              >
                {[
                  { label: 'Technology', value: 'technology' },
                  { label: 'Healthcare', value: 'healthcare' },
                  { label: 'Finance', value: 'finance' },
                  { label: 'Education', value: 'education' },
                  { label: 'Other', value: 'other' },
                ].map(({ label, value }) => (
                  <SelectList.Option key={value} label={label} value={value} />
                ))}
              </SelectList>
            </Flex>
          </Box>
        </Box>

        <Box>
          <Heading accessibilityLevel={3} size="400">
            Your Role
          </Heading>
          <Box marginTop={3}>
            <SelectList
              id="gestalt-onboard-role"
              label="Job role"
              onChange={({ value }) => setRole(value)}
              placeholder="Select role"
              value={role}
            >
              {[
                { label: 'Developer', value: 'developer' },
                { label: 'Designer', value: 'designer' },
                { label: 'Product Manager', value: 'pm' },
                { label: 'Executive', value: 'executive' },
                { label: 'Other', value: 'other' },
              ].map(({ label, value }) => (
                <SelectList.Option key={value} label={label} value={value} />
              ))}
            </SelectList>
          </Box>
        </Box>

        <Box>
          <Heading accessibilityLevel={3} size="400">
            Preferences
          </Heading>
          <Box marginTop={3}>
            <Flex direction="column" gap={3}>
              <Checkbox
                checked={acceptTerms}
                id="gestalt-onboard-terms"
                label="I accept the terms and conditions"
                onChange={({ checked }) => setAcceptTerms(checked)}
              />
              <Checkbox
                checked={subscribeUpdates}
                id="gestalt-onboard-updates"
                label="Subscribe to product updates"
                onChange={({ checked }) => setSubscribeUpdates(checked)}
              />
            </Flex>
          </Box>
        </Box>

        <Box>
          <Button color="red" text="Complete setup" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default OnboardingWizardForm
