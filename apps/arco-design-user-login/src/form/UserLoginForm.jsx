import {
  Button,
  Input,
  Checkbox,
  Select,
  DatePicker,
  Radio,
  
  InputNumber,
  TimePicker,
  Switch,
  Form,
} from '@arco-design/web-react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '12px' }}>
        <label
          style={{ display: 'block', marginBottom: '4px' }}
          htmlFor="nocss-user-login-email"
        >
          Email or username
        </label>
        <Input
          id="nocss-user-login-email"
          name="identifier"
          type="text"
          required
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label
          style={{ display: 'block', marginBottom: '4px' }}
          htmlFor="nocss-user-login-password"
        >
          Password
        </label>
        <Input.Password
          id="nocss-user-login-password"
          name="password"
          type="password"
          required
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <Checkbox name="remember">Keep me signed in</Checkbox>
      </div>
      <div style={{ marginTop: '12px' }}>
        <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>
          Sign in
        </Button>
        <Button
          htmlType="button"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </div>
    </form>
  )
}

export default UserLoginForm
