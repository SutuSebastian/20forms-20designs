import { useState } from 'react'
import {
  Input,
  Button,
  Select,
  SelectItem,
  Checkbox,
  Progress,
} from '@heroui/react'

const INDUSTRIES = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'retail', label: 'Retail' },
  { value: 'other', label: 'Other' },
]

const TEAM_SIZES = [
  { value: '1', label: 'Just me' },
  { value: '2-10', label: '2-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-200', label: '51-200' },
  { value: '200+', label: '200+' },
]

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Progress
        aria-label="Onboarding progress"
        value={(step / totalSteps) * 100}
        className="mb-4"
      />
      <p className="text-sm text-default-500 mb-2">
        Step {step} of {totalSteps}
      </p>

      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <Input
            label="Full name"
            name="fullName"
            type="text"
            isRequired
            variant="bordered"
          />
          <Input
            label="Email address"
            name="email"
            type="email"
            isRequired
            variant="bordered"
          />
          <Input
            label="Job title"
            name="jobTitle"
            type="text"
            variant="bordered"
          />
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-xl font-semibold">Company Details</h2>
          <Input
            label="Company name"
            name="companyName"
            type="text"
            isRequired
            variant="bordered"
          />
          <Select
            label="Industry"
            name="industry"
            isRequired
            variant="bordered"
            placeholder="Select industry"
          >
            {INDUSTRIES.map((ind) => (
              <SelectItem key={ind.value}>{ind.label}</SelectItem>
            ))}
          </Select>
          <Select
            label="Team size"
            name="teamSize"
            isRequired
            variant="bordered"
            placeholder="Select team size"
          >
            {TEAM_SIZES.map((size) => (
              <SelectItem key={size.value}>{size.label}</SelectItem>
            ))}
          </Select>
          <Input
            label="Company website"
            name="website"
            type="url"
            placeholder="https://..."
            variant="bordered"
          />
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-xl font-semibold">Preferences</h2>
          <Checkbox name="newsletter">Subscribe to newsletter</Checkbox>
          <Checkbox name="updates">Receive product updates</Checkbox>
          <Checkbox name="tips">Receive tips and tutorials</Checkbox>
          <Checkbox name="terms" isRequired>
            I agree to the terms and conditions
          </Checkbox>
        </>
      )}

      <div className="flex gap-2 mt-4">
        {step > 1 && (
          <Button variant="bordered" onPress={handleBack}>
            Back
          </Button>
        )}
        {step < totalSteps ? (
          <Button color="primary" onPress={handleNext}>
            Next
          </Button>
        ) : (
          <Button type="submit" color="primary">
            Complete
          </Button>
        )}
      </div>
    </form>
  )
}

export default OnboardingWizardForm
