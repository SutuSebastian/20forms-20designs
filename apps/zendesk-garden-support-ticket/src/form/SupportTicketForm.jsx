import { useState, useCallback } from 'react'
import {
  Field,
  Label,
  Input,
  Textarea,
  Radio,
  FileUpload,
} from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'

const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
]

function SupportTicketForm() {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('medium')
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState([])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Ticket submitted!')
  }, [])

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Subject</Label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Label style={{ marginBottom: '8px', display: 'block' }}>
              Priority
            </Label>
            {PRIORITY_OPTIONS.map((option) => (
              <Field key={option.value} style={{ marginBottom: '8px' }}>
                <Radio
                  name="priority"
                  value={option.value}
                  checked={priority === option.value}
                  onChange={() => setPriority(option.value)}
                >
                  <Label>{option.label}</Label>
                </Radio>
              </Field>
            ))}
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Attachments</Label>
              <FileUpload onChange={handleFileChange}>
                {files.length > 0
                  ? files.map((f) => f.name).join(', ')
                  : 'Choose files or drag and drop'}
              </FileUpload>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Submit ticket
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default SupportTicketForm
