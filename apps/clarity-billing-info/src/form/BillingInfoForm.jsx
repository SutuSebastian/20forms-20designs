import { CdsInput, CdsSelect, CdsButton, CdsFormGroup } from '@cds/react/forms'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Name on card</label>
          <input
            id="clarity-billing-name"
            name="cardName"
            type="text"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Card number</label>
          <input
            id="clarity-billing-card-number"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{13,19}"
            maxLength="19"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Expiration date</label>
          <input
            id="clarity-billing-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            inputMode="numeric"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Security code</label>
          <input
            id="clarity-billing-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength="4"
            required
          />
        </CdsInput>

        <CdsInput>
          <label>Billing address</label>
          <input
            id="clarity-billing-address"
            name="address"
            type="text"
            required
          />
        </CdsInput>

        <CdsSelect>
          <label>Country</label>
          <select id="clarity-billing-country" name="country" required>
            <option value="">Select country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
        </CdsSelect>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Save billing details
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default BillingInfoForm
