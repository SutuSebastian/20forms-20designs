import { useState } from 'react'
import { Button, Switch, Link, Divider } from '@nextui-org/react'

function PrivacyConsentForm() {
  const [consents, setConsents] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    thirdParty: false,
  })

  const handleChange = (key, value) => {
    setConsents((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Privacy preferences saved!')
  }

  const handleAcceptAll = () => {
    setConsents({
      essential: true,
      analytics: true,
      marketing: true,
      thirdParty: true,
    })
  }

  const handleRejectAll = () => {
    setConsents({
      essential: true,
      analytics: false,
      marketing: false,
      thirdParty: false,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <p className="text-default-600">
        We use cookies and similar technologies to enhance your experience.
        Please review and manage your preferences below.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Essential Cookies</p>
            <p className="text-sm text-default-500">
              Required for the website to function properly
            </p>
          </div>
          <Switch isSelected={consents.essential} isDisabled size="sm" />
        </div>

        <Divider />

        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Analytics Cookies</p>
            <p className="text-sm text-default-500">
              Help us understand how visitors interact with our website
            </p>
          </div>
          <Switch
            isSelected={consents.analytics}
            onValueChange={(v) => handleChange('analytics', v)}
            size="sm"
          />
        </div>

        <Divider />

        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Marketing Cookies</p>
            <p className="text-sm text-default-500">
              Used to deliver personalized advertisements
            </p>
          </div>
          <Switch
            isSelected={consents.marketing}
            onValueChange={(v) => handleChange('marketing', v)}
            size="sm"
          />
        </div>

        <Divider />

        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Third-Party Cookies</p>
            <p className="text-sm text-default-500">
              Allow third-party services to provide additional functionality
            </p>
          </div>
          <Switch
            isSelected={consents.thirdParty}
            onValueChange={(v) => handleChange('thirdParty', v)}
            size="sm"
          />
        </div>
      </div>

      <p className="text-sm text-default-500">
        For more information, please read our{' '}
        <Link href="#" size="sm">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link href="#" size="sm">
          Cookie Policy
        </Link>
        .
      </p>

      <div className="flex gap-2">
        <Button type="button" variant="bordered" onPress={handleRejectAll}>
          Reject All
        </Button>
        <Button type="button" variant="bordered" onPress={handleAcceptAll}>
          Accept All
        </Button>
        <Button type="submit" color="primary" className="flex-1">
          Save Preferences
        </Button>
      </div>
    </form>
  )
}

export default PrivacyConsentForm
