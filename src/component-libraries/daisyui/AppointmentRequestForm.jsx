function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="appointment-name" className="label">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="appointment-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="appointment-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="appointment-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="appointment-date" className="label">
          <span className="label-text">Preferred date</span>
        </label>
        <input
          id="appointment-date"
          name="date"
          type="date"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="appointment-time" className="label">
          <span className="label-text">Preferred time</span>
        </label>
        <input
          id="appointment-time"
          name="time"
          type="time"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="appointment-reason" className="label">
          <span className="label-text">Reason for visit</span>
        </label>
        <textarea
          id="appointment-reason"
          name="reason"
          rows="3"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Request appointment
      </button>
    </form>
  )
}

export default AppointmentRequestForm
