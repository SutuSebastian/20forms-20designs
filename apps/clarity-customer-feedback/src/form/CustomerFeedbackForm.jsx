import { CdsInput, CdsSelect, CdsTextarea, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Name</label>
          <input
            id="clarity-feedback-name"
            name="name"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email</label>
          <input
            id="clarity-feedback-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsSelect>
          <label>Rating</label>
          <select id="clarity-feedback-rating" name="rating" required>
            <option value="">Select rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Very Poor</option>
          </select>
        </CdsSelect>

        <CdsTextarea>
          <label>Comments</label>
          <textarea
            id="clarity-feedback-comments"
            name="comments"
            rows={4}
          />
        </CdsTextarea>

        <CdsCheckbox>
          <label>I would like a follow-up</label>
          <input
            type="checkbox"
            id="clarity-feedback-followup"
            name="followUp"
          />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Submit feedback
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default CustomerFeedbackForm
