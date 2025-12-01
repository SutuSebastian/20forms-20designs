import { CdsInput, CdsRadioGroup, CdsRadio, CdsTextarea, CdsFile, CdsButton, CdsFormGroup } from '@cds/react/forms'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Subject</label>
          <input
            id="clarity-ticket-subject"
            name="subject"
            type="text"
            required
          />
        </CdsInput>

        <CdsRadioGroup>
          <label>Priority</label>
          <CdsRadio>
            <label>Low</label>
            <input type="radio" name="priority" value="low" defaultChecked />
          </CdsRadio>
          <CdsRadio>
            <label>Medium</label>
            <input type="radio" name="priority" value="medium" />
          </CdsRadio>
          <CdsRadio>
            <label>High</label>
            <input type="radio" name="priority" value="high" />
          </CdsRadio>
        </CdsRadioGroup>

        <CdsTextarea>
          <label>Description</label>
          <textarea
            id="clarity-ticket-description"
            name="description"
            rows={5}
            required
          />
        </CdsTextarea>

        <CdsFile>
          <label>Attachments</label>
          <input
            type="file"
            id="clarity-ticket-attachments"
            name="attachments"
            multiple
          />
        </CdsFile>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Submit ticket
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default SupportTicketForm
