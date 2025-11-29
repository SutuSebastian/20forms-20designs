import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-ticket-subject">Subject</Label>
        <Input id="shadcn-ticket-subject" name="subject" type="text" required />
      </div>
      <div className="space-y-2">
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium">Priority</legend>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                id="shadcn-ticket-priority-low"
                type="radio"
                name="priority"
                value="low"
                required
                className="h-4 w-4"
              />
              Low
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                id="shadcn-ticket-priority-medium"
                type="radio"
                name="priority"
                value="medium"
                className="h-4 w-4"
              />
              Medium
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                id="shadcn-ticket-priority-high"
                type="radio"
                name="priority"
                value="high"
                className="h-4 w-4"
              />
              High
            </label>
          </div>
        </fieldset>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-ticket-description">Issue description</Label>
        <Textarea
          id="shadcn-ticket-description"
          name="description"
          rows="4"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-ticket-attachments">Attachments</Label>
        <Input
          id="shadcn-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="cursor-pointer"
        />
      </div>
      <Button type="submit">Submit ticket</Button>
    </form>
  )
}

export default SupportTicketForm
