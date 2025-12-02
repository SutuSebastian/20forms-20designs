import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Button,
} from '@trussworks/react-uswds'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-billing-name">Name on card</Label>
        <TextInput
          id="uswds-billing-name"
          name="cardName"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-billing-card-number">Card number</Label>
        <TextInput
          id="uswds-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-billing-expiration">Expiration date</Label>
        <TextInput
          id="uswds-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          inputMode="numeric"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-billing-cvc">Security code</Label>
        <TextInput
          id="uswds-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-billing-address">Billing address</Label>
        <TextInput
          id="uswds-billing-address"
          name="address"
          type="text"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-billing-country">Country</Label>
        <Select id="uswds-billing-country" name="country" required>
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </Select>
      </FormGroup>
      <Button type="submit">Save billing details</Button>
    </Form>
  )
}

export default BillingInfoForm
