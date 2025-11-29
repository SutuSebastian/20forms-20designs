import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Textarea,
  Button,
} from '@trussworks/react-uswds'

function SupportTicketForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  const issueCategories = [
    'Technical issue',
    'Billing question',
    'Account access',
    'Feature request',
    'Bug report',
    'General inquiry',
  ]

  const priorities = [
    { value: 'low', label: 'Low - General question' },
    { value: 'medium', label: 'Medium - Need help soon' },
    { value: 'high', label: 'High - Blocking issue' },
    { value: 'critical', label: 'Critical - System down' },
  ]

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-support-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-support-name"
          name="name"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-support-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-support-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-support-category"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Issue category
        </Label>
        <Select
          id="uswds-support-category"
          name="category"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select category</option>
          {issueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-support-priority"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Priority
        </Label>
        <Select
          id="uswds-support-priority"
          name="priority"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select priority</option>
          {priorities.map((priority) => (
            <option key={priority.value} value={priority.value}>
              {priority.label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-support-subject"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Subject
        </Label>
        <TextInput
          id="uswds-support-subject"
          name="subject"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-support-description"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Description
        </Label>
        <Textarea
          id="uswds-support-description"
          name="description"
          placeholder="Please describe your issue in detail..."
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-support-order-number"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Order / Reference number (if applicable)
        </Label>
        <TextInput
          id="uswds-support-order-number"
          name="orderNumber"
          type="text"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Submit ticket</Button>
    </Form>
  )
}

export default SupportTicketForm
