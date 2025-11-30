import { Input, Button, Textarea, Checkbox, Spacer, Text } from '@geist-ui/core'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-job-full-name"
        name="fullName"
        width="100%"
        placeholder="Full name"
        required
      >
        Full name
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-job-email"
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-job-phone"
        name="phone"
        type="tel"
        width="100%"
        placeholder="Phone number"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        required
      >
        Phone number
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-job-role"
        name="role"
        width="100%"
        placeholder="Role applied for"
        required
      >
        Role applied for
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-job-resume"
        name="resume"
        type="url"
        width="100%"
        placeholder="Resume link"
        required
      >
        Resume link
      </Input>
      <Spacer h={1} />
      <Text small>Cover letter</Text>
      <Spacer h={0.5} />
      <Textarea
        id="nocss-job-cover-letter"
        name="coverLetter"
        width="100%"
        placeholder="Cover letter"
        rows={4}
        required
      />
      <Spacer h={1} />
      <Checkbox name="updates">Keep me informed about future roles</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Submit application
      </Button>
    </form>
  )
}

export default JobApplicationForm
