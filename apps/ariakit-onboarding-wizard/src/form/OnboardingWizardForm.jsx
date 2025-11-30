import * as Ariakit from '@ariakit/react'

function OnboardingWizardForm() {
  const termsCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <section>
        <h3 className="section-title">Personal information</h3>
        <div className="form-field">
          <label htmlFor="ariakit-onboarding-fullname" className="label">
            Full name
          </label>
          <input
            id="ariakit-onboarding-fullname"
            name="fullName"
            type="text"
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="ariakit-onboarding-email" className="label">
            Email address
          </label>
          <input
            id="ariakit-onboarding-email"
            name="email"
            type="email"
            className="input"
            required
          />
        </div>
      </section>
      <section>
        <h3 className="section-title">Company details</h3>
        <div className="form-field">
          <label htmlFor="ariakit-onboarding-companyname" className="label">
            Company name
          </label>
          <input
            id="ariakit-onboarding-companyname"
            name="companyName"
            type="text"
            className="input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="ariakit-onboarding-teamsize" className="label">
            Team size
          </label>
          <select
            id="ariakit-onboarding-teamsize"
            name="teamSize"
            className="select"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select team size
            </option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201+">201+</option>
          </select>
        </div>
      </section>
      <section>
        <h3 className="section-title">Preferences</h3>
        <div className="form-field">
          <label htmlFor="ariakit-onboarding-role" className="label">
            Role
          </label>
          <select
            id="ariakit-onboarding-role"
            name="role"
            className="select"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="checkbox-wrapper">
          <Ariakit.Checkbox store={termsCheckbox} className="checkbox" required>
            <Ariakit.CheckboxCheck className="checkbox-check" />
          </Ariakit.Checkbox>
          <label className="label">I agree to the Terms of Service</label>
        </div>
      </section>
      <Ariakit.Button type="submit" className="button button-primary">
        Complete onboarding
      </Ariakit.Button>
    </form>
  )
}

export default OnboardingWizardForm
