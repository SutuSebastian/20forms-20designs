function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="ticket-subject" className="label">
          <span className="label-text">Subject</span>
        </label>
        <input
          id="ticket-subject"
          name="subject"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <fieldset className="border p-4 rounded-lg">
        <legend className="text-lg font-bold px-2">Priority</legend>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input
              id="ticket-priority-low"
              type="radio"
              name="priority"
              value="low"
              required
              className="radio"
            />
            <span className="label-text">Low</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input
              id="ticket-priority-medium"
              type="radio"
              name="priority"
              value="medium"
              className="radio"
            />
            <span className="label-text">Medium</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input
              id="ticket-priority-high"
              type="radio"
              name="priority"
              value="high"
              className="radio"
            />
            <span className="label-text">High</span>
          </label>
        </div>
      </fieldset>
      <div className="form-control">
        <label htmlFor="ticket-description" className="label">
          <span className="label-text">Issue description</span>
        </label>
        <textarea
          id="ticket-description"
          name="description"
          rows="4"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="ticket-attachments" className="label">
          <span className="label-text">Attachments</span>
        </label>
        <input
          id="ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="file-input file-input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Submit ticket
      </button>
    </form>
  )
}

export default SupportTicketForm
