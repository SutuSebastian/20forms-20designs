import { useState, useCallback } from 'react'
import {
  Field,
  Label,
  Input,
  Textarea,
  Checkbox,
} from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'

function PrivacyConsentForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [emailComm, setEmailComm] = useState(true)
  const [smsComm, setSmsComm] = useState(false)
  const [phoneComm, setPhoneComm] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [personalization, setPersonalization] = useState(true)
  const [notes, setNotes] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Preferences saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Full name</Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Label
              style={{
                fontWeight: 'bold',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              Communication Preferences
            </Label>
            <Field style={{ marginBottom: '8px' }}>
              <Checkbox
                checked={emailComm}
                onChange={(e) => setEmailComm(e.target.checked)}
              >
                <Label>Email communications</Label>
              </Checkbox>
            </Field>
            <Field style={{ marginBottom: '8px' }}>
              <Checkbox
                checked={smsComm}
                onChange={(e) => setSmsComm(e.target.checked)}
              >
                <Label>SMS notifications</Label>
              </Checkbox>
            </Field>
            <Field>
              <Checkbox
                checked={phoneComm}
                onChange={(e) => setPhoneComm(e.target.checked)}
              >
                <Label>Phone calls</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Label
              style={{
                fontWeight: 'bold',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              Privacy Settings
            </Label>
            <Field style={{ marginBottom: '8px' }}>
              <Checkbox
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              >
                <Label>Allow analytics cookies</Label>
              </Checkbox>
            </Field>
            <Field>
              <Checkbox
                checked={personalization}
                onChange={(e) => setPersonalization(e.target.checked)}
              >
                <Label>Allow personalization</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Additional notes</Label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Save preferences
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default PrivacyConsentForm
