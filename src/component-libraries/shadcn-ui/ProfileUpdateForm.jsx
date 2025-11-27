const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#0f172a',
    lineHeight: '20px',
  },
  input: {
    height: '40px',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  button: {
    height: '40px',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#18181b',
    color: '#fafafa',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
}

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="profile-first-name" style={styles.label}>
          First name
        </label>
        <input
          id="profile-first-name"
          name="firstName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your first name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="profile-last-name" style={styles.label}>
          Last name
        </label>
        <input
          id="profile-last-name"
          name="lastName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter your last name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="profile-email" style={styles.label}>
          Email address
        </label>
        <input
          id="profile-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="profile-phone" style={styles.label}>
          Phone number
        </label>
        <input
          id="profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          style={styles.input}
          placeholder="Enter your phone number"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="profile-bio" style={styles.label}>
          Short bio
        </label>
        <textarea
          id="profile-bio"
          name="bio"
          rows="3"
          required
          style={styles.textarea}
          placeholder="Tell us about yourself"
        />
      </div>
      <button type="submit" style={styles.button}>
        Save changes
      </button>
    </form>
  )
}

export default ProfileUpdateForm
