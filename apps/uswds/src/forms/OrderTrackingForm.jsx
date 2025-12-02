import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Button,
} from '@trussworks/react-uswds'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-order-tracking-number">Order number</Label>
        <TextInput
          id="uswds-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-order-tracking-email">Email address</Label>
        <TextInput
          id="uswds-order-tracking-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-order-tracking-postal">Postal code</Label>
        <TextInput
          id="uswds-order-tracking-postal"
          name="postalCode"
          type="text"
          required
        />
      </FormGroup>
      <Button type="submit">Find order</Button>
    </Form>
  )
}

export default OrderTrackingForm
