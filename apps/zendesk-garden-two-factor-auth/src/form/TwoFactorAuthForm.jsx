import { useState, useCallback } from 'react'
import { Field, Label, Input, Hint } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [useBackupCode, setUseBackupCode] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Code verified!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>
                {useBackupCode ? 'Backup code' : 'Verification code'}
              </Label>
              <Hint>
                {useBackupCode
                  ? 'Enter one of your backup codes'
                  : 'Enter the 6-digit code from your authenticator app'}
              </Hint>
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={useBackupCode ? 10 : 6}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary style={{ marginRight: '8px' }}>
              Verify
            </Button>
            <Button onClick={() => alert('Code resent!')}>Resend code</Button>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Button isLink onClick={() => setUseBackupCode(!useBackupCode)}>
              {useBackupCode ? 'Use authenticator code' : 'Use backup code'}
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default TwoFactorAuthForm
