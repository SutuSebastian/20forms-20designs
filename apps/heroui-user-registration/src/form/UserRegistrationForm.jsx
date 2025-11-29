import { Input, Button, Checkbox } from '@heroui/react'

function UserRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Full name"
        name="fullName"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input
        label="Username"
        name="username"
        type="text"
        minLength={3}
        isRequired
        variant="bordered"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        minLength={8}
        isRequired
        variant="bordered"
      />
      <Input
        label="Confirm password"
        name="confirmPassword"
        type="password"
        minLength={8}
        isRequired
        variant="bordered"
      />
      <Checkbox name="terms" isRequired>
        I agree to the terms and conditions
      </Checkbox>
      <Button type="submit" color="primary">
        Create account
      </Button>
    </form>
  )
}

export default UserRegistrationForm
