import { useState, useCallback } from 'react'
import { Field, Input, Textarea } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid } from '@zendeskgarden/react-grid'

function AppointmentRequestForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Field>
              <Field.Label>Full name</Field.Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Email address</Field.Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col sm={6}>
            <Field>
              <Field.Label>Preferred date</Field.Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Field>
              <Field.Label>Preferred time</Field.Label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Reason for visit</Field.Label>
              <Textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <Button type="submit" isPrimary>
              Request appointment
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </form>
  )
}

export default AppointmentRequestForm
