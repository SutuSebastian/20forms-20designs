import { CdsInput, CdsSelect, CdsButton, CdsFormGroup } from '@cds/react/forms'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Email for receipt</label>
          <input
            id="clarity-checkout-email"
            name="email"
            type="email"
            required
          />
        </CdsInput>

        <CdsSelect>
          <label>Shipping method</label>
          <select id="clarity-checkout-shipping-method" name="shippingMethod" required>
            <option value="">Select shipping</option>
            <option value="standard">Standard</option>
            <option value="express">Express</option>
            <option value="overnight">Overnight</option>
          </select>
        </CdsSelect>

        <CdsInput>
          <label>Card number</label>
          <input
            id="clarity-checkout-card-number"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{13,19}"
            maxLength="19"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Expiration</label>
          <input
            id="clarity-checkout-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            inputMode="numeric"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>CVC</label>
          <input
            id="clarity-checkout-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength="4"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Promo code</label>
          <input
            id="clarity-checkout-promo"
            name="promoCode"
            type="text"
            pattern="[A-Za-z0-9]{3,15}"
          />
        </CdsInput>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Place order
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default CheckoutPaymentForm
