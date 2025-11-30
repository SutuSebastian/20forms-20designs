import { Button, Input, Checkbox, Select, DatePicker, Radio,  InputNumber, TimePicker, Switch, Form } from '@arco-design/web-react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Enter the code from your authenticator app or SMS.</p>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-two-factor-code">Verification code</label>
        <Input id="nocss-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\\d{6}"
          maxLength="6"
          required
         style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-two-factor-backup">Backup code (optional)</label>
        <Input id="nocss-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
         style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: '12px' }}>

        <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>

          Verify

        </Button>

        <Button htmlType="button" onClick={() =>
          alert('A new code has been sent!')}>
        Resend code
        </Button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
