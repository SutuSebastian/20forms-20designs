import { Input, Button, Spacer } from '@geist-ui/core'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-order-tracking-number"
        name="orderNumber"
        width="100%"
        placeholder="Order number"
        pattern="[A-Za-z0-9-]{6,20}"
        required
      >
        Order number
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-order-tracking-email"
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-order-tracking-postal"
        name="postalCode"
        width="100%"
        placeholder="Postal code"
        required
      >
        Postal code
      </Input>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Find order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
