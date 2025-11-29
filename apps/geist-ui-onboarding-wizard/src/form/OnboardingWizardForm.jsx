import {
  Input,
  Button,
  Select,
  Checkbox,
  Textarea,
  Spacer,
  Text,
} from '@geist-ui/core'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <Text h4>Step 1: Account</Text>
        <Spacer h={1} />
        <Input
          name="email"
          type="email"
          width="100%"
          placeholder="Work email"
          required
        >
          Work email
        </Input>
        <Spacer h={1} />
        <Input.Password
          name="password"
          width="100%"
          placeholder="Password"
          minLength={8}
          required
        >
          Password
        </Input.Password>
      </section>
      <Spacer h={1.5} />
      <section>
        <Text h4>Step 2: Team</Text>
        <Spacer h={1} />
        <Input name="teamName" width="100%" placeholder="Team name" required>
          Team name
        </Input>
        <Spacer h={1} />
        <Text small>Team size</Text>
        <Spacer h={0.5} />
        <Select name="teamSize" placeholder="Select size" width="100%">
          <Select.Option value="1-5">1-5</Select.Option>
          <Select.Option value="6-20">6-20</Select.Option>
          <Select.Option value="21-50">21-50</Select.Option>
          <Select.Option value="50+">50+</Select.Option>
        </Select>
      </section>
      <Spacer h={1.5} />
      <section>
        <Text h4>Step 3: Preferences</Text>
        <Spacer h={1} />
        <Text small>Primary goal</Text>
        <Spacer h={0.5} />
        <Textarea
          name="goal"
          width="100%"
          placeholder="Your primary goal"
          rows={3}
          required
        />
        <Spacer h={1} />
        <Checkbox name="updates">Send me product tips</Checkbox>
      </section>
      <Spacer h={1.5} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          type="secondary"
          onClick={() => alert('Back action placeholder')}
          style={{ flex: 1 }}
        >
          Back
        </Button>
        <Button htmlType="submit" type="success" style={{ flex: 1 }}>
          Finish setup
        </Button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
