import { useState } from 'react'
import {
  Input,
  Button,
  Select,
  SelectItem,
  Checkbox,
  CheckboxGroup,
  Progress,
} from '@nextui-org/react'

const roles = [
  { key: 'developer', label: 'Developer' },
  { key: 'designer', label: 'Designer' },
  { key: 'manager', label: 'Manager' },
  { key: 'other', label: 'Other' },
]

const interests = [
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile Development' },
  { key: 'data', label: 'Data Science' },
  { key: 'ai', label: 'AI/Machine Learning' },
  { key: 'design', label: 'UI/UX Design' },
]

const steps = ['Personal Info', 'Preferences', 'Complete']

function OnboardingWizardForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interests: [],
    newsletter: true,
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Onboarding complete!')
  }

  const progress = ((step + 1) / steps.length) * 100

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          {steps.map((s, i) => (
            <span
              key={s}
              className={i <= step ? 'text-primary' : 'text-default-400'}
            >
              {s}
            </span>
          ))}
        </div>
        <Progress value={progress} color="primary" size="sm" />
      </div>

      {step === 0 && (
        <>
          <Input
            label="Full name"
            value={formData.name}
            onValueChange={(v) => handleChange('name', v)}
            isRequired
            variant="bordered"
          />
          <Input
            label="Email address"
            type="email"
            value={formData.email}
            onValueChange={(v) => handleChange('email', v)}
            isRequired
            variant="bordered"
          />
          <Input
            label="Company (optional)"
            value={formData.company}
            onValueChange={(v) => handleChange('company', v)}
            variant="bordered"
          />
          <Select
            label="Your role"
            selectedKeys={formData.role ? [formData.role] : []}
            onSelectionChange={(keys) =>
              handleChange('role', Array.from(keys)[0])
            }
            isRequired
            variant="bordered"
          >
            {roles.map((r) => (
              <SelectItem key={r.key}>{r.label}</SelectItem>
            ))}
          </Select>
        </>
      )}

      {step === 1 && (
        <>
          <CheckboxGroup
            label="Select your interests"
            value={formData.interests}
            onValueChange={(v) => handleChange('interests', v)}
          >
            {interests.map((i) => (
              <Checkbox key={i.key} value={i.key}>
                {i.label}
              </Checkbox>
            ))}
          </CheckboxGroup>
          <Checkbox
            isSelected={formData.newsletter}
            onValueChange={(v) => handleChange('newsletter', v)}
          >
            Subscribe to our newsletter
          </Checkbox>
        </>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Welcome, {formData.name}!</h3>
          <p className="text-default-600">
            Your account is ready. Click finish to start exploring.
          </p>
          <div className="mt-4 p-4 bg-default-100 rounded-lg">
            <p className="text-sm">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="text-sm">
              <strong>Role:</strong> {formData.role}
            </p>
            <p className="text-sm">
              <strong>Interests:</strong>{' '}
              {formData.interests.join(', ') || 'None selected'}
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-2 justify-between mt-4">
        <Button
          type="button"
          variant="bordered"
          onPress={handleBack}
          isDisabled={step === 0}
        >
          Back
        </Button>
        {step < steps.length - 1 ? (
          <Button type="button" color="primary" onPress={handleNext}>
            Next
          </Button>
        ) : (
          <Button type="submit" color="primary">
            Finish
          </Button>
        )}
      </div>
    </form>
  )
}

export default OnboardingWizardForm
