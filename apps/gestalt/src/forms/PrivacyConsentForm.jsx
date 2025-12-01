import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Fieldset,
  Flex,
  TextArea,
  TextField,
} from 'gestalt'

function PrivacyConsentForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [emailOptIn, setEmailOptIn] = useState(false)
  const [smsOptIn, setSmsOptIn] = useState(false)
  const [phoneOptIn, setPhoneOptIn] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [personalization, setPersonalization] = useState(false)
  const [notes, setNotes] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={6}>
        <TextField
          id="gestalt-privacy-name"
          label="Full name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-privacy-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />

        <Fieldset legend="Communication channels">
          <Flex direction="column" gap={3}>
            <Checkbox
              checked={emailOptIn}
              id="gestalt-privacy-email-opt-in"
              label="Email updates"
              onChange={({ checked }) => setEmailOptIn(checked)}
            />
            <Checkbox
              checked={smsOptIn}
              id="gestalt-privacy-sms"
              label="SMS notifications"
              onChange={({ checked }) => setSmsOptIn(checked)}
            />
            <Checkbox
              checked={phoneOptIn}
              id="gestalt-privacy-phone"
              label="Phone calls"
              onChange={({ checked }) => setPhoneOptIn(checked)}
            />
          </Flex>
        </Fieldset>

        <Fieldset legend="Privacy options">
          <Flex direction="column" gap={3}>
            <Checkbox
              checked={analytics}
              id="gestalt-privacy-analytics"
              label="Allow analytics cookies"
              onChange={({ checked }) => setAnalytics(checked)}
            />
            <Checkbox
              checked={personalization}
              id="gestalt-privacy-personalization"
              label="Allow personalized content"
              onChange={({ checked }) => setPersonalization(checked)}
            />
          </Flex>
        </Fieldset>

        <TextArea
          id="gestalt-privacy-notes"
          label="Additional notes"
          onChange={({ value }) => setNotes(value)}
          value={notes}
        />

        <Box>
          <Button color="red" text="Save preferences" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default PrivacyConsentForm
