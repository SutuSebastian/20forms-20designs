function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-checkout-email">
          <span className="label-text">Email for receipt</span>
        </label>
        <input
          id="daisyui-checkout-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-checkout-shipping-method">
          <span className="label-text">Shipping method</span>
        </label>
        <select
          id="daisyui-checkout-shipping-method"
          name="shippingMethod"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-checkout-card-number">
          <span className="label-text">Card number</span>
        </label>
        <input
          id="daisyui-checkout-card-number"
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
        <label className="label" htmlFor="daisyui-checkout-expiration">
          <span className="label-text">Expiration</span>
        </label>
        <input
          id="daisyui-checkout-expiration"
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
        <label className="label" htmlFor="daisyui-checkout-cvc">
          <span className="label-text">CVC</span>
        </label>
        <input
          id="daisyui-checkout-cvc"
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
        <label className="label" htmlFor="daisyui-checkout-promo">
          <span className="label-text">Promo code</span>
        </label>
        <input
          id="daisyui-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Place order
      </button>
    </form>
  )
}

export default CheckoutPaymentForm
