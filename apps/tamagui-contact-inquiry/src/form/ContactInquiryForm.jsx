import { Button, Input, Label, YStack, TextArea, Select } from 'tamagui'
import { useState } from 'react'

function ContactInquiryForm() {
  const [subject, setSubject] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Message sent!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email address"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="subject">Subject</Label>
          <Select id="subject" value={subject} onValueChange={setSubject}>
            <Select.Trigger>
              <Select.Value placeholder="Select a subject" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="general">
                <Select.ItemText>General inquiry</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="support">
                <Select.ItemText>Technical support</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="sales">
                <Select.ItemText>Sales</Select.ItemText>
              </Select.Item>
              <Select.Item index={3} value="feedback">
                <Select.ItemText>Feedback</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Your message"
            rows={4}
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Send message
        </Button>
      </YStack>
    </form>
  )
}

export default ContactInquiryForm
