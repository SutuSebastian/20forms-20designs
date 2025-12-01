import { useState, useCallback } from 'react'
import {
  Field,
  Label,
  Input,
  Textarea,
  Checkbox,
  Select,
} from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'

function CustomerFeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [comments, setComments] = useState('')
  const [followUp, setFollowUp] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Email address</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Overall rating</Label>
              <Select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Select rating</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
              </Select>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Comments</Label>
              <Textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Checkbox
                checked={followUp}
                onChange={(e) => setFollowUp(e.target.checked)}
              >
                <Label>I would like a follow-up</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Send feedback
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default CustomerFeedbackForm
