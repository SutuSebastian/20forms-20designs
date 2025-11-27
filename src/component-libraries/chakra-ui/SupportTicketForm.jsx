import {
  Button,
  FieldRoot,
  FieldHelperText,
  FieldLabel,
  FieldsetLegend,
  FieldsetRoot,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import ChakraUiProvider from './ChakraUiProvider'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Subject</FieldLabel>
            <Input name="subject" type="text" placeholder="Brief description" />
          </FieldRoot>
          <FieldsetRoot isRequired>
            <FieldsetLegend>Priority</FieldsetLegend>
            <RadioGroup name="priority">
              <Stack direction="row">
                <Radio value="low">Low</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="high">High</Radio>
              </Stack>
            </RadioGroup>
          </FieldsetRoot>
          <FieldRoot isRequired>
            <FieldLabel>Issue description</FieldLabel>
            <Textarea
              name="description"
              placeholder="Describe your issue"
              rows={4}
            />
          </FieldRoot>
          <FieldRoot>
            <FieldLabel>Attachments</FieldLabel>
            <Input
              name="attachments"
              type="file"
              multiple
              p={1}
              sx={{
                '::file-selector-button': {
                  height: '100%',
                  mr: 2,
                },
              }}
            />
            <FieldHelperText>Optional file attachments</FieldHelperText>
          </FieldRoot>
          <Button type="submit" colorScheme="blue">
            Submit ticket
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default SupportTicketForm
