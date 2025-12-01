function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-order-tracking-number">
          <span className="label-text">Order number</span>
        </label>
        <input
          id="daisyui-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-order-tracking-email">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="daisyui-order-tracking-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-order-tracking-postal">
          <span className="label-text">Postal code</span>
        </label>
        <input
          id="daisyui-order-tracking-postal"
          name="postalCode"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Find order
      </button>
    </form>
  )
}

export default OrderTrackingForm
