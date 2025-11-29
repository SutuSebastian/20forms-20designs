import { Input, Button, Select, Checkbox, Spacer, Text } from '@geist-ui/core'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Text small>Frequency</Text>
      <Spacer h={0.5} />
      <Select name="frequency" placeholder="Select frequency" width="100%">
        <Select.Option value="weekly">Weekly</Select.Option>
        <Select.Option value="monthly">Monthly</Select.Option>
        <Select.Option value="quarterly">Quarterly</Select.Option>
      </Select>
      <Spacer h={1} />
      <Checkbox name="agree">Receive product updates</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
