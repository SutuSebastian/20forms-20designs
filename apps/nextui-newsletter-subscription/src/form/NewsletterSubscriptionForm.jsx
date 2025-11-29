import { Input, Button, Select, SelectItem, Checkbox } from '@nextui-org/react'

const frequencies = [
  { key: 'daily', label: 'Daily' },
  { key: 'weekly', label: 'Weekly' },
  { key: 'monthly', label: 'Monthly' },
]

function NewsletterSubscriptionForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Subscribed to newsletter!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input
        label="First name (optional)"
        name="firstName"
        variant="bordered"
      />
      <Select
        label="Email frequency"
        name="frequency"
        defaultSelectedKeys={['weekly']}
        variant="bordered"
      >
        {frequencies.map((freq) => (
          <SelectItem key={freq.key}>{freq.label}</SelectItem>
        ))}
      </Select>
      <Checkbox name="promotions" defaultSelected>
        Receive promotional offers
      </Checkbox>
      <Button type="submit" color="primary">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
