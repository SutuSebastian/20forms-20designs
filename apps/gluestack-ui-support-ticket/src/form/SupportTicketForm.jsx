import {
  Box,
  VStack,
  HStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
  CircleIcon,
  Textarea,
  TextareaInput,
  Text,
} from '@gluestack-ui/themed'
import { useState } from 'react'

function SupportTicketForm() {
  const [priority, setPriority] = useState('low')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Subject</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-ticket-subject"
              name="subject"
              type="text"
              placeholder="Enter ticket subject"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <Text fontWeight="$medium" mb="$2">
            Priority
          </Text>
          <RadioGroup value={priority} onChange={setPriority}>
            <VStack space="sm">
              <Radio value="low">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Low</RadioLabel>
              </Radio>
              <Radio value="medium">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Medium</RadioLabel>
              </Radio>
              <Radio value="high">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>High</RadioLabel>
              </Radio>
            </VStack>
          </RadioGroup>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Issue description</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput
              id="gluestack-ui-ticket-description"
              name="description"
              placeholder="Describe your issue..."
            />
          </Textarea>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Attachments</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-ticket-attachments"
              name="attachments"
              type="text"
              placeholder="Paste file links here..."
            />
          </Input>
        </FormControl>

        <Button type="submit" action="primary">
          <ButtonText>Submit ticket</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default SupportTicketForm
