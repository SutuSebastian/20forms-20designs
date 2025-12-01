import { CdsInput, CdsTextarea, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Full name</label>
          <input
            id="clarity-job-fullname"
            name="fullName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email address</label>
          <input
            id="clarity-job-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Phone number</label>
          <input
            id="clarity-job-phone"
            name="phone"
            type="tel"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Position applying for</label>
          <input
            id="clarity-job-role"
            name="role"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Resume / CV link</label>
          <input
            id="clarity-job-resume"
            name="resume"
            type="url"
            placeholder="https://..."
            required
          />
        </CdsInput>

        <CdsTextarea>
          <label>Cover letter</label>
          <textarea
            id="clarity-job-cover-letter"
            name="coverLetter"
            rows="5"
          />
        </CdsTextarea>

        <CdsCheckbox>
          <label>Receive updates about my application</label>
          <input
            id="clarity-job-updates"
            name="updates"
            type="checkbox"
          />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Submit application
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default JobApplicationForm
