import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'

function BillingInfoForm() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  const countryOptions = [
    { label: 'Select country', value: '' },
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-billing-name"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Name on card
        </label>
        <InputText
          id="primereact-billing-name"
          name="cardName"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-billing-card-number"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Card number
        </label>
        <InputText
          id="primereact-billing-card-number"
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
          htmlFor="primereact-billing-expiration"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Expiration date
        </label>
        <InputText
          id="primereact-billing-expiration"
          name="expiration"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-billing-cvc"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Security code
        </label>
        <InputText
          id="primereact-billing-cvc"
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
          htmlFor="primereact-billing-address"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Billing address
        </label>
        <InputText
          id="primereact-billing-address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-billing-country"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Country
        </label>
        <Dropdown
          id="primereact-billing-country"
          name="country"
          value={country}
          options={countryOptions}
          onChange={(e) => setCountry(e.value)}
          required
        />
      </div>
      <Button type="submit" label="Save billing details" />
    </form>
  )
}

export default BillingInfoForm
