function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-feedback-name">
          <span className="label-text">Name</span>
        </label>
        <input
          id="daisyui-feedback-name"
          name="name"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-feedback-email">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="daisyui-feedback-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-feedback-rating">
          <span className="label-text">Overall rating</span>
        </label>
        <select
          id="daisyui-feedback-rating"
          name="rating"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-feedback-comments">
          <span className="label-text">Comments</span>
        </label>
        <textarea
          id="daisyui-feedback-comments"
          name="comments"
          rows="4"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="followUp" type="checkbox" className="checkbox" />
          <span className="label-text">I would like a follow-up</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Send feedback
      </button>
    </form>
  )
}

export default CustomerFeedbackForm
