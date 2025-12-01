import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-checkout-email">
          Email for receipt
        </CFormLabel>
        <CFormInput
          id="coreui-checkout-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-checkout-shipping-method">
          Shipping method
        </CFormLabel>
        <CFormSelect
          id="coreui-checkout-shipping-method"
          name="shippingMethod"
          required
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-checkout-card-number">
          Card number
        </CFormLabel>
        <CFormInput
          id="coreui-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-checkout-expiration">Expiration</CFormLabel>
        <CFormInput
          id="coreui-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-checkout-cvc">CVC</CFormLabel>
        <CFormInput
          id="coreui-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-checkout-promo">Promo code</CFormLabel>
        <CFormInput
          id="coreui-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Place order
        </CButton>
      </div>
    </CForm>
  )
}

export default CheckoutPaymentForm
