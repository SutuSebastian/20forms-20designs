import { useState } from 'react'
import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
  StepIndicator,
  StepIndicatorStep,
} from '@trussworks/react-uswds'

function OnboardingWizardForm({ theme }) {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    department: '',
    interests: [],
    notifications: true,
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 2) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  const roles = [
    'Developer',
    'Designer',
    'Manager',
    'Analyst',
    'Executive',
    'Other',
  ]
  const departments = [
    'Engineering',
    'Product',
    'Marketing',
    'Sales',
    'Human Resources',
    'Finance',
  ]

  const steps = ['Personal Info', 'Work Details', 'Preferences']

  const getStepStatus = (index) => {
    if (index < step) return 'complete'
    if (index === step) return 'current'
    return 'incomplete'
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StepIndicator headingLevel="h2" style={{ marginBottom: '24px' }}>
        {steps.map((label, index) => (
          <StepIndicatorStep
            key={label}
            label={label}
            status={getStepStatus(index)}
          />
        ))}
      </StepIndicator>

      {step === 0 && (
        <>
          <FormGroup>
            <Label
              htmlFor="uswds-onboard-name"
              style={theme === 'dark' ? darkStyles.label : undefined}
            >
              Full name
            </Label>
            <TextInput
              id="uswds-onboard-name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              required
              style={theme === 'dark' ? darkStyles.input : undefined}
            />
          </FormGroup>
          <FormGroup>
            <Label
              htmlFor="uswds-onboard-email"
              style={theme === 'dark' ? darkStyles.label : undefined}
            >
              Email address
            </Label>
            <TextInput
              id="uswds-onboard-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              style={theme === 'dark' ? darkStyles.input : undefined}
            />
          </FormGroup>
        </>
      )}

      {step === 1 && (
        <>
          <FormGroup>
            <Label
              htmlFor="uswds-onboard-role"
              style={theme === 'dark' ? darkStyles.label : undefined}
            >
              Role
            </Label>
            <Select
              id="uswds-onboard-role"
              name="role"
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
              required
              style={theme === 'dark' ? darkStyles.input : undefined}
            >
              <option value="">Select role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Label
              htmlFor="uswds-onboard-department"
              style={theme === 'dark' ? darkStyles.label : undefined}
            >
              Department
            </Label>
            <Select
              id="uswds-onboard-department"
              name="department"
              value={formData.department}
              onChange={(e) => handleChange('department', e.target.value)}
              required
              style={theme === 'dark' ? darkStyles.input : undefined}
            >
              <option value="">Select department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </Select>
          </FormGroup>
        </>
      )}

      {step === 2 && (
        <>
          <FormGroup>
            <Checkbox
              id="uswds-onboard-newsletter"
              name="newsletter"
              label="Subscribe to company newsletter"
              defaultChecked
            />
          </FormGroup>
          <FormGroup>
            <Checkbox
              id="uswds-onboard-updates"
              name="updates"
              label="Receive product updates"
              defaultChecked
            />
          </FormGroup>
          <FormGroup>
            <Checkbox
              id="uswds-onboard-tips"
              name="tips"
              label="Get tips and tutorials"
            />
          </FormGroup>
        </>
      )}

      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        {step > 0 && (
          <Button type="button" onClick={handleBack} outline>
            Back
          </Button>
        )}
        {step < 2 ? (
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button type="submit">Complete setup</Button>
        )}
      </div>
    </Form>
  )
}

export default OnboardingWizardForm
