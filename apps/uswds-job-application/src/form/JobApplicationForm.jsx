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

function JobApplicationForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Job application submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  const positions = [
    'Software Engineer',
    'Product Manager',
    'UX Designer',
    'Data Analyst',
    'DevOps Engineer',
    'Marketing Specialist',
    'Sales Representative',
    'Customer Support',
  ]

  const experienceLevels = [
    'Entry level (0-2 years)',
    'Mid level (3-5 years)',
    'Senior (6-10 years)',
    'Lead / Principal (10+ years)',
  ]

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-job-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-job-name"
          name="name"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-job-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-phone"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Phone number
        </Label>
        <TextInput
          id="uswds-job-phone"
          name="phone"
          type="tel"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-position"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Position applying for
        </Label>
        <Select
          id="uswds-job-position"
          name="position"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select position</option>
          {positions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-experience"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Experience level
        </Label>
        <Select
          id="uswds-job-experience"
          name="experience"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select experience level</option>
          {experienceLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-linkedin"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          LinkedIn profile URL
        </Label>
        <TextInput
          id="uswds-job-linkedin"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/your-profile"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-portfolio"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Portfolio / Website URL
        </Label>
        <TextInput
          id="uswds-job-portfolio"
          name="portfolio"
          type="url"
          placeholder="https://your-portfolio.com"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-start-date"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Available start date
        </Label>
        <TextInput
          id="uswds-job-start-date"
          name="startDate"
          type="date"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-job-cover-letter"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Cover letter
        </Label>
        <Textarea
          id="uswds-job-cover-letter"
          name="coverLetter"
          placeholder="Tell us why you're a great fit for this position..."
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-job-relocate"
          name="relocate"
          label="I am willing to relocate if necessary"
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-job-remote"
          name="remote"
          label="I am interested in remote work opportunities"
        />
      </FormGroup>
      <Button type="submit">Submit application</Button>
    </Form>
  )
}

export default JobApplicationForm
