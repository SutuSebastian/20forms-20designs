import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

function UserLoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="primereact-user-login-email" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Email or username
        </label>
        <InputText
          id="primereact-user-login-email"
          name="identifier"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label htmlFor="primereact-user-login-password" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Password
        </label>
        <Password
          id="primereact-user-login-password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          feedback={false}
          toggleMask
          required
        />
      </div>
      <div className="field-checkbox" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Checkbox
          inputId="primereact-user-login-remember"
          name="remember"
          checked={remember}
          onChange={(e) => setRemember(e.checked)}
        />
        <label htmlFor="primereact-user-login-remember">Keep me signed in</label>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button type="submit" label="Sign in" />
        <Button
          type="button"
          label="Forgot password?"
          severity="secondary"
          onClick={() => alert('Password reset link flow placeholder')}
        />
      </div>
    </form>
  )
}

export default UserLoginForm
