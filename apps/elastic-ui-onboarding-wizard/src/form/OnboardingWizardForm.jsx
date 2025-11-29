import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiRadioGroup,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiSteps,
} from '@elastic/eui'

const roleOptions = [
  { value: '', text: 'Select your role' },
  { value: 'developer', text: 'Developer' },
  { value: 'designer', text: 'Designer' },
  { value: 'manager', text: 'Manager' },
  { value: 'other', text: 'Other' },
]

const experienceOptions = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
]

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [experience, setExperience] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [receiveUpdates, setReceiveUpdates] = useState(true)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleNext = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, 3))
  }, [])

  const handleBack = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1))
  }, [])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }, [])

  const renderStep1 = () => (
    <>
      <EuiFormRow label="Full name">
        <EuiFieldText
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </EuiFormRow>
      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>
    </>
  )

  const renderStep2 = () => (
    <>
      <EuiFormRow label="Your role">
        <EuiSelect
          options={roleOptions}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </EuiFormRow>
      <EuiFormRow label="Experience level">
        <EuiRadioGroup
          options={experienceOptions}
          idSelected={experience}
          onChange={(id) => setExperience(id)}
        />
      </EuiFormRow>
      <EuiFormRow label="Company name (optional)">
        <EuiFieldText
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </EuiFormRow>
      <EuiFormRow label="Team size (optional)">
        <EuiFieldText
          type="number"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          placeholder="e.g., 10"
        />
      </EuiFormRow>
    </>
  )

  const renderStep3 = () => (
    <>
      <EuiFormRow>
        <EuiText size="s">
          <p>Review your information and complete the setup.</p>
        </EuiText>
      </EuiFormRow>
      <EuiFormRow>
        <EuiCheckbox
          id="receiveUpdates"
          label="Receive product updates and news"
          checked={receiveUpdates}
          onChange={(e) => setReceiveUpdates(e.target.checked)}
        />
      </EuiFormRow>
      <EuiFormRow>
        <EuiCheckbox
          id="agreeTerms"
          label="I agree to the Terms of Service"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          required
        />
      </EuiFormRow>
    </>
  )

  const steps = [
    {
      title: 'Personal Info',
      status: step > 1 ? 'complete' : step === 1 ? 'current' : 'incomplete',
    },
    {
      title: 'Role & Experience',
      status: step > 2 ? 'complete' : step === 2 ? 'current' : 'incomplete',
    },
    { title: 'Complete', status: step === 3 ? 'current' : 'incomplete' },
  ]

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiSteps steps={steps} headingElement="h3" />
      <EuiSpacer size="l" />

      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}

      <EuiSpacer size="m" />

      <EuiFormRow>
        <EuiFlexGroup gutterSize="s">
          {step > 1 && (
            <EuiFlexItem grow={false}>
              <EuiButton onClick={handleBack}>Back</EuiButton>
            </EuiFlexItem>
          )}
          {step < 3 && (
            <EuiFlexItem grow={false}>
              <EuiButton fill onClick={handleNext}>
                Next
              </EuiButton>
            </EuiFlexItem>
          )}
          {step === 3 && (
            <EuiFlexItem grow={false}>
              <EuiButton type="submit" fill>
                Complete setup
              </EuiButton>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      </EuiFormRow>
    </EuiForm>
  )
}

export default OnboardingWizardForm
