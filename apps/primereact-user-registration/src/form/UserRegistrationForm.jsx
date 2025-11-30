import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

function UserRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="primereact-user-registration-name" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Full name
        </label>
        <InputText
          id="primereact-user-registration-name"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="primereact-user-registration-email" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Email address
        </label>
        <InputText
          id="primereact-user-registration-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="primereact-user-registration-username" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Username
        </label>
        <InputText
          id="primereact-user-registration-username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength={3}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="primereact-user-registration-password" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Password
        </label>
        <Password
          id="primereact-user-registration-password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          toggleMask
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="primereact-user-registration-confirm" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Confirm password
        </label>
        <Password
          id="primereact-user-registration-confirm"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          feedback={false}
          toggleMask
          required
        />
      </div>
      <div className="field-checkbox" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Checkbox
          inputId="primereact-user-registration-terms"
          name="terms"
          checked={terms}
          onChange={(e) => setTerms(e.checked)}
          required
        />
        <label htmlFor="primereact-user-registration-terms">I agree to the terms and conditions</label>
      </div>
      <Button type="submit" label="Create account" />
    </form>
  )
}

export default UserRegistrationForm
