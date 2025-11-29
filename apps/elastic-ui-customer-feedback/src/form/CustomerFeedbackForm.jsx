import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiRadioGroup,
  EuiTextArea,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

const ratingOptions = [
  { id: '1', label: '1 - Poor' },
  { id: '2', label: '2 - Fair' },
  { id: '3', label: '3 - Good' },
  { id: '4', label: '4 - Very Good' },
  { id: '5', label: '5 - Excellent' },
]

function CustomerFeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [feedback, setFeedback] = useState('')
  const [recommend, setRecommend] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Thank you for your feedback!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Name (optional)">
        <EuiFieldText value={name} onChange={(e) => setName(e.target.value)} />
      </EuiFormRow>

      <EuiFormRow label="Email (optional)">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow label="Overall rating">
        <EuiRadioGroup
          options={ratingOptions}
          idSelected={rating}
          onChange={(id) => setRating(id)}
        />
      </EuiFormRow>

      <EuiFormRow label="Your feedback">
        <EuiTextArea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={5}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="recommend"
          label="Would you recommend us to others?"
          checked={recommend}
          onChange={(e) => setRecommend(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Submit feedback
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default CustomerFeedbackForm
