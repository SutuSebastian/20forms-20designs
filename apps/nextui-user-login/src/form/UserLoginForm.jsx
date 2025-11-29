import { Input, Button, Checkbox } from '@nextui-org/react'

function UserLoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Email or username"
        name="identifier"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        isRequired
        variant="bordered"
      />
      <Checkbox name="remember">Keep me signed in</Checkbox>
      <div className="flex gap-2">
        <Button type="submit" color="primary">
          Sign in
        </Button>
        <Button
          type="button"
          variant="light"
          onPress={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </div>
    </form>
  )
}

export default UserLoginForm
