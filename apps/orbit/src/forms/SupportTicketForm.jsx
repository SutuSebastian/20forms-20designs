import {
  InputField,
  Button,
  Stack,
  Textarea,
  Radio,
  InputFile,
  Text,
} from '@kiwicom/orbit-components'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Subject" name="subject" type="text" required />

        <Text weight="bold">Priority</Text>
        <Radio label="Low" name="priority" value="low" />
        <Radio label="Medium" name="priority" value="medium" />
        <Radio label="High" name="priority" value="high" />

        <Textarea
          label="Issue description"
          name="description"
          rows={4}
          required
        />
        <InputFile label="Attachments" name="attachments" />
        <Button type="primary" submit>
          Submit ticket
        </Button>
      </Stack>
    </form>
  )
}

export default SupportTicketForm
