import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const shippingOptions = [
    { label: 'Select shipping', value: '' },
    { label: 'Standard', value: 'standard' },
    { label: 'Express', value: 'express' },
    { label: 'Overnight', value: 'overnight' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-checkout-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email for receipt
        </label>
        <InputText
          id="primereact-checkout-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-checkout-shipping-method"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Shipping method
        </label>
        <Dropdown
          id="primereact-checkout-shipping-method"
          name="shippingMethod"
          value={shippingMethod}
          options={shippingOptions}
          onChange={(e) => setShippingMethod(e.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-checkout-card-number"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Card number
        </label>
        <InputText
          id="primereact-checkout-card-number"
          name="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          keyfilter="int"
          maxLength={19}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-checkout-expiration"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Expiration
        </label>
        <InputText
          id="primereact-checkout-expiration"
          name="expiration"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-checkout-cvc"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          CVC
        </label>
        <InputText
          id="primereact-checkout-cvc"
          name="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          keyfilter="int"
          maxLength={4}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-checkout-promo"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Promo code
        </label>
        <InputText
          id="primereact-checkout-promo"
          name="promoCode"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      </div>
      <Button type="submit" label="Place order" />
    </form>
  )
}

export default CheckoutPaymentForm
