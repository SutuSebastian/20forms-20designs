import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Checkbox,
  ActionGroup,
  FormSelect,
  FormSelectOption,
} from '@patternfly/react-core'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Name" isRequired fieldId="pf-feedback-name">
        <TextInput isRequired type="text" id="pf-feedback-name" name="name" />
      </FormGroup>
      <FormGroup label="Email address" isRequired fieldId="pf-feedback-email">
        <TextInput
          isRequired
          type="email"
          id="pf-feedback-email"
          name="email"
        />
      </FormGroup>
      <FormGroup label="Overall rating" isRequired fieldId="pf-feedback-rating">
        <FormSelect id="pf-feedback-rating" name="rating" isRequired>
          <FormSelectOption value="" label="Select rating" isPlaceholder />
          <FormSelectOption value="excellent" label="Excellent" />
          <FormSelectOption value="good" label="Good" />
          <FormSelectOption value="average" label="Average" />
          <FormSelectOption value="poor" label="Poor" />
        </FormSelect>
      </FormGroup>
      <FormGroup label="Comments" isRequired fieldId="pf-feedback-comments">
        <TextArea
          isRequired
          id="pf-feedback-comments"
          name="comments"
          rows={4}
        />
      </FormGroup>
      <FormGroup fieldId="pf-feedback-followup">
        <Checkbox
          label="I would like a follow-up"
          id="pf-feedback-followup"
          name="followUp"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Send feedback
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default CustomerFeedbackForm
