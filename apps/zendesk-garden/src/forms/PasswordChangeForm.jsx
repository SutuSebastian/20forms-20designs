import { useState, useCallback } from 'react'
import { Field, Label, Input, Checkbox } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'

function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [logoutOthers, setLogoutOthers] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Password change requested!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Current password</Label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>New password</Label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                minLength={8}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Confirm new password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={8}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Checkbox
                checked={logoutOthers}
                onChange={(e) => setLogoutOthers(e.target.checked)}
              >
                <Label>Sign out of other devices</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Update password
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default PasswordChangeForm
