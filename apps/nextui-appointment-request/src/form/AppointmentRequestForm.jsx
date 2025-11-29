import { Input, Button, Textarea, Select, SelectItem } from '@nextui-org/react'

const services = [
  { key: 'consultation', label: 'General Consultation' },
  { key: 'followup', label: 'Follow-up Visit' },
  { key: 'checkup', label: 'Annual Checkup' },
  { key: 'specialist', label: 'Specialist Referral' },
]

const timeSlots = [
  { key: '9am', label: '9:00 AM' },
  { key: '10am', label: '10:00 AM' },
  { key: '11am', label: '11:00 AM' },
  { key: '1pm', label: '1:00 PM' },
  { key: '2pm', label: '2:00 PM' },
  { key: '3pm', label: '3:00 PM' },
  { key: '4pm', label: '4:00 PM' },
]

function AppointmentRequestForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input label="Full name" name="name" isRequired variant="bordered" />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Input
        label="Phone number"
        name="phone"
        type="tel"
        isRequired
        variant="bordered"
      />
      <Select label="Service type" name="service" isRequired variant="bordered">
        {services.map((s) => (
          <SelectItem key={s.key}>{s.label}</SelectItem>
        ))}
      </Select>
      <Input
        label="Preferred date"
        name="date"
        type="date"
        isRequired
        variant="bordered"
      />
      <Select label="Preferred time" name="time" isRequired variant="bordered">
        {timeSlots.map((t) => (
          <SelectItem key={t.key}>{t.label}</SelectItem>
        ))}
      </Select>
      <Textarea
        label="Additional notes (optional)"
        name="notes"
        variant="bordered"
        minRows={3}
      />
      <Button type="submit" color="primary">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
