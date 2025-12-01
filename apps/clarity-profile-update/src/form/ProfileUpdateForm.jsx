import { CdsInput, CdsTextarea, CdsButton, CdsFormGroup } from '@cds/react/forms'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>First name</label>
          <input
            id="clarity-profile-first-name"
            name="firstName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Last name</label>
          <input
            id="clarity-profile-last-name"
            name="lastName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Email address</label>
          <input
            id="clarity-profile-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Phone number</label>
          <input
            id="clarity-profile-phone"
            name="phone"
            type="tel"
            pattern="[+0-9\s-]{7,20}"
            inputMode="tel"
            required
          />
        </CdsInput>

        <CdsTextarea>
          <label>Short bio</label>
          <textarea
            id="clarity-profile-bio"
            name="bio"
            rows="3"
            required
          />
        </CdsTextarea>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Save changes
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default ProfileUpdateForm
