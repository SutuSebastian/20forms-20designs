import { useState, useCallback } from 'react'
import { Field, Label, Input, Checkbox } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import {
  Dropdown,
  Trigger,
  Select,
  Menu,
  Item,
} from '@zendeskgarden/react-dropdowns'

const TEAM_SIZE_OPTIONS = [
  { value: '1-5', label: '1-5 members' },
  { value: '6-20', label: '6-20 members' },
  { value: '21-50', label: '21-50 members' },
  { value: '50+', label: 'More than 50' },
]

const GOAL_OPTIONS = [
  { value: 'productivity', label: 'Improve productivity' },
  { value: 'collaboration', label: 'Better collaboration' },
  { value: 'project-management', label: 'Project management' },
  { value: 'other', label: 'Other' },
]

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState(TEAM_SIZE_OPTIONS[0])
  const [goal, setGoal] = useState(GOAL_OPTIONS[0])
  const [updates, setUpdates] = useState(true)

  const handleNext = useCallback(() => {
    setStep((s) => Math.min(s + 1, 3))
  }, [])

  const handleBack = useCallback(() => {
    setStep((s) => Math.max(s - 1, 1))
  }, [])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row style={{ marginBottom: '24px' }}>
          <Col>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: s <= step ? '#1f73b7' : '#e0e0e0',
                    color: s <= step ? '#fff' : '#666',
                    fontWeight: 'bold',
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
              {step === 1 && 'Step 1: Account'}
              {step === 2 && 'Step 2: Team'}
              {step === 3 && 'Step 3: Preferences'}
            </div>
          </Col>
        </Row>

        {step === 1 && (
          <>
            <Row>
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
            <Row style={{ marginTop: '16px' }}>
              <Col>
                <Field>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Field>
              </Col>
            </Row>
          </>
        )}

        {step === 2 && (
          <>
            <Row>
              <Col>
                <Field>
                  <Label>Team name</Label>
                  <Input
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                  />
                </Field>
              </Col>
            </Row>
            <Row style={{ marginTop: '16px' }}>
              <Col>
                <Field>
                  <Label>Team size</Label>
                  <Dropdown
                    selectedItem={teamSize}
                    onSelect={(item) => setTeamSize(item)}
                    downshiftProps={{
                      itemToString: (item) => item?.label || '',
                    }}
                  >
                    <Trigger>
                      <Select>{teamSize.label}</Select>
                    </Trigger>
                    <Menu>
                      {TEAM_SIZE_OPTIONS.map((option) => (
                        <Item key={option.value} value={option}>
                          {option.label}
                        </Item>
                      ))}
                    </Menu>
                  </Dropdown>
                </Field>
              </Col>
            </Row>
          </>
        )}

        {step === 3 && (
          <>
            <Row>
              <Col>
                <Field>
                  <Label>Primary goal</Label>
                  <Dropdown
                    selectedItem={goal}
                    onSelect={(item) => setGoal(item)}
                    downshiftProps={{
                      itemToString: (item) => item?.label || '',
                    }}
                  >
                    <Trigger>
                      <Select>{goal.label}</Select>
                    </Trigger>
                    <Menu>
                      {GOAL_OPTIONS.map((option) => (
                        <Item key={option.value} value={option}>
                          {option.label}
                        </Item>
                      ))}
                    </Menu>
                  </Dropdown>
                </Field>
              </Col>
            </Row>
            <Row style={{ marginTop: '16px' }}>
              <Col>
                <Field>
                  <Checkbox
                    checked={updates}
                    onChange={(e) => setUpdates(e.target.checked)}
                  >
                    <Label>Receive product updates and tips</Label>
                  </Checkbox>
                </Field>
              </Col>
            </Row>
          </>
        )}

        <Row style={{ marginTop: '24px' }}>
          <Col>
            {step > 1 && (
              <Button
                onClick={handleBack}
                style={{ marginRight: '8px' }}
              >
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button onClick={handleNext} isPrimary>
                Next
              </Button>
            ) : (
              <Button type="submit" isPrimary>
                Complete setup
              </Button>
            )}
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default OnboardingWizardForm
