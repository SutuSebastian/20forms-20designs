import { Button, Input, Checkbox, Select, DatePicker, Radio,  InputNumber, TimePicker, Switch, Form } from '@arco-design/web-react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-profile-first-name">First name</label>
        <Input id="nocss-profile-first-name"
          name="firstName"
          type="text"
          required
         style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-profile-last-name">Last name</label>
        <Input id="nocss-profile-last-name"
          name="lastName"
          type="text"
          required
         style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-profile-email">Email address</label>
        <Input id="nocss-profile-email" name="email" type="email" required  style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-profile-phone">Phone number</label>
        <Input id="nocss-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
         style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }} htmlFor="nocss-profile-bio">Short bio</label>
        <Input.TextArea id="nocss-profile-bio" name="bio" rows="3" required  style={{ width: '100%' }} />
      </div>
      <Button type="primary" htmlType="submit">Save changes</Button>
      </div>
    </form>
  )
}

export default ProfileUpdateForm
