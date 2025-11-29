import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Textarea,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function CustomerFeedbackForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  const ratings = [
    { value: '5', label: '5 - Excellent' },
    { value: '4', label: '4 - Good' },
    { value: '3', label: '3 - Average' },
    { value: '2', label: '2 - Below Average' },
    { value: '1', label: '1 - Poor' },
  ]

  const feedbackCategories = [
    'Product quality',
    'Customer service',
    'Shipping / Delivery',
    'Website experience',
    'Pricing',
    'Other',
  ]

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Name (optional)
        </Label>
        <TextInput
          id="uswds-feedback-name"
          name="name"
          type="text"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address (optional)
        </Label>
        <TextInput
          id="uswds-feedback-email"
          name="email"
          type="email"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-category"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Feedback category
        </Label>
        <Select
          id="uswds-feedback-category"
          name="category"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select category</option>
          {feedbackCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-rating"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Overall rating
        </Label>
        <Select
          id="uswds-feedback-rating"
          name="rating"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select rating</option>
          {ratings.map((rating) => (
            <option key={rating.value} value={rating.value}>
              {rating.label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-comments"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Comments
        </Label>
        <Textarea
          id="uswds-feedback-comments"
          name="comments"
          placeholder="Please share your feedback..."
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-feedback-recommend"
          name="recommend"
          label="I would recommend this to a friend"
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-feedback-contact"
          name="contactMe"
          label="I would like to be contacted about my feedback"
        />
      </FormGroup>
      <Button type="submit">Submit feedback</Button>
    </Form>
  )
}

export default CustomerFeedbackForm
