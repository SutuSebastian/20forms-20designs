import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Button,
} from '@trussworks/react-uswds'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-checkout-email">Email for receipt</Label>
        <TextInput
          id="uswds-checkout-email"
          name="email"
          type="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-checkout-shipping-method">Shipping method</Label>
        <Select
          id="uswds-checkout-shipping-method"
          name="shippingMethod"
          required
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-checkout-card-number">Card number</Label>
        <TextInput
          id="uswds-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-checkout-expiration">Expiration</Label>
        <TextInput
          id="uswds-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-checkout-cvc">CVC</Label>
        <TextInput
          id="uswds-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-checkout-promo">Promo code</Label>
        <TextInput
          id="uswds-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </FormGroup>
      <Button type="submit">Place order</Button>
    </Form>
  )
}

export default CheckoutPaymentForm
