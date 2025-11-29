import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiTextArea,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

const serviceOptions = [
  { value: '', text: 'Select service' },
  { value: 'consultation', text: 'Consultation' },
  { value: 'checkup', text: 'General Checkup' },
  { value: 'followup', text: 'Follow-up Visit' },
  { value: 'specialist', text: 'Specialist Appointment' },
]

const timeSlotOptions = [
  { value: '', text: 'Select time' },
  { value: '09:00', text: '9:00 AM' },
  { value: '10:00', text: '10:00 AM' },
  { value: '11:00', text: '11:00 AM' },
  { value: '13:00', text: '1:00 PM' },
  { value: '14:00', text: '2:00 PM' },
  { value: '15:00', text: '3:00 PM' },
  { value: '16:00', text: '4:00 PM' },
]

function AppointmentRequestForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Appointment request submitted successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
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

      <EuiFormRow label="Phone number">
        <EuiFieldText
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Service type">
        <EuiSelect
          options={serviceOptions}
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="Preferred date">
            <EuiFieldText
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Preferred time">
            <EuiSelect
              options={timeSlotOptions}
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFormRow label="Additional notes (optional)">
        <EuiTextArea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Request appointment
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default AppointmentRequestForm
