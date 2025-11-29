import { useState } from 'react'
import {
  Input,
  Button,
  RadioGroup,
  Radio,
  Checkbox,
  Select,
  SelectItem,
} from '@nextui-org/react'

const months = Array.from({ length: 12 }, (_, i) => ({
  key: String(i + 1).padStart(2, '0'),
  label: String(i + 1).padStart(2, '0'),
}))

const years = Array.from({ length: 10 }, (_, i) => ({
  key: String(new Date().getFullYear() + i),
  label: String(new Date().getFullYear() + i),
}))

function CheckoutPaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('card')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Payment submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <RadioGroup
        label="Payment method"
        value={paymentMethod}
        onValueChange={setPaymentMethod}
      >
        <Radio value="card">Credit/Debit Card</Radio>
        <Radio value="paypal">PayPal</Radio>
        <Radio value="bank">Bank Transfer</Radio>
      </RadioGroup>

      {paymentMethod === 'card' && (
        <>
          <Input
            label="Card number"
            name="cardNumber"
            isRequired
            variant="bordered"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
          />
          <Input
            label="Cardholder name"
            name="cardName"
            isRequired
            variant="bordered"
          />
          <div className="flex gap-4">
            <Select
              label="Month"
              name="expMonth"
              isRequired
              variant="bordered"
              className="flex-1"
            >
              {months.map((m) => (
                <SelectItem key={m.key}>{m.label}</SelectItem>
              ))}
            </Select>
            <Select
              label="Year"
              name="expYear"
              isRequired
              variant="bordered"
              className="flex-1"
            >
              {years.map((y) => (
                <SelectItem key={y.key}>{y.label}</SelectItem>
              ))}
            </Select>
            <Input
              label="CVV"
              name="cvv"
              isRequired
              variant="bordered"
              maxLength={4}
              className="w-24"
            />
          </div>
          <Checkbox name="saveCard">Save card for future purchases</Checkbox>
        </>
      )}

      {paymentMethod === 'paypal' && (
        <p className="text-default-600">
          You will be redirected to PayPal to complete your purchase.
        </p>
      )}

      {paymentMethod === 'bank' && (
        <p className="text-default-600">
          Bank transfer details will be provided after order confirmation.
        </p>
      )}

      <Button type="submit" color="primary">
        Complete purchase
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
