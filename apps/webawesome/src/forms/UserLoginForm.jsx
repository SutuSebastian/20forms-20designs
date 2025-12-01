import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/button/button.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input
        label="Email or username"
        name="identifier"
        type="text"
        required
      />
      <wa-input
        label="Password"
        name="password"
        type="password"
        password-toggle
        required
      />
      <wa-checkbox name="remember">Keep me signed in</wa-checkbox>
      <div className="wa-cluster wa-gap-s">
        <wa-button type="submit" variant="brand">
          Sign in
        </wa-button>
        <wa-button
          type="button"
          variant="neutral"
          appearance="outlined"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </wa-button>
      </div>
    </form>
  )
}

export default UserLoginForm
