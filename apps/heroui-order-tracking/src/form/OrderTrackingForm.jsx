import { Input, Button, Checkbox } from '@heroui/react'

function OrderTrackingForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Tracking your order...')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Order number"
        name="orderNumber"
        type="text"
        placeholder="e.g. ORD-123456"
        isRequired
        variant="bordered"
      />
      <Input
        label="Email address"
        name="email"
        type="email"
        placeholder="you@example.com"
        isRequired
        variant="bordered"
      />
      <Input
        label="Postal code"
        name="postalCode"
        type="text"
        description="Used for verification"
        variant="bordered"
      />
      <Checkbox name="notifications">
        Send me shipping updates via email
      </Checkbox>
      <Button type="submit" color="primary">
        Track order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
