import { useState } from 'react'
import * as Ariakit from '@ariakit/react'

function SupportTicketForm() {
  const [priority, setPriority] = useState('')
  const radio = Ariakit.useRadioStore({
    value: priority,
    setValue: setPriority,
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-ticket-subject" className="label">
          Subject
        </label>
        <input
          id="ariakit-ticket-subject"
          name="subject"
          type="text"
          className="input"
          required
        />
      </div>
      <fieldset className="fieldset">
        <legend className="legend">Priority</legend>
        <Ariakit.RadioGroup store={radio} className="radio-group">
          <label className="radio-wrapper">
            <Ariakit.Radio value="low" className="radio" required>
              <div className="radio-dot" />
            </Ariakit.Radio>
            <span className="radio-label">Low</span>
          </label>
          <label className="radio-wrapper">
            <Ariakit.Radio value="medium" className="radio">
              <div className="radio-dot" />
            </Ariakit.Radio>
            <span className="radio-label">Medium</span>
          </label>
          <label className="radio-wrapper">
            <Ariakit.Radio value="high" className="radio">
              <div className="radio-dot" />
            </Ariakit.Radio>
            <span className="radio-label">High</span>
          </label>
        </Ariakit.RadioGroup>
        <input type="hidden" name="priority" value={priority} />
      </fieldset>
      <div className="form-field">
        <label htmlFor="ariakit-ticket-description" className="label">
          Issue description
        </label>
        <textarea
          id="ariakit-ticket-description"
          name="description"
          rows="4"
          className="textarea"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-ticket-attachments" className="label">
          Attachments
        </label>
        <input
          id="ariakit-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="file-input"
        />
      </div>
      <Ariakit.Button type="submit" className="button button-primary">
        Submit ticket
      </Ariakit.Button>
    </form>
  )
}

export default SupportTicketForm
