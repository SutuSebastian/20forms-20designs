import * as Ariakit from '@ariakit/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-profile-first-name" className="label">
          First name
        </label>
        <input
          id="ariakit-profile-first-name"
          name="firstName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-profile-last-name" className="label">
          Last name
        </label>
        <input
          id="ariakit-profile-last-name"
          name="lastName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-profile-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-profile-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-profile-phone" className="label">
          Phone number
        </label>
        <input
          id="ariakit-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-profile-bio" className="label">
          Short bio
        </label>
        <textarea
          id="ariakit-profile-bio"
          name="bio"
          rows="3"
          className="textarea"
          required
        />
      </div>
      <Ariakit.Button type="submit" className="button button-primary">
        Save changes
      </Ariakit.Button>
    </form>
  )
}

export default ProfileUpdateForm
