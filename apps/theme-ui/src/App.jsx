import { useState, useEffect } from 'react'
import { ThemeUIProvider } from 'theme-ui'

// Import all form components
import AdvancedSearchForm from './forms/AdvancedSearchForm'
import AppointmentRequestForm from './forms/AppointmentRequestForm'
import BillingInfoForm from './forms/BillingInfoForm'
import CheckoutPaymentForm from './forms/CheckoutPaymentForm'
import ContactInquiryForm from './forms/ContactInquiryForm'
import CustomerFeedbackForm from './forms/CustomerFeedbackForm'
import EventRegistrationForm from './forms/EventRegistrationForm'
import JobApplicationForm from './forms/JobApplicationForm'
import NewsletterSubscriptionForm from './forms/NewsletterSubscriptionForm'
import OnboardingWizardForm from './forms/OnboardingWizardForm'
import OrderTrackingForm from './forms/OrderTrackingForm'
import PasswordChangeForm from './forms/PasswordChangeForm'
import PasswordResetForm from './forms/PasswordResetForm'
import PrivacyConsentForm from './forms/PrivacyConsentForm'
import ProfileUpdateForm from './forms/ProfileUpdateForm'
import ShippingAddressForm from './forms/ShippingAddressForm'
import SupportTicketForm from './forms/SupportTicketForm'
import TwoFactorAuthForm from './forms/TwoFactorAuthForm'
import UserLoginForm from './forms/UserLoginForm'
import UserRegistrationForm from './forms/UserRegistrationForm'

const FORM_COMPONENTS = {
  'advanced-search': AdvancedSearchForm,
  'appointment-request': AppointmentRequestForm,
  'billing-info': BillingInfoForm,
  'checkout-payment': CheckoutPaymentForm,
  'contact-inquiry': ContactInquiryForm,
  'customer-feedback': CustomerFeedbackForm,
  'event-registration': EventRegistrationForm,
  'job-application': JobApplicationForm,
  'newsletter-subscription': NewsletterSubscriptionForm,
  'onboarding-wizard': OnboardingWizardForm,
  'order-tracking': OrderTrackingForm,
  'password-change': PasswordChangeForm,
  'password-reset': PasswordResetForm,
  'privacy-consent': PrivacyConsentForm,
  'profile-update': ProfileUpdateForm,
  'shipping-address': ShippingAddressForm,
  'support-ticket': SupportTicketForm,
  'two-factor-auth': TwoFactorAuthForm,
  'user-login': UserLoginForm,
  'user-registration': UserRegistrationForm,
}

const lightTheme = {
  config: {
    useColorSchemeMediaQuery: false,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    border: '#ddd',
    inputBg: '#fff',
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: 'inherit',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64],
  radii: {
    default: 4,
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: 2,
    },
  },
}

const darkTheme = {
  ...lightTheme,
  colors: {
    text: '#fff',
    background: '#1a1a1a',
    primary: '#0cf',
    secondary: '#60f',
    muted: '#333',
    border: '#555',
    inputBg: '#2a2a2a',
  },
}

function App() {
  const [formId, setFormId] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('form') || 'user-login'
  })

  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      setFormId(params.get('form') || 'user-login')
      setTheme(params.get('theme') === 'dark' ? 'dark' : 'light')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme
  const FormComponent = FORM_COMPONENTS[formId] || FORM_COMPONENTS['user-login']

  return (
    <ThemeUIProvider theme={currentTheme}>
      <div
        sx={{
          padding: 3,
          bg: 'background',
          color: 'text',
          minHeight: '100vh',
        }}
        style={{
          padding: '16px',
          backgroundColor: currentTheme.colors.background,
          color: currentTheme.colors.text,
        }}
      >
        <FormComponent theme={theme} />
      </div>
    </ThemeUIProvider>
  )
}

export default App
