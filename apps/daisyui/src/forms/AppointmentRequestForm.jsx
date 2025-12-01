function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-appointment-name">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="daisyui-appointment-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-appointment-email">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="daisyui-appointment-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-appointment-date">
          <span className="label-text">Preferred date</span>
        </label>
        <input
          id="daisyui-appointment-date"
          name="date"
          type="date"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-appointment-time">
          <span className="label-text">Preferred time</span>
        </label>
        <input
          id="daisyui-appointment-time"
          name="time"
          type="time"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-appointment-reason">
          <span className="label-text">Reason for visit</span>
        </label>
        <textarea
          id="daisyui-appointment-reason"
          name="reason"
          rows="3"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Request appointment
      </button>
    </form>
  )
}

export default AppointmentRequestForm
