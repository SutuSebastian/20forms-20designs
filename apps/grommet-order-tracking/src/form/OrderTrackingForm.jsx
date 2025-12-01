import { Box, Button, Form, FormField, TextInput } from 'grommet'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Order number"
        name="orderNumber"
        htmlFor="grommet-order-tracking-number"
        required
      >
        <TextInput
          id="grommet-order-tracking-number"
          name="orderNumber"
          type="text"
        />
      </FormField>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-order-tracking-email"
        required
      >
        <TextInput
          id="grommet-order-tracking-email"
          name="email"
          type="email"
        />
      </FormField>
      <FormField
        label="Postal code"
        name="postalCode"
        htmlFor="grommet-order-tracking-postal"
        required
      >
        <TextInput
          id="grommet-order-tracking-postal"
          name="postalCode"
          type="text"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Find order" />
      </Box>
    </Form>
  )
}

export default OrderTrackingForm
