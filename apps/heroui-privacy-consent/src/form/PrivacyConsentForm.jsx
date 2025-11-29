import { Button, Checkbox } from '@heroui/react'

function PrivacyConsentForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Essential Cookies</h2>
        <p className="text-sm text-default-500">
          These cookies are required for the website to function and cannot be
          disabled.
        </p>
        <Checkbox isSelected isDisabled name="essential">
          Essential cookies (required)
        </Checkbox>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Analytics Cookies</h2>
        <p className="text-sm text-default-500">
          Help us understand how visitors interact with our website.
        </p>
        <Checkbox name="analytics">Analytics cookies</Checkbox>
        <Checkbox name="performance">Performance cookies</Checkbox>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Marketing Cookies</h2>
        <p className="text-sm text-default-500">
          Used to deliver personalized advertisements.
        </p>
        <Checkbox name="marketing">Marketing cookies</Checkbox>
        <Checkbox name="thirdParty">Third-party cookies</Checkbox>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Communication Preferences</h2>
        <Checkbox name="emailMarketing">Receive marketing emails</Checkbox>
        <Checkbox name="smsMarketing">Receive SMS notifications</Checkbox>
        <Checkbox name="pushNotifications">Receive push notifications</Checkbox>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Data Processing</h2>
        <Checkbox name="dataProcessing" isRequired>
          I consent to the processing of my personal data
        </Checkbox>
        <Checkbox name="privacyPolicy" isRequired>
          I have read and accept the privacy policy
        </Checkbox>
      </div>

      <div className="flex gap-2">
        <Button type="submit" color="primary">
          Save preferences
        </Button>
        <Button type="button" variant="bordered">
          Accept all
        </Button>
        <Button type="button" variant="light">
          Reject all
        </Button>
      </div>
    </form>
  )
}

export default PrivacyConsentForm
