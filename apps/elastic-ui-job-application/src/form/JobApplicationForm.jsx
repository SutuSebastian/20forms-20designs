import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiTextArea,
  EuiRadioGroup,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

const positionOptions = [
  { value: '', text: 'Select position' },
  { value: 'frontend', text: 'Frontend Developer' },
  { value: 'backend', text: 'Backend Developer' },
  { value: 'fullstack', text: 'Full Stack Developer' },
  { value: 'devops', text: 'DevOps Engineer' },
  { value: 'designer', text: 'UI/UX Designer' },
]

const experienceOptions = [
  { id: 'entry', label: 'Entry Level (0-2 years)' },
  { id: 'mid', label: 'Mid Level (3-5 years)' },
  { id: 'senior', label: 'Senior Level (6+ years)' },
]

const startDateOptions = [
  { value: 'immediately', text: 'Immediately' },
  { value: '2weeks', text: 'Within 2 weeks' },
  { value: '1month', text: 'Within 1 month' },
  { value: 'other', text: 'Other' },
]

function JobApplicationForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [experience, setExperience] = useState('')
  const [startDate, setStartDate] = useState('immediately')
  const [coverLetter, setCoverLetter] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Application submitted successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="First name">
            <EuiFieldText
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Last name">
            <EuiFieldText
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Phone number">
        <EuiFieldText
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Position applying for">
        <EuiSelect
          options={positionOptions}
          value={position}
          onChange={(e) => setPosition(e.target.value)}
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

      <EuiFormRow label="Earliest start date">
        <EuiSelect
          options={startDateOptions}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow label="Cover letter">
        <EuiTextArea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          rows={5}
          placeholder="Tell us why you're a great fit for this role..."
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="agreeTerms"
          label="I certify that the information provided is accurate"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Submit application
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default JobApplicationForm
