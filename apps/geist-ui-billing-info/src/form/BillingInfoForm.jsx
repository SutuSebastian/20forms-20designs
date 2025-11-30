import { Input, Button, Select, Spacer, Text } from '@geist-ui/core'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-billing-name"
        name="cardName"
        width="100%"
        placeholder="Name on card"
        required
      >
        Name on card
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-billing-card-number"
        name="cardNumber"
        width="100%"
        placeholder="Card number"
        htmlType="text"
        inputMode="numeric"
        pattern="[0-9]{13,19}"
        maxLength={19}
        required
      >
        Card number
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-billing-expiration"
        name="expiration"
        width="100%"
        placeholder="MM/YY"
        htmlType="text"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
        required
      >
        Expiration date
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-billing-cvc"
        name="cvc"
        width="100%"
        placeholder="Security code"
        htmlType="text"
        inputMode="numeric"
        pattern="[0-9]{3,4}"
        maxLength={4}
        required
      >
        Security code
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-billing-address"
        name="address"
        width="100%"
        placeholder="Billing address"
        required
      >
        Billing address
      </Input>
      <Spacer h={1} />
      <Text small>Country</Text>
      <Spacer h={0.5} />
      <Select
        id="nocss-billing-country"
        name="country"
        placeholder="Select country"
        width="100%"
      >
        <Select.Option value="US">United States</Select.Option>
        <Select.Option value="CA">Canada</Select.Option>
      </Select>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Save billing details
      </Button>
    </form>
  )
}

export default BillingInfoForm
