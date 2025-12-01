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
} from '@gluestack-ui/themed'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Full name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-event-name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Email address</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-event-email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Ticket type</FormControlLabelText>
          </FormControlLabel>
          <Select>
            <SelectTrigger>
              <SelectInput placeholder="Select ticket" />
              <SelectIcon as={ChevronDownIcon} mr="$3" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="General admission" value="general" />
                <SelectItem label="VIP" value="vip" />
                <SelectItem label="Student" value="student" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Number of guests</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-event-guests"
              name="guestCount"
              type="number"
              placeholder="0"
            />
          </Input>
        </FormControl>

        <Checkbox name="newsletter" value="newsletter">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Notify me about future events</CheckboxLabel>
        </Checkbox>

        <Button type="submit" action="primary">
          <ButtonText>Register</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default EventRegistrationForm
