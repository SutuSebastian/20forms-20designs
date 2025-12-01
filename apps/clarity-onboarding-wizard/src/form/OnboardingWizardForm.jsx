import { useState } from 'react'
import { CdsInput, CdsPassword, CdsSelect, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)

  const handleNext = (event) => {
    event.preventDefault()
    setStep((s) => Math.min(s + 1, 3))
  }

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={step === 3 ? handleSubmit : handleNext}>
      <CdsFormGroup layout="vertical">
        {step === 1 && (
          <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>
              Step 1: Account
            </legend>
            <CdsInput>
              <label>Email</label>
              <input
                id="clarity-onboard-email"
                name="email"
                type="email"
                required
              />
            </CdsInput>
            <CdsPassword>
              <label>Password</label>
              <input
                id="clarity-onboard-password"
                name="password"
                type="password"
                minLength={8}
                required
              />
            </CdsPassword>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>
              Step 2: Team Setup
            </legend>
            <CdsInput>
              <label>Team name</label>
              <input
                id="clarity-onboard-team"
                name="teamName"
                type="text"
                required
              />
            </CdsInput>
            <CdsSelect>
              <label>Team size</label>
              <select id="clarity-onboard-size" name="teamSize" required>
                <option value="">Select size</option>
                <option value="1-5">1-5</option>
                <option value="6-20">6-20</option>
                <option value="21-50">21-50</option>
                <option value="51+">51+</option>
              </select>
            </CdsSelect>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>
              Step 3: Preferences
            </legend>
            <CdsSelect>
              <label>Primary goal</label>
              <select id="clarity-onboard-goal" name="goal" required>
                <option value="">Select goal</option>
                <option value="collaboration">Collaboration</option>
                <option value="project-management">Project Management</option>
                <option value="documentation">Documentation</option>
                <option value="other">Other</option>
              </select>
            </CdsSelect>
            <CdsCheckbox>
              <label>Send me product updates</label>
              <input
                type="checkbox"
                id="clarity-onboard-updates"
                name="updates"
              />
            </CdsCheckbox>
          </fieldset>
        )}

        <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
          {step > 1 && (
            <CdsButton type="button" action="outline" onClick={handleBack}>
              Back
            </CdsButton>
          )}
          <CdsButton type="submit" action="solid">
            {step === 3 ? 'Complete' : 'Next'}
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default OnboardingWizardForm
