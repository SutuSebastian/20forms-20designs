import * as Ariakit from '@ariakit/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-order-tracking-number" className="label">
          Order number
        </label>
        <input
          id="ariakit-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-order-tracking-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-order-tracking-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-order-tracking-postal" className="label">
          Postal code
        </label>
        <input
          id="ariakit-order-tracking-postal"
          name="postalCode"
          type="text"
          className="input"
          required
        />
      </div>
      <Ariakit.Button type="submit" className="button button-primary">
        Find order
      </Ariakit.Button>
    </form>
  )
}

export default OrderTrackingForm
