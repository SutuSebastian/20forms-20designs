import { Input, Button, Checkbox } from '@heroui/react'

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
    </form>
  )
}

export default UserLoginForm
