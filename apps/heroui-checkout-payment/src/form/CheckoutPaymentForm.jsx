import { Input, Button, Checkbox, Select, SelectItem } from '@heroui/react'

const PAYMENT_METHODS = [
  { value: 'credit', label: 'Credit Card' },
  { value: 'debit', label: 'Debit Card' },
  { value: 'paypal', label: 'PayPal' },
]

function CheckoutPaymentForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Payment submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Select
        label="Payment method"
        name="paymentMethod"
        isRequired
        variant="bordered"
        placeholder="Select a method"
      >
        {PAYMENT_METHODS.map((method) => (
          <SelectItem key={method.value}>{method.label}</SelectItem>
        ))}
      </Select>
      <Input
        label="Cardholder name"
        name="cardholderName"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Card number"
        name="cardNumber"
        type="text"
        placeholder="1234 5678 9012 3456"
        isRequired
        variant="bordered"
      />
      <div className="flex gap-4">
        <Input
          label="Expiration date"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          isRequired
          variant="bordered"
          className="flex-1"
        />
        <Input
          label="CVC"
          name="cvc"
          type="text"
          placeholder="123"
          isRequired
          variant="bordered"
          className="w-24"
        />
      </div>
      <Input
        label="Billing address"
        name="billingAddress"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Promo code"
        name="promoCode"
        type="text"
        variant="bordered"
      />
      <Checkbox name="saveCard">Save card for future purchases</Checkbox>
      <Button type="submit" color="primary">
        Pay now
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
