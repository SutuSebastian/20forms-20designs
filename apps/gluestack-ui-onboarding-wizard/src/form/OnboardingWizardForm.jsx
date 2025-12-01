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
  Heading,
} from '@gluestack-ui/themed'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="lg">
        <Box>
          <Heading size="sm" mb="$2">Step 1: Account</Heading>
          <VStack space="md">
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Work email</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  id="gluestack-ui-onboarding-email"
                  name="email"
                  type="email"
                  placeholder="Enter your work email"
                />
              </Input>
            </FormControl>

            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Password</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  id="gluestack-ui-onboarding-password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                />
              </Input>
            </FormControl>
          </VStack>
        </Box>

        <Box>
          <Heading size="sm" mb="$2">Step 2: Team</Heading>
          <VStack space="md">
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Team name</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  id="gluestack-ui-onboarding-team-name"
                  name="teamName"
                  type="text"
                  placeholder="Enter team name"
                />
              </Input>
            </FormControl>

            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Team size</FormControlLabelText>
              </FormControlLabel>
              <Select>
                <SelectTrigger>
                  <SelectInput placeholder="Select size" />
                  <SelectIcon as={ChevronDownIcon} mr="$3" />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="1-5" value="1-5" />
                    <SelectItem label="6-20" value="6-20" />
                    <SelectItem label="21-50" value="21-50" />
                    <SelectItem label="50+" value="50+" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>
          </VStack>
        </Box>

        <Box>
          <Heading size="sm" mb="$2">Step 3: Preferences</Heading>
          <VStack space="md">
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Primary goal</FormControlLabelText>
              </FormControlLabel>
              <Textarea>
                <TextareaInput
                  id="gluestack-ui-onboarding-goal"
                  name="goal"
                  placeholder="What do you want to achieve?"
                />
              </Textarea>
            </FormControl>

            <Checkbox name="updates" value="updates">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Send me product tips</CheckboxLabel>
            </Checkbox>
          </VStack>
        </Box>

        <HStack space="md">
          <Button
            type="button"
            variant="outline"
            onPress={() => alert('Back action placeholder')}
          >
            <ButtonText>Back</ButtonText>
          </Button>
          <Button type="submit" action="primary">
            <ButtonText>Finish setup</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}

export default OnboardingWizardForm
