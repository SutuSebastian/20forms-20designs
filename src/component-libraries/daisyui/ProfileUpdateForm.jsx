function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="profile-first-name" className="label">
          <span className="label-text">First name</span>
        </label>
        <input
          id="profile-first-name"
          name="firstName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="profile-last-name" className="label">
          <span className="label-text">Last name</span>
        </label>
        <input
          id="profile-last-name"
          name="lastName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="profile-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="profile-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="profile-phone" className="label">
          <span className="label-text">Phone number</span>
        </label>
        <input
          id="profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="profile-bio" className="label">
          <span className="label-text">Short bio</span>
        </label>
        <textarea
          id="profile-bio"
          name="bio"
          rows="3"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Save changes
      </button>
    </form>
  )
}

export default ProfileUpdateForm
