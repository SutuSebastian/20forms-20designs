import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-billing-name">Name on card</CFormLabel>
        <CFormInput
          id="coreui-billing-name"
          name="cardName"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-billing-card-number">
          Card number
        </CFormLabel>
        <CFormInput
          id="coreui-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-billing-expiration">
          Expiration date
        </CFormLabel>
        <CFormInput
          id="coreui-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-billing-cvc">Security code</CFormLabel>
        <CFormInput
          id="coreui-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-billing-address">
          Billing address
        </CFormLabel>
        <CFormInput
          id="coreui-billing-address"
          name="address"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-billing-country">Country</CFormLabel>
        <CFormSelect id="coreui-billing-country" name="country" required>
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </CFormSelect>
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Save billing details
        </CButton>
      </div>
    </CForm>
  )
}

export default BillingInfoForm
