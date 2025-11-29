import { Input, Button, Select, SelectItem, Textarea, Checkbox } from '@heroui/react'

const POSITIONS = [
  { value: 'software-engineer', label: 'Software Engineer' },
  { value: 'product-manager', label: 'Product Manager' },
  { value: 'designer', label: 'Designer' },
  { value: 'data-analyst', label: 'Data Analyst' },
  { value: 'marketing', label: 'Marketing' },
]

const EXPERIENCE_LEVELS = [
  { value: 'entry', label: 'Entry Level (0-2 years)' },
  { value: 'mid', label: 'Mid Level (3-5 years)' },
  { value: 'senior', label: 'Senior Level (6-9 years)' },
  { value: 'lead', label: 'Lead / Principal (10+ years)' },
]

function JobApplicationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Full name"
        name="fullName"
        type="text"
        isRequired
        variant="bordered"
      />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input
        label="Phone number"
        name="phone"
        type="tel"
        isRequired
        variant="bordered"
      />
      <Select
        label="Position"
        name="position"
        isRequired
        variant="bordered"
        placeholder="Select a position"
      >
        {POSITIONS.map((pos) => (
          <SelectItem key={pos.value}>{pos.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="Experience level"
        name="experience"
        isRequired
        variant="bordered"
        placeholder="Select experience level"
      >
        {EXPERIENCE_LEVELS.map((level) => (
          <SelectItem key={level.value}>{level.label}</SelectItem>
        ))}
      </Select>
      <Input
        label="LinkedIn URL"
        name="linkedin"
        type="url"
        placeholder="https://linkedin.com/in/..."
        variant="bordered"
      />
      <Input
        label="Portfolio URL"
        name="portfolio"
        type="url"
        placeholder="https://..."
        variant="bordered"
      />
      <Input
        label="Expected salary"
        name="salary"
        type="text"
        placeholder="e.g. $100,000"
        variant="bordered"
      />
      <Input
        label="Start date availability"
        name="startDate"
        type="date"
        variant="bordered"
      />
      <Textarea
        label="Cover letter"
        name="coverLetter"
        placeholder="Tell us why you're a great fit..."
        isRequired
        variant="bordered"
      />
      <Checkbox name="terms" isRequired>
        I confirm that the information provided is accurate
      </Checkbox>
      <Button type="submit" color="primary">
        Submit application
      </Button>
    </form>
  )
}

export default JobApplicationForm
