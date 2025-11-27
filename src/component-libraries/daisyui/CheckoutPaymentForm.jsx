function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="checkout-email" className="label">
          <span className="label-text">Email for receipt</span>
        </label>
        <input
          id="checkout-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="checkout-shipping-method" className="label">
          <span className="label-text">Shipping method</span>
        </label>
        <select
          id="checkout-shipping-method"
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
      <div className="form-control">
        <label htmlFor="checkout-card-number" className="label">
          <span className="label-text">Card number</span>
        </label>
        <input
          id="checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-control">
          <label htmlFor="checkout-expiration" className="label">
            <span className="label-text">Expiration</span>
          </label>
          <input
            id="checkout-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
            inputMode="numeric"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label htmlFor="checkout-cvc" className="label">
            <span className="label-text">CVC</span>
          </label>
          <input
            id="checkout-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength="4"
            required
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="checkout-promo" className="label">
          <span className="label-text">Promo code</span>
        </label>
        <input
          id="checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Place order
      </button>
    </form>
  )
}

export default CheckoutPaymentForm
