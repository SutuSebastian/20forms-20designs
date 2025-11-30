import { Input, Button, Select, Spacer, Text } from '@geist-ui/core'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-checkout-email"
        name="email"
        type="email"
        width="100%"
        placeholder="Email for receipt"
        required
      >
        Email for receipt
      </Input>
      <Spacer h={1} />
      <Text small>Shipping method</Text>
      <Spacer h={0.5} />
      <Select
        id="nocss-checkout-shipping-method"
        name="shippingMethod"
        placeholder="Select shipping"
        width="100%"
      >
        <Select.Option value="standard">Standard</Select.Option>
        <Select.Option value="express">Express</Select.Option>
        <Select.Option value="overnight">Overnight</Select.Option>
      </Select>
      <Spacer h={1} />
      <Input
        id="nocss-checkout-card-number"
        name="cardNumber"
        width="100%"
        placeholder="Card number"
        htmlType="text"
        inputMode="numeric"
        pattern="[0-9]{13,19}"
        maxLength={19}
        required
      >
        Card number
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-checkout-expiration"
        name="expiration"
        width="100%"
        placeholder="MM/YY"
        htmlType="text"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
        required
      >
        Expiration
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-checkout-cvc"
        name="cvc"
        width="100%"
        placeholder="CVC"
        htmlType="text"
        inputMode="numeric"
        pattern="[0-9]{3,4}"
        maxLength={4}
        required
      >
        CVC
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-checkout-promo"
        name="promoCode"
        width="100%"
        placeholder="Promo code"
        pattern="[A-Za-z0-9]{3,15}"
      >
        Promo code
      </Input>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
