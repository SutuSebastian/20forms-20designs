import { useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from '../../constants/locationOptions'

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
    maxHeight: '200px',
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
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    borderRadius: '4px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  checkboxIndicator: {
    color: '#ffffff',
    fontSize: '12px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#0f172a',
    cursor: 'pointer',
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

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern = country === 'CA' ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d' : '\\d{5}(-\\d{4})?'

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="shipping-full-name" style={styles.label}>
          Recipient name
        </label>
        <input
          id="shipping-full-name"
          name="fullName"
          type="text"
          required
          style={styles.input}
          placeholder="Enter recipient name"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="shipping-street" style={styles.label}>
          Street address
        </label>
        <input
          id="shipping-street"
          name="street"
          type="text"
          required
          style={styles.input}
          placeholder="Enter street address"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="shipping-street-2" style={styles.label}>
          Apartment, suite, etc.
        </label>
        <input
          id="shipping-street-2"
          name="street2"
          type="text"
          style={styles.input}
          placeholder="Apt, suite, unit (optional)"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="shipping-city" style={styles.label}>
          City
        </label>
        <input
          id="shipping-city"
          name="city"
          type="text"
          required
          style={styles.input}
          placeholder="Enter city"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="shipping-country" style={styles.label}>
          Country
        </label>
        <Select.Root name="country" value={country} onValueChange={setCountry} required>
          <Select.Trigger id="shipping-country" style={styles.selectTrigger}>
            <Select.Value />
            <Select.Icon>▼</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content style={styles.selectContent} position="popper" sideOffset={4}>
              <Select.Viewport style={styles.selectViewport}>
                {COUNTRIES.map(({ value, label }) => (
                  <Select.Item key={value} value={value} style={styles.selectItem}>
                    <Select.ItemText>{label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="shipping-region" style={styles.label}>
          State / Province / Territory
        </label>
        <Select.Root name="region" required>
          <Select.Trigger id="shipping-region" style={styles.selectTrigger}>
            <Select.Value placeholder="Select an option" />
            <Select.Icon>▼</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content style={styles.selectContent} position="popper" sideOffset={4}>
              <Select.Viewport style={styles.selectViewport}>
                {regionOptions.map((region) => (
                  <Select.Item key={region} value={region} style={styles.selectItem}>
                    <Select.ItemText>{region}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="shipping-postal" style={styles.label}>
          Postal code
        </label>
        <input
          id="shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          required
          style={styles.input}
          placeholder="Enter postal code"
        />
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root id="shipping-default" name="default" style={styles.checkbox}>
          <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="shipping-default" style={styles.checkboxLabel}>
          Use as default shipping address
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Save address
      </button>
    </form>
  )
}

export default ShippingAddressForm
