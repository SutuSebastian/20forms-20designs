import { useState } from 'react'
import {
  Input,
  Button,
  Select,
  Checkbox,
  Spacer,
  Text,
  Progress,
  Divider,
} from '@geist-ui/core'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const [industry, setIndustry] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const totalSteps = 3

  const handleSubmit = (event) => {
    event.preventDefault()
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      alert('Onboarding completed!')
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Text h4>
        Step {step} of {totalSteps}
      </Text>
      <Spacer h={0.5} />
      <Progress value={(step / totalSteps) * 100} />
      <Spacer h={1} />
      <Divider />
      <Spacer h={1} />

      {step === 1 && (
        <>
          <Text h5>Personal Information</Text>
          <Spacer h={1} />
          <Input name="fullName" width="100%" placeholder="Full name" required>
            Full name
          </Input>
          <Spacer h={1} />
          <Input
            name="email"
            type="email"
            width="100%"
            placeholder="Email address"
            required
          >
            Email address
          </Input>
          <Spacer h={1} />
          <Input name="jobTitle" width="100%" placeholder="Job title">
            Job title
          </Input>
        </>
      )}

      {step === 2 && (
        <>
          <Text h5>Company Information</Text>
          <Spacer h={1} />
          <Input
            name="companyName"
            width="100%"
            placeholder="Company name"
            required
          >
            Company name
          </Input>
          <Spacer h={1} />
          <Text small>Industry</Text>
          <Spacer h={0.5} />
          <Select
            placeholder="Select industry"
            width="100%"
            value={industry}
            onChange={(val) => setIndustry(val)}
          >
            <Select.Option value="technology">Technology</Select.Option>
            <Select.Option value="finance">Finance</Select.Option>
            <Select.Option value="healthcare">Healthcare</Select.Option>
            <Select.Option value="retail">Retail</Select.Option>
            <Select.Option value="education">Education</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
          <Spacer h={1} />
          <Text small>Team size</Text>
          <Spacer h={0.5} />
          <Select
            placeholder="Select team size"
            width="100%"
            value={teamSize}
            onChange={(val) => setTeamSize(val)}
          >
            <Select.Option value="1-10">1-10</Select.Option>
            <Select.Option value="11-50">11-50</Select.Option>
            <Select.Option value="51-200">51-200</Select.Option>
            <Select.Option value="201-500">201-500</Select.Option>
            <Select.Option value="500+">500+</Select.Option>
          </Select>
        </>
      )}

      {step === 3 && (
        <>
          <Text h5>Preferences</Text>
          <Spacer h={1} />
          <Checkbox name="emailUpdates">Receive email updates</Checkbox>
          <Spacer h={0.5} />
          <Checkbox name="productNews">Receive product news</Checkbox>
          <Spacer h={0.5} />
          <Checkbox name="termsAccepted" required>
            I agree to the terms and conditions
          </Checkbox>
        </>
      )}

      <Spacer h={1.5} />
      <div style={{ display: 'flex', gap: '8px' }}>
        {step > 1 && (
          <Button type="secondary" onClick={handleBack} style={{ flex: 1 }}>
            Back
          </Button>
        )}
        <Button htmlType="submit" type="success" style={{ flex: 1 }}>
          {step < totalSteps ? 'Next' : 'Complete'}
        </Button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
