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
  Textarea,
  TextareaInput,
} from '@gluestack-ui/themed'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
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
              id="gluestack-ui-job-full-name"
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
              id="gluestack-ui-job-email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Phone number</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-job-phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Role applied for</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-job-role"
              name="role"
              type="text"
              placeholder="Enter position title"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Resume link</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-job-resume"
              name="resume"
              type="url"
              placeholder="https://..."
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Cover letter</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput
              id="gluestack-ui-job-cover-letter"
              name="coverLetter"
              placeholder="Write your cover letter..."
            />
          </Textarea>
        </FormControl>

        <Checkbox name="updates" value="updates">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Keep me informed about future roles</CheckboxLabel>
        </Checkbox>

        <Button type="submit" action="primary">
          <ButtonText>Submit application</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default JobApplicationForm
