import {
  Box,
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ChevronDownIcon,
  Textarea,
  TextareaInput,
} from '@gluestack-ui/themed'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-feedback-name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Email address</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-feedback-email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Overall rating</FormControlLabelText>
          </FormControlLabel>
          <Select>
            <SelectTrigger>
              <SelectInput placeholder="Select rating" />
              <SelectIcon as={ChevronDownIcon} mr="$3" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Excellent" value="excellent" />
                <SelectItem label="Good" value="good" />
                <SelectItem label="Average" value="average" />
                <SelectItem label="Poor" value="poor" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Comments</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput
              id="gluestack-ui-feedback-comments"
              name="comments"
              placeholder="Share your feedback..."
            />
          </Textarea>
        </FormControl>

        <Checkbox name="followUp" value="followUp">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>I would like a follow-up</CheckboxLabel>
        </Checkbox>

        <Button type="submit" action="primary">
          <ButtonText>Send feedback</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default CustomerFeedbackForm
