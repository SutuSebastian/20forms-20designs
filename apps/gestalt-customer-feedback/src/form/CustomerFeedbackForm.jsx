import { useState } from 'react'
import { Box, Button, Checkbox, Flex, SelectList, TextArea, TextField } from 'gestalt'

function CustomerFeedbackForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [comments, setComments] = useState('')
  const [contactMe, setContactMe] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-feedback-name"
          label="Full name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-feedback-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <SelectList
          id="gestalt-feedback-rating"
          label="Overall rating"
          onChange={({ value }) => setRating(value)}
          placeholder="Select rating"
          value={rating}
        >
          {[
            { label: 'Excellent', value: '5' },
            { label: 'Good', value: '4' },
            { label: 'Average', value: '3' },
            { label: 'Poor', value: '2' },
            { label: 'Very poor', value: '1' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <TextArea
          id="gestalt-feedback-comments"
          label="Comments"
          onChange={({ value }) => setComments(value)}
          placeholder="Share your experience..."
          value={comments}
        />
        <Checkbox
          checked={contactMe}
          id="gestalt-feedback-contact"
          label="I'd like to be contacted about my feedback"
          onChange={({ checked }) => setContactMe(checked)}
        />
        <Box>
          <Button color="red" text="Submit feedback" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default CustomerFeedbackForm
