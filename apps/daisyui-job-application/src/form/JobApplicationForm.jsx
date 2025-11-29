function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-job-full-name">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="daisyui-job-full-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-job-email">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="daisyui-job-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-job-phone">
          <span className="label-text">Phone number</span>
        </label>
        <input
          id="daisyui-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-job-role">
          <span className="label-text">Role applied for</span>
        </label>
        <input
          id="daisyui-job-role"
          name="role"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-job-resume">
          <span className="label-text">Resume link</span>
        </label>
        <input
          id="daisyui-job-resume"
          name="resume"
          type="url"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-job-cover-letter">
          <span className="label-text">Cover letter</span>
        </label>
        <textarea
          id="daisyui-job-cover-letter"
          name="coverLetter"
          rows="4"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="updates" type="checkbox" className="checkbox" />
          <span className="label-text">
            Keep me informed about future roles
          </span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit application
      </button>
    </form>
  )
}

export default JobApplicationForm
