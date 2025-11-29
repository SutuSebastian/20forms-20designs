import {
  Input,
  Button,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  RadioGroup,
  Radio,
} from '@nextui-org/react'

const positions = [
  { key: 'frontend', label: 'Frontend Developer' },
  { key: 'backend', label: 'Backend Developer' },
  { key: 'fullstack', label: 'Full Stack Developer' },
  { key: 'design', label: 'UI/UX Designer' },
  { key: 'pm', label: 'Product Manager' },
]

const experienceLevels = [
  { key: 'entry', label: 'Entry Level (0-2 years)' },
  { key: 'mid', label: 'Mid Level (3-5 years)' },
  { key: 'senior', label: 'Senior (6+ years)' },
]

function JobApplicationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input label="Full name" name="name" isRequired variant="bordered" />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input label="Phone number" name="phone" type="tel" variant="bordered" />
      <Select label="Position" name="position" isRequired variant="bordered">
        {positions.map((p) => (
          <SelectItem key={p.key}>{p.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="Experience level"
        name="experience"
        isRequired
        variant="bordered"
      >
        {experienceLevels.map((e) => (
          <SelectItem key={e.key}>{e.label}</SelectItem>
        ))}
      </Select>
      <Input
        label="LinkedIn profile (optional)"
        name="linkedin"
        type="url"
        variant="bordered"
        placeholder="https://linkedin.com/in/..."
      />
      <Input
        label="Portfolio website (optional)"
        name="portfolio"
        type="url"
        variant="bordered"
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm text-default-600">Resume/CV</span>
        <input type="file" accept=".pdf,.doc,.docx" className="text-sm" />
      </div>
      <Textarea
        label="Cover letter"
        name="coverLetter"
        variant="bordered"
        minRows={4}
        placeholder="Tell us why you're a great fit for this role..."
      />
      <RadioGroup label="When can you start?">
        <Radio value="immediate">Immediately</Radio>
        <Radio value="2weeks">2 weeks notice</Radio>
        <Radio value="1month">1 month notice</Radio>
        <Radio value="other">Other</Radio>
      </RadioGroup>
      <Checkbox name="relocate">Willing to relocate</Checkbox>
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
