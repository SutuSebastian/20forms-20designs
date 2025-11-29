import { useState } from 'react'
import { Box, Button, Checkbox, Fieldset, Flex } from 'gestalt'

function PrivacyConsentForm() {
  const [essentialCookies] = useState(true)
  const [analyticsCookies, setAnalyticsCookies] = useState(false)
  const [marketingCookies, setMarketingCookies] = useState(false)
  const [thirdPartyCookies, setThirdPartyCookies] = useState(false)
  const [dataSharing, setDataSharing] = useState(false)
  const [emailMarketing, setEmailMarketing] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={6}>
        <Fieldset legend="Cookie preferences">
          <Flex direction="column" gap={3}>
            <Checkbox
              checked={essentialCookies}
              disabled
              id="gestalt-privacy-essential"
              label="Essential cookies (required)"
              onChange={() => {}}
            />
            <Checkbox
              checked={analyticsCookies}
              id="gestalt-privacy-analytics"
              label="Analytics cookies"
              onChange={({ checked }) => setAnalyticsCookies(checked)}
            />
            <Checkbox
              checked={marketingCookies}
              id="gestalt-privacy-marketing"
              label="Marketing cookies"
              onChange={({ checked }) => setMarketingCookies(checked)}
            />
            <Checkbox
              checked={thirdPartyCookies}
              id="gestalt-privacy-third-party"
              label="Third-party cookies"
              onChange={({ checked }) => setThirdPartyCookies(checked)}
            />
          </Flex>
        </Fieldset>

        <Fieldset legend="Communication preferences">
          <Flex direction="column" gap={3}>
            <Checkbox
              checked={dataSharing}
              id="gestalt-privacy-data-sharing"
              label="Allow data sharing with partners"
              onChange={({ checked }) => setDataSharing(checked)}
            />
            <Checkbox
              checked={emailMarketing}
              id="gestalt-privacy-email"
              label="Receive marketing emails"
              onChange={({ checked }) => setEmailMarketing(checked)}
            />
          </Flex>
        </Fieldset>

        <Box>
          <Button color="red" text="Save preferences" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default PrivacyConsentForm
