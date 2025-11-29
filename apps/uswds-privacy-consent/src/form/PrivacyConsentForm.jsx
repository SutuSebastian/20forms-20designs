import { useState } from 'react'
import { Form, FormGroup, Checkbox, Button } from '@trussworks/react-uswds'

function PrivacyConsentForm({ theme }) {
  const [consents, setConsents] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    thirdParty: false,
  })

  const handleConsentChange = (key) => {
    if (key === 'essential') return
    setConsents((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleAcceptAll = () => {
    setConsents({
      essential: true,
      analytics: true,
      marketing: true,
      thirdParty: true,
    })
  }

  const handleRejectAll = () => {
    setConsents({
      essential: true,
      analytics: false,
      marketing: false,
      thirdParty: false,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  const consentOptions = [
    {
      key: 'essential',
      label: 'Essential cookies (required)',
      description:
        'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
    },
    {
      key: 'analytics',
      label: 'Analytics cookies',
      description:
        'These cookies allow us to count visits and traffic sources to measure and improve site performance.',
      required: false,
    },
    {
      key: 'marketing',
      label: 'Marketing cookies',
      description:
        'These cookies may be set by our advertising partners to build a profile of your interests.',
      required: false,
    },
    {
      key: 'thirdParty',
      label: 'Third-party cookies',
      description:
        'These cookies are set by third-party services that appear on our pages.',
      required: false,
    },
  ]

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '16px' }}>
        <p style={theme === 'dark' ? { color: '#f0f0f0' } : undefined}>
          We use cookies to enhance your browsing experience and analyze our
          traffic. Please select your cookie preferences below.
        </p>
      </div>

      {consentOptions.map((option) => (
        <FormGroup key={option.key}>
          <Checkbox
            id={`uswds-privacy-${option.key}`}
            name={option.key}
            checked={consents[option.key]}
            onChange={() => handleConsentChange(option.key)}
            disabled={option.required}
            label={option.label}
          />
          <p
            style={{
              fontSize: '14px',
              marginLeft: '28px',
              marginTop: '4px',
              color: theme === 'dark' ? '#a9aeb1' : '#71767a',
            }}
          >
            {option.description}
          </p>
        </FormGroup>
      ))}

      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginTop: '16px',
          flexWrap: 'wrap',
        }}
      >
        <Button type="submit">Save preferences</Button>
        <Button type="button" onClick={handleAcceptAll} outline>
          Accept all
        </Button>
        <Button type="button" onClick={handleRejectAll} outline>
          Reject all
        </Button>
      </div>
    </Form>
  )
}

export default PrivacyConsentForm
