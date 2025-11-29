import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiTextArea,
  EuiButton,
} from '@elastic/eui'

const categoryOptions = [
  { value: '', text: 'Select category' },
  { value: 'technical', text: 'Technical Issue' },
  { value: 'billing', text: 'Billing Question' },
  { value: 'account', text: 'Account Problem' },
  { value: 'feature', text: 'Feature Request' },
  { value: 'other', text: 'Other' },
]

const priorityOptions = [
  { value: 'low', text: 'Low' },
  { value: 'medium', text: 'Medium' },
  { value: 'high', text: 'High' },
  { value: 'urgent', text: 'Urgent' },
]

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('medium')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Support ticket submitted successfully!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Subject">
        <EuiFieldText
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Category">
        <EuiSelect
          options={categoryOptions}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Priority">
        <EuiSelect
          options={priorityOptions}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow label="Description">
        <EuiTextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Submit ticket
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default SupportTicketForm
