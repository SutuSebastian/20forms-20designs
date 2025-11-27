function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="order-tracking-number" className="label">
          <span className="label-text">Order number</span>
        </label>
        <input
          id="order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="order-tracking-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="order-tracking-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="order-tracking-postal" className="label">
          <span className="label-text">Postal code</span>
        </label>
        <input
          id="order-tracking-postal"
          name="postalCode"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Find order
      </button>
    </form>
  )
}

export default OrderTrackingForm
