import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
} from '@elastic/eui'

function PrivacyConsentForm() {
  const [essentialCookies, setEssentialCookies] = useState(true)
  const [analyticsCookies, setAnalyticsCookies] = useState(false)
  const [marketingCookies, setMarketingCookies] = useState(false)
  const [thirdPartyCookies, setThirdPartyCookies] = useState(false)
  const [privacyPolicy, setPrivacyPolicy] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }, [])

  const handleAcceptAll = useCallback(() => {
    setAnalyticsCookies(true)
    setMarketingCookies(true)
    setThirdPartyCookies(true)
    setPrivacyPolicy(true)
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow>
        <EuiText size="s">
          <p>
            Manage your privacy preferences. Essential cookies are always
            enabled.
          </p>
        </EuiText>
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="essentialCookies"
          label="Essential cookies (required)"
          checked={essentialCookies}
          onChange={() => {}}
          disabled
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="analyticsCookies"
          label="Analytics cookies"
          checked={analyticsCookies}
          onChange={(e) => setAnalyticsCookies(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="marketingCookies"
          label="Marketing cookies"
          checked={marketingCookies}
          onChange={(e) => setMarketingCookies(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="thirdPartyCookies"
          label="Third-party cookies"
          checked={thirdPartyCookies}
          onChange={(e) => setThirdPartyCookies(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="privacyPolicy"
          label="I have read and agree to the Privacy Policy"
          checked={privacyPolicy}
          onChange={(e) => setPrivacyPolicy(e.target.checked)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiButton type="submit" fill>
              Save preferences
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleAcceptAll}>Accept all</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFormRow>
    </EuiForm>
  )
}

export default PrivacyConsentForm
