import { InputField, Button, Stack } from '@kiwicom/orbit-components'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField
          label="Order number"
          name="orderNumber"
          type="text"
          required
        />
        <InputField label="Email address" name="email" type="email" required />
        <InputField
          label="Postal code"
          name="postalCode"
          type="text"
          required
        />
        <Button type="primary" submit>
          Find order
        </Button>
      </Stack>
    </form>
  )
}

export default OrderTrackingForm
