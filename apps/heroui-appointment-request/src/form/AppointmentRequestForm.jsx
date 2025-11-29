import { Input, Button, Select, SelectItem, Textarea } from '@heroui/react'

const APPOINTMENT_TYPES = [
  { value: 'consultation', label: 'Consultation' },
  { value: 'followup', label: 'Follow-up' },
  { value: 'checkup', label: 'Check-up' },
  { value: 'procedure', label: 'Procedure' },
]

const TIME_SLOTS = [
  { value: '09:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '13:00', label: '1:00 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
]

function AppointmentRequestForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Full name"
        name="fullName"
        type="text"
        isRequired
        variant="bordered"
      />
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
      <Select
        label="Appointment type"
        name="appointmentType"
        isRequired
        variant="bordered"
        placeholder="Select a type"
      >
        {APPOINTMENT_TYPES.map((type) => (
          <SelectItem key={type.value}>{type.label}</SelectItem>
        ))}
      </Select>
      <Input
        label="Preferred date"
        name="date"
        type="date"
        isRequired
        variant="bordered"
      />
      <Select
        label="Preferred time"
        name="time"
        isRequired
        variant="bordered"
        placeholder="Select a time"
      >
        {TIME_SLOTS.map((slot) => (
          <SelectItem key={slot.value}>{slot.label}</SelectItem>
        ))}
      </Select>
      <Textarea
        label="Notes"
        name="notes"
        placeholder="Additional information or special requests"
        variant="bordered"
      />
      <Button type="submit" color="primary">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
