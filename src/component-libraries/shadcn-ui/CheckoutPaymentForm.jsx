import * as Select from '@radix-ui/react-select'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#0f172a',
    lineHeight: '20px',
  },
  input: {
    height: '40px',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  },
  selectTrigger: {
    height: '40px',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0f172a',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  selectContent: {
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    zIndex: 50,
  },
  selectViewport: {
    padding: '4px',
  },
  selectItem: {
    fontSize: '14px',
    color: '#0f172a',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
  },
  button: {
    height: '40px',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#18181b',
    color: '#fafafa',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
}

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="checkout-email" style={styles.label}>
          Email for receipt
        </label>
        <input
          id="checkout-email"
          name="email"
          type="email"
          required
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="checkout-shipping-method" style={styles.label}>
          Shipping method
        </label>
        <Select.Root name="shippingMethod" required>
          <Select.Trigger id="checkout-shipping-method" style={styles.selectTrigger}>
            <Select.Value placeholder="Select shipping" />
            <Select.Icon>▼</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content style={styles.selectContent} position="popper" sideOffset={4}>
              <Select.Viewport style={styles.selectViewport}>
                <Select.Item value="standard" style={styles.selectItem}>
                  <Select.ItemText>Standard</Select.ItemText>
                </Select.Item>
                <Select.Item value="express" style={styles.selectItem}>
                  <Select.ItemText>Express</Select.ItemText>
                </Select.Item>
                <Select.Item value="overnight" style={styles.selectItem}>
                  <Select.ItemText>Overnight</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="checkout-card-number" style={styles.label}>
          Card number
        </label>
        <input
          id="checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
          style={styles.input}
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="checkout-expiration" style={styles.label}>
          Expiration
        </label>
        <input
          id="checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
          style={styles.input}
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="checkout-cvc" style={styles.label}>
          CVC
        </label>
        <input
          id="checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
          style={styles.input}
          placeholder="123"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="checkout-promo" style={styles.label}>
          Promo code
        </label>
        <input
          id="checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          style={styles.input}
          placeholder="Enter promo code (optional)"
        />
      </div>
      <button type="submit" style={styles.button}>
        Place order
      </button>
    </form>
  )
}

export default CheckoutPaymentForm
