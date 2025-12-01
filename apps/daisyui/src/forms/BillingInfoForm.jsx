function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-billing-name">
          <span className="label-text">Name on card</span>
        </label>
        <input
          id="daisyui-billing-name"
          name="cardName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-billing-card-number">
          <span className="label-text">Card number</span>
        </label>
        <input
          id="daisyui-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-billing-expiration">
          <span className="label-text">Expiration date</span>
        </label>
        <input
          id="daisyui-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-billing-cvc">
          <span className="label-text">Security code</span>
        </label>
        <input
          id="daisyui-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-billing-address">
          <span className="label-text">Billing address</span>
        </label>
        <input
          id="daisyui-billing-address"
          name="address"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-billing-country">
          <span className="label-text">Country</span>
        </label>
        <select
          id="daisyui-billing-country"
          name="country"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save billing details
      </button>
    </form>
  )
}

export default BillingInfoForm
