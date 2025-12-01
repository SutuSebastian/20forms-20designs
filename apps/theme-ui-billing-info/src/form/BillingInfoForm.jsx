/** @jsxImportSource theme-ui */

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  const inputStyles = {
    width: '100%',
    padding: '8px 12px',
    fontSize: '16px',
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'default',
    backgroundColor: 'inputBg',
    color: 'text',
    outline: 'none',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: '0 0 0 2px rgba(0, 119, 204, 0.2)',
    },
  }

  const labelStyles = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: 'bold',
    color: 'text',
  }

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'primary',
    border: 'none',
    borderRadius: 'default',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
  }

  const selectStyles = {
    ...inputStyles,
    appearance: 'none',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '16px',
    paddingRight: '32px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-billing-name" sx={labelStyles}>
          Name on card
        </label>
        <input
          id="theme-ui-billing-name"
          name="cardName"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-billing-card-number" sx={labelStyles}>
          Card number
        </label>
        <input
          id="theme-ui-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-billing-expiration" sx={labelStyles}>
          Expiration date
        </label>
        <input
          id="theme-ui-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-billing-cvc" sx={labelStyles}>
          Security code
        </label>
        <input
          id="theme-ui-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-billing-address" sx={labelStyles}>
          Billing address
        </label>
        <input
          id="theme-ui-billing-address"
          name="address"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-billing-country" sx={labelStyles}>
          Country
        </label>
        <select
          id="theme-ui-billing-country"
          name="country"
          required
          sx={selectStyles}
        >
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
      </div>
      <button type="submit" sx={buttonStyles}>
        Save billing details
      </button>
    </form>
  )
}

export default BillingInfoForm
