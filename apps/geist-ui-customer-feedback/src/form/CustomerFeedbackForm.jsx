import {
  Input,
  Button,
  Select,
  Textarea,
  Checkbox,
  Spacer,
  Text,
} from '@geist-ui/core'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-feedback-name"
        name="name"
        width="100%"
        placeholder="Name"
        required
      >
        Name
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-feedback-email"
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Text small>Overall rating</Text>
      <Spacer h={0.5} />
      <Select
        id="nocss-feedback-rating"
        name="rating"
        placeholder="Select rating"
        width="100%"
      >
        <Select.Option value="excellent">Excellent</Select.Option>
        <Select.Option value="good">Good</Select.Option>
        <Select.Option value="average">Average</Select.Option>
        <Select.Option value="poor">Poor</Select.Option>
      </Select>
      <Spacer h={1} />
      <Text small>Comments</Text>
      <Spacer h={0.5} />
      <Textarea
        id="nocss-feedback-comments"
        name="comments"
        width="100%"
        placeholder="Your comments"
        rows={4}
        required
      />
      <Spacer h={1} />
      <Checkbox name="followUp">I would like a follow-up</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Send feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
