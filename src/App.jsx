import { useMemo, useState } from 'react'

import Layout from './components/Layout'
import PairingGrid from './components/PairingGrid'
import ReactNoCssPreview from './components/ReactNoCssPreview'
import SelectionColumn from './components/SelectionColumn'
import styles from './styles'

import AdvancedSearchForm from './component-libraries/react-no-css/AdvancedSearchForm.jsx'
import AppointmentRequestForm from './component-libraries/react-no-css/AppointmentRequestForm.jsx'
import BillingInfoForm from './component-libraries/react-no-css/BillingInfoForm.jsx'
import CheckoutPaymentForm from './component-libraries/react-no-css/CheckoutPaymentForm.jsx'
import ContactInquiryForm from './component-libraries/react-no-css/ContactInquiryForm.jsx'
import CustomerFeedbackForm from './component-libraries/react-no-css/CustomerFeedbackForm.jsx'
import EventRegistrationForm from './component-libraries/react-no-css/EventRegistrationForm.jsx'
import JobApplicationForm from './component-libraries/react-no-css/JobApplicationForm.jsx'
import NewsletterSubscriptionForm from './component-libraries/react-no-css/NewsletterSubscriptionForm.jsx'
import OnboardingWizardForm from './component-libraries/react-no-css/OnboardingWizardForm.jsx'
import OrderTrackingForm from './component-libraries/react-no-css/OrderTrackingForm.jsx'
import PasswordChangeForm from './component-libraries/react-no-css/PasswordChangeForm.jsx'
import PasswordResetForm from './component-libraries/react-no-css/PasswordResetForm.jsx'
import PrivacyConsentForm from './component-libraries/react-no-css/PrivacyConsentForm.jsx'
import ProfileUpdateForm from './component-libraries/react-no-css/ProfileUpdateForm.jsx'
import ShippingAddressForm from './component-libraries/react-no-css/ShippingAddressForm.jsx'
import SupportTicketForm from './component-libraries/react-no-css/SupportTicketForm.jsx'
import TwoFactorAuthForm from './component-libraries/react-no-css/TwoFactorAuthForm.jsx'
import UserLoginForm from './component-libraries/react-no-css/UserLoginForm.jsx'
import UserRegistrationForm from './component-libraries/react-no-css/UserRegistrationForm.jsx'

const plannedForms = [
  'User registration / sign up',
  'User login / sign in',
  'Password reset / forgot password request',
  'Two-factor authentication code entry',
  'Contact or support inquiry',
  'Newsletter or marketing subscription',
  'Profile information update',
  'Account security and password change',
  'Billing information capture',
  'Shipping address capture',
  'Checkout with payment details',
  'Order tracking lookup',
  'Appointment or booking request',
  'Event registration / RSVP',
  'Job application submission',
  'Customer feedback or satisfaction survey',
  'Support ticket submission',
  'Multi-step onboarding wizard',
  'Advanced search with filters',
  'Privacy, consent, and communication preferences',
]

const componentLibraries = [
  { name: 'MUI', directory: 'mui' },
  { name: 'Chakra UI', directory: 'chakra-ui' },
  { name: 'Ant Design', directory: 'ant-design' },
  { name: 'Fluent UI', directory: 'fluent-ui' },
  { name: 'React Bootstrap', directory: 'react-bootstrap' },
  { name: 'Semantic UI React', directory: 'semantic-ui-react' },
  { name: 'Evergreen', directory: 'evergreen' },
  { name: 'Blueprint', directory: 'blueprint' },
  { name: 'Grommet', directory: 'grommet' },
  { name: 'Carbon Design System', directory: 'carbon-design-system' },
  { name: 'Mantine', directory: 'mantine' },
  { name: 'PrimeReact', directory: 'primereact' },
  { name: 'NextUI', directory: 'nextui' },
  { name: 'Geist UI', directory: 'geist-ui' },
  { name: 'shadcn/ui', directory: 'shadcn-ui' },
  { name: 'Radix UI', directory: 'radix-ui' },
  { name: 'Headless UI', directory: 'headless-ui' },
  { name: 'daisyUI', directory: 'daisyui' },
  { name: 'Cloudscape Design System', directory: 'cloudscape-design' },
  { name: 'Shopify Polaris', directory: 'shopify-polaris' },
  { name: 'Elastic UI (EUI)', directory: 'elastic-ui' },
  { name: 'Zendesk Garden', directory: 'zendesk-garden' },
  { name: 'Base Web', directory: 'base-web' },
  { name: 'PatternFly', directory: 'patternfly' },
  { name: 'Atlassian Atlaskit', directory: 'atlassian-atlaskit' },
  { name: 'React Spectrum', directory: 'react-spectrum' },
  { name: 'Pinterest Gestalt', directory: 'gestalt' },
  { name: 'VMware Clarity', directory: 'clarity' },
  {
    name: 'Salesforce Lightning Design System React',
    directory: 'lightning-design-system-react',
  },
  { name: 'Orbit by Kiwi.com', directory: 'orbit' },
  { name: 'RSuite', directory: 'rsuite' },
  { name: 'Semi Design', directory: 'semi-design' },
  { name: 'Arco Design', directory: 'arco-design' },
  { name: 'Ionic React', directory: 'ionic-react' },
  { name: 'Braid Design System', directory: 'braid-design-system' },
  { name: 'Primer React', directory: 'primer-react' },
  { name: 'FAST Design', directory: 'fast-design' },
  { name: 'Shoelace', directory: 'shoelace' },
  { name: 'U.S. Web Design System', directory: 'uswds' },
  { name: 'Ariakit', directory: 'ariakit' },
  { name: 'Tremor', directory: 'tremor' },
  { name: 'Rebass', directory: 'rebass' },
  { name: 'React + No CSS', directory: 'react-no-css' },
]

const reactNoCssFormComponents = {
  'User registration / sign up': UserRegistrationForm,
  'User login / sign in': UserLoginForm,
  'Password reset / forgot password request': PasswordResetForm,
  'Two-factor authentication code entry': TwoFactorAuthForm,
  'Contact or support inquiry': ContactInquiryForm,
  'Newsletter or marketing subscription': NewsletterSubscriptionForm,
  'Profile information update': ProfileUpdateForm,
  'Account security and password change': PasswordChangeForm,
  'Billing information capture': BillingInfoForm,
  'Shipping address capture': ShippingAddressForm,
  'Checkout with payment details': CheckoutPaymentForm,
  'Order tracking lookup': OrderTrackingForm,
  'Appointment or booking request': AppointmentRequestForm,
  'Event registration / RSVP': EventRegistrationForm,
  'Job application submission': JobApplicationForm,
  'Customer feedback or satisfaction survey': CustomerFeedbackForm,
  'Support ticket submission': SupportTicketForm,
  'Multi-step onboarding wizard': OnboardingWizardForm,
  'Advanced search with filters': AdvancedSearchForm,
  'Privacy, consent, and communication preferences': PrivacyConsentForm,
}

function App() {
  const [selectedForms, setSelectedForms] = useState([])
  const [selectedLibraries, setSelectedLibraries] = useState([])

  const combinations = useMemo(
    () =>
      selectedForms.flatMap((form) =>
        selectedLibraries.map((library) => ({ form, library })),
      ),
    [selectedForms, selectedLibraries],
  )

  const selectedReactNoCssForms = useMemo(
    () => selectedForms.filter((form) => reactNoCssFormComponents[form]),
    [selectedForms],
  )

  const reactNoCssSelected = selectedLibraries.includes('React + No CSS')

  const toggleSelection = (value, selected, setter) => {
    const exists = selected.includes(value)
    const nextSelection = exists
      ? selected.filter((entry) => entry !== value)
      : [...selected, value]
    setter(nextSelection)
  }

  return (
    <Layout>
      <div style={styles.selectorRow}>
        <SelectionColumn
          title="Forms"
          items={plannedForms}
          selectedItems={selectedForms}
          onToggleItem={(form) => toggleSelection(form, selectedForms, setSelectedForms)}
          onSelectAll={() => setSelectedForms(plannedForms)}
          onSelectNone={() => setSelectedForms([])}
        />
        <SelectionColumn
          title="Component libraries"
          items={componentLibraries.map((entry) => entry.name)}
          selectedItems={selectedLibraries}
          onToggleItem={(library) =>
            toggleSelection(library, selectedLibraries, setSelectedLibraries)
          }
          onSelectAll={() => setSelectedLibraries(componentLibraries.map((entry) => entry.name))}
          onSelectNone={() => setSelectedLibraries([])}
          twoColumnLayout
        />
      </div>

      <PairingGrid combinations={combinations} />

      <ReactNoCssPreview
        selectedForms={selectedReactNoCssForms}
        isLibrarySelected={reactNoCssSelected}
        formComponents={reactNoCssFormComponents}
      />
    </Layout>
  )
}

export default App
