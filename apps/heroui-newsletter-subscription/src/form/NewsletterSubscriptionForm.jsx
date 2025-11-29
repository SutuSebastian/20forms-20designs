import { Input, Button, Checkbox, Select, SelectItem } from '@heroui/react'

function NewsletterSubscriptionForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  const frequencies = [
    { key: 'weekly', label: 'Weekly' },
    { key: 'monthly', label: 'Monthly' },
    { key: 'quarterly', label: 'Quarterly' },
  ]

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Select
        label="Frequency"
        name="frequency"
        isRequired
        variant="bordered"
        placeholder="Select frequency"
      >
        {frequencies.map((freq) => (
          <SelectItem key={freq.key}>{freq.label}</SelectItem>
        ))}
      </Select>
      <Checkbox name="agree">Receive product updates</Checkbox>
      <Button type="submit" color="primary">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
