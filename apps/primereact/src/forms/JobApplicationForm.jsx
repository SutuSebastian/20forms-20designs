import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

function JobApplicationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [resume, setResume] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-job-full-name"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Full name
        </label>
        <InputText
          id="primereact-job-full-name"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-job-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-job-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-job-phone"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Phone number
        </label>
        <InputText
          id="primereact-job-phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-job-role"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Role applied for
        </label>
        <InputText
          id="primereact-job-role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-job-resume"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Resume link
        </label>
        <InputText
          id="primereact-job-resume"
          name="resume"
          type="url"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-job-cover-letter"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Cover letter
        </label>
        <InputTextarea
          id="primereact-job-cover-letter"
          name="coverLetter"
          rows={4}
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          required
        />
      </div>
      <div
        className="field-checkbox"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Checkbox
          inputId="primereact-job-updates"
          name="updates"
          checked={updates}
          onChange={(e) => setUpdates(e.checked)}
        />
        <label htmlFor="primereact-job-updates">
          Keep me informed about future roles
        </label>
      </div>
      <Button type="submit" label="Submit application" />
    </form>
  )
}

export default JobApplicationForm
