import { Button, Input, Label, YStack, TextArea, Select } from 'tamagui'
import { useState } from 'react'

function AppointmentRequestForm() {
  const [appointmentType, setAppointmentType] = useState('')
  const [timeSlot, setTimeSlot] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Full name"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email address"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            inputMode="tel"
            placeholder="Phone number"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="appointmentType">Appointment type</Label>
          <Select
            id="appointmentType"
            value={appointmentType}
            onValueChange={setAppointmentType}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select appointment type" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="consultation">
                <Select.ItemText>Consultation</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="followup">
                <Select.ItemText>Follow-up</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="checkup">
                <Select.ItemText>Check-up</Select.ItemText>
              </Select.Item>
              <Select.Item index={3} value="other">
                <Select.ItemText>Other</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="preferredDate">Preferred date</Label>
          <Input
            id="preferredDate"
            name="preferredDate"
            placeholder="YYYY-MM-DD"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="timeSlot">Preferred time</Label>
          <Select id="timeSlot" value={timeSlot} onValueChange={setTimeSlot}>
            <Select.Trigger>
              <Select.Value placeholder="Select time slot" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item index={0} value="morning">
                <Select.ItemText>Morning (9am - 12pm)</Select.ItemText>
              </Select.Item>
              <Select.Item index={1} value="afternoon">
                <Select.ItemText>Afternoon (12pm - 5pm)</Select.ItemText>
              </Select.Item>
              <Select.Item index={2} value="evening">
                <Select.ItemText>Evening (5pm - 8pm)</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="notes">Additional notes</Label>
          <TextArea
            id="notes"
            name="notes"
            placeholder="Any additional information"
            rows={3}
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Request appointment
        </Button>
      </YStack>
    </form>
  )
}

export default AppointmentRequestForm
