import { InputField, Button, Stack, Select, Textarea, Checkbox } from '@kiwicom/orbit-components'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  const ratingOptions = [
    { label: 'Select rating', value: '' },
    { label: 'Excellent', value: 'excellent' },
    { label: 'Good', value: 'good' },
    { label: 'Average', value: 'average' },
    { label: 'Poor', value: 'poor' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Name" name="name" type="text" required />
        <InputField label="Email address" name="email" type="email" required />
        <Select label="Overall rating" name="rating" options={ratingOptions} required />
        <Textarea label="Comments" name="comments" rows={4} required />
        <Checkbox label="I would like a follow-up" name="followUp" />
        <Button type="primary" submit>Send feedback</Button>
      </Stack>
    </form>
  )
}

export default CustomerFeedbackForm
