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

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Search query</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-search-query"
              name="query"
              type="text"
              placeholder="Enter search terms..."
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Category</FormControlLabelText>
          </FormControlLabel>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectInput placeholder="Select category" />
              <SelectIcon as={ChevronDownIcon} mr="$3" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="All" value="all" />
                <SelectItem label="Articles" value="articles" />
                <SelectItem label="Products" value="products" />
                <SelectItem label="People" value="people" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Date from</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-search-date-from"
              name="dateFrom"
              type="date"
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Date to</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-search-date-to"
              name="dateTo"
              type="date"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Sort by</FormControlLabelText>
          </FormControlLabel>
          <Select defaultValue="relevance">
            <SelectTrigger>
              <SelectInput placeholder="Select sort order" />
              <SelectIcon as={ChevronDownIcon} mr="$3" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Relevance" value="relevance" />
                <SelectItem label="Newest" value="newest" />
                <SelectItem label="Oldest" value="oldest" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>

        <Checkbox name="includeArchived" value="includeArchived">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Include archived</CheckboxLabel>
        </Checkbox>

        <Button type="submit" action="primary">
          <ButtonText>Search</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default AdvancedSearchForm
