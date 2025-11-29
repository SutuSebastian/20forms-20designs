import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Button,
} from '@trussworks/react-uswds'

function OrderTrackingForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Tracking your order!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-order-number"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Order number
        </Label>
        <TextInput
          id="uswds-order-number"
          name="orderNumber"
          type="text"
          placeholder="e.g., ORD-123456789"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-order-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-order-email"
          name="email"
          type="email"
          placeholder="The email used for your order"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Track order</Button>
    </Form>
  )
}

export default OrderTrackingForm
