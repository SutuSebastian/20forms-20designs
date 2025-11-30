import { useState, useRef } from 'react'
import { InputText } from 'primereact/inputtext'
import { RadioButton } from 'primereact/radiobutton'
import { InputTextarea } from 'primereact/inputtextarea'
import { FileUpload } from 'primereact/fileupload'
import { Button } from 'primereact/button'

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('')
  const [description, setDescription] = useState('')
  const fileUploadRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-ticket-subject"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Subject
        </label>
        <InputText
          id="primereact-ticket-subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <fieldset
        style={{
          border: '1px solid #dee2e6',
          borderRadius: '4px',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <legend style={{ padding: '0 0.5rem' }}>Priority</legend>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RadioButton
              inputId="primereact-ticket-priority-low"
              name="priority"
              value="low"
              onChange={(e) => setPriority(e.value)}
              checked={priority === 'low'}
            />
            <label htmlFor="primereact-ticket-priority-low">Low</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RadioButton
              inputId="primereact-ticket-priority-medium"
              name="priority"
              value="medium"
              onChange={(e) => setPriority(e.value)}
              checked={priority === 'medium'}
            />
            <label htmlFor="primereact-ticket-priority-medium">Medium</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RadioButton
              inputId="primereact-ticket-priority-high"
              name="priority"
              value="high"
              onChange={(e) => setPriority(e.value)}
              checked={priority === 'high'}
            />
            <label htmlFor="primereact-ticket-priority-high">High</label>
          </div>
        </div>
      </fieldset>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-ticket-description"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Issue description
        </label>
        <InputTextarea
          id="primereact-ticket-description"
          name="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Attachments
        </label>
        <FileUpload
          ref={fileUploadRef}
          name="attachments"
          multiple
          auto={false}
          customUpload
          chooseLabel="Choose"
          mode="basic"
        />
      </div>
      <Button type="submit" label="Submit ticket" />
    </form>
  )
}

export default SupportTicketForm
