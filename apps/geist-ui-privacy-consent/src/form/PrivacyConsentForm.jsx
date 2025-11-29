import { Button, Checkbox, Spacer, Text, Divider, Card } from '@geist-ui/core'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Text h5>Essential Cookies</Text>
      <Text small type="secondary">
        These cookies are necessary for the website to function and cannot be disabled.
      </Text>
      <Spacer h={1} />
      <Card>
        <Checkbox checked disabled>
          Strictly necessary cookies
        </Checkbox>
      </Card>

      <Spacer h={1.5} />
      <Divider />
      <Spacer h={1.5} />

      <Text h5>Optional Cookies</Text>
      <Text small type="secondary">
        You can choose which optional cookies to accept.
      </Text>
      <Spacer h={1} />
      <Card>
        <Checkbox name="analytics">Analytics cookies</Checkbox>
        <Spacer h={0.5} />
        <Checkbox name="marketing">Marketing cookies</Checkbox>
        <Spacer h={0.5} />
        <Checkbox name="preferences">Preference cookies</Checkbox>
      </Card>

      <Spacer h={1.5} />
      <Divider />
      <Spacer h={1.5} />

      <Text h5>Communication Preferences</Text>
      <Text small type="secondary">
        Choose how we can communicate with you.
      </Text>
      <Spacer h={1} />
      <Card>
        <Checkbox name="emailNotifications">Email notifications</Checkbox>
        <Spacer h={0.5} />
        <Checkbox name="smsNotifications">SMS notifications</Checkbox>
        <Spacer h={0.5} />
        <Checkbox name="pushNotifications">Push notifications</Checkbox>
      </Card>

      <Spacer h={1.5} />
      <Divider />
      <Spacer h={1.5} />

      <Text h5>Data Processing</Text>
      <Text small type="secondary">
        Consent for data processing activities.
      </Text>
      <Spacer h={1} />
      <Card>
        <Checkbox name="thirdPartySharing">
          Allow sharing with third-party partners
        </Checkbox>
        <Spacer h={0.5} />
        <Checkbox name="profiling">
          Allow profiling for personalized experiences
        </Checkbox>
      </Card>

      <Spacer h={1.5} />
      <Checkbox name="termsAccepted" required>
        I have read and agree to the Privacy Policy
      </Checkbox>
      <Spacer h={1.5} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="secondary" style={{ flex: 1 }}>
          Reject All
        </Button>
        <Button htmlType="submit" type="success" style={{ flex: 1 }}>
          Save Preferences
        </Button>
      </div>
    </form>
  )
}

export default PrivacyConsentForm
