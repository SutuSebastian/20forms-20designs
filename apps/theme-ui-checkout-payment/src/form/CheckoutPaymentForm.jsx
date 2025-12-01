/** @jsxImportSource theme-ui */

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
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
      'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '16px',
    paddingRight: '32px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-checkout-email" sx={labelStyles}>
          Email for receipt
        </label>
        <input
          id="theme-ui-checkout-email"
          name="email"
          type="email"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-checkout-shipping-method" sx={labelStyles}>
          Shipping method
        </label>
        <select
          id="theme-ui-checkout-shipping-method"
          name="shippingMethod"
          required
          sx={selectStyles}
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-checkout-card-number" sx={labelStyles}>
          Card number
        </label>
        <input
          id="theme-ui-checkout-card-number"
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
        <label htmlFor="theme-ui-checkout-expiration" sx={labelStyles}>
          Expiration
        </label>
        <input
          id="theme-ui-checkout-expiration"
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
        <label htmlFor="theme-ui-checkout-cvc" sx={labelStyles}>
          CVC
        </label>
        <input
          id="theme-ui-checkout-cvc"
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
        <label htmlFor="theme-ui-checkout-promo" sx={labelStyles}>
          Promo code
        </label>
        <input
          id="theme-ui-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          sx={inputStyles}
        />
      </div>
      <button type="submit" sx={buttonStyles}>
        Place order
      </button>
    </form>
  )
}

export default CheckoutPaymentForm
