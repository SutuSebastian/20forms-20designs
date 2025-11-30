import * as Ariakit from '@ariakit/react'

function PrivacyConsentForm() {
  const essentialCheckbox = Ariakit.useCheckboxStore({ defaultValue: true })
  const analyticsCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })
  const marketingCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })
  const thirdPartyCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <fieldset className="fieldset">
        <legend className="legend">Essential cookies</legend>
        <p className="description">
          Required for the website to function properly.
        </p>
        <div className="checkbox-wrapper">
          <Ariakit.Checkbox
            store={essentialCheckbox}
            className="checkbox"
            disabled
          >
            <Ariakit.CheckboxCheck className="checkbox-check" />
          </Ariakit.Checkbox>
          <label className="label">Enable essential cookies</label>
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="legend">Analytics cookies</legend>
        <p className="description">
          Help us understand how visitors interact with our website.
        </p>
        <div className="checkbox-wrapper">
          <Ariakit.Checkbox store={analyticsCheckbox} className="checkbox">
            <Ariakit.CheckboxCheck className="checkbox-check" />
          </Ariakit.Checkbox>
          <label className="label">Enable analytics cookies</label>
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="legend">Marketing cookies</legend>
        <p className="description">
          Used to deliver personalized advertisements.
        </p>
        <div className="checkbox-wrapper">
          <Ariakit.Checkbox store={marketingCheckbox} className="checkbox">
            <Ariakit.CheckboxCheck className="checkbox-check" />
          </Ariakit.Checkbox>
          <label className="label">Enable marketing cookies</label>
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="legend">Third-party cookies</legend>
        <p className="description">
          Allow third-party services to collect data.
        </p>
        <div className="checkbox-wrapper">
          <Ariakit.Checkbox store={thirdPartyCheckbox} className="checkbox">
            <Ariakit.CheckboxCheck className="checkbox-check" />
          </Ariakit.Checkbox>
          <label className="label">Enable third-party cookies</label>
        </div>
      </fieldset>
      <Ariakit.Button type="submit" className="button button-primary">
        Save preferences
      </Ariakit.Button>
    </form>
  )
}

export default PrivacyConsentForm
