import {
  Form,
  FormGroup,
  TextInput,
  Button,
  ActionGroup,
  FormSelect,
  FormSelectOption,
} from '@patternfly/react-core'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Name on card" isRequired fieldId="pf-billing-name">
        <TextInput
          isRequired
          type="text"
          id="pf-billing-name"
          name="cardName"
        />
      </FormGroup>
      <FormGroup
        label="Card number"
        isRequired
        fieldId="pf-billing-card-number"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-billing-card-number"
          name="cardNumber"
          maxLength={19}
        />
      </FormGroup>
      <FormGroup
        label="Expiration date"
        isRequired
        fieldId="pf-billing-expiration"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-billing-expiration"
          name="expiration"
          placeholder="MM/YY"
        />
      </FormGroup>
      <FormGroup label="Security code" isRequired fieldId="pf-billing-cvc">
        <TextInput
          isRequired
          type="text"
          id="pf-billing-cvc"
          name="cvc"
          maxLength={4}
        />
      </FormGroup>
      <FormGroup
        label="Billing address"
        isRequired
        fieldId="pf-billing-address"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-billing-address"
          name="address"
        />
      </FormGroup>
      <FormGroup label="Country" isRequired fieldId="pf-billing-country">
        <FormSelect id="pf-billing-country" name="country" isRequired>
          <FormSelectOption value="" label="Select country" isPlaceholder />
          <FormSelectOption value="US" label="United States" />
          <FormSelectOption value="CA" label="Canada" />
        </FormSelect>
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Save billing details
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default BillingInfoForm
