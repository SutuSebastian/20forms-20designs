import { Input, Button, Select, Spacer, Text } from '@geist-ui/core'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
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
      <Select name="shippingMethod" placeholder="Select shipping" width="100%">
        <Select.Option value="standard">Standard</Select.Option>
        <Select.Option value="express">Express</Select.Option>
        <Select.Option value="overnight">Overnight</Select.Option>
      </Select>
      <Spacer h={1} />
      <Input
        name="cardNumber"
        width="100%"
        placeholder="Card number"
        htmlType="text"
        inputMode="numeric"
        maxLength={19}
        required
      >
        Card number
      </Input>
      <Spacer h={1} />
      <Input
        name="expiration"
        width="100%"
        placeholder="MM/YY"
        htmlType="text"
        inputMode="numeric"
        required
      >
        Expiration
      </Input>
      <Spacer h={1} />
      <Input
        name="cvc"
        width="100%"
        placeholder="CVC"
        htmlType="text"
        inputMode="numeric"
        maxLength={4}
        required
      >
        CVC
      </Input>
      <Spacer h={1} />
      <Input name="promoCode" width="100%" placeholder="Promo code">
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
