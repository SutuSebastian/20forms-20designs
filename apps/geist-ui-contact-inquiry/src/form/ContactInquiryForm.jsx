import {
  Input,
  Button,
  Select,
  Textarea,
  Checkbox,
  Spacer,
  Text,
} from '@geist-ui/core'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-contact-name"
        name="fullName"
        width="100%"
        placeholder="Full name"
        required
      >
        Full name
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-contact-email"
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Text small>Topic</Text>
      <Spacer h={0.5} />
      <Select
        id="nocss-contact-topic"
        name="topic"
        placeholder="Select topic"
        width="100%"
      >
        <Select.Option value="support">Support</Select.Option>
        <Select.Option value="sales">Sales</Select.Option>
        <Select.Option value="feedback">Feedback</Select.Option>
        <Select.Option value="other">Other</Select.Option>
      </Select>
      <Spacer h={1} />
      <Text small>Message</Text>
      <Spacer h={0.5} />
      <Textarea
        id="nocss-contact-message"
        name="message"
        width="100%"
        placeholder="Your message"
        rows={4}
        required
      />
      <Spacer h={1} />
      <Checkbox name="consent">Allow follow-up communication</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Submit inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
