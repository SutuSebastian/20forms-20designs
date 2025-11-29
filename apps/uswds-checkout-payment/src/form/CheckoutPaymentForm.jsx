import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function CheckoutPaymentForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Payment submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 12 }, (_, i) => currentYear + i)
  const months = [
    '01 - January',
    '02 - February',
    '03 - March',
    '04 - April',
    '05 - May',
    '06 - June',
    '07 - July',
    '08 - August',
    '09 - September',
    '10 - October',
    '11 - November',
    '12 - December',
  ]

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-card-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Cardholder name
        </Label>
        <TextInput
          id="uswds-checkout-card-name"
          name="cardName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-card-number"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Card number
        </Label>
        <TextInput
          id="uswds-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          maxLength={19}
          placeholder="1234 5678 9012 3456"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-exp-month"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Expiration month
        </Label>
        <Select
          id="uswds-checkout-exp-month"
          name="expMonth"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select month</option>
          {months.map((month, index) => (
            <option key={index} value={String(index + 1).padStart(2, '0')}>
              {month}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-exp-year"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Expiration year
        </Label>
        <Select
          id="uswds-checkout-exp-year"
          name="expYear"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-cvv"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Security code (CVV)
        </Label>
        <TextInput
          id="uswds-checkout-cvv"
          name="cvv"
          type="password"
          inputMode="numeric"
          maxLength={4}
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-billing-zip"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Billing ZIP code
        </Label>
        <TextInput
          id="uswds-checkout-billing-zip"
          name="billingZip"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-checkout-save-card"
          name="saveCard"
          label="Save card for future purchases"
        />
      </FormGroup>
      <Button type="submit">Complete purchase</Button>
    </Form>
  )
}

export default CheckoutPaymentForm
