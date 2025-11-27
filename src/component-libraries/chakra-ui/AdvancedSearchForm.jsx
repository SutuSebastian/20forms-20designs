import { Button, FieldRoot, FieldLabel, Input, VStack } from '@chakra-ui/react'
import { Checkbox, Select } from './form-controls'
import ChakraUiProvider from './ChakraUiProvider'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <ChakraUiProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FieldRoot isRequired>
            <FieldLabel>Search query</FieldLabel>
            <Input name="query" type="text" placeholder="Enter search terms" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Category</FieldLabel>
            <Select name="category">
              <option value="all">All</option>
              <option value="articles">Articles</option>
              <option value="products">Products</option>
              <option value="people">People</option>
            </Select>
          </FieldRoot>
          <FieldRoot>
            <FieldLabel>Date from</FieldLabel>
            <Input name="dateFrom" type="date" />
          </FieldRoot>
          <FieldRoot>
            <FieldLabel>Date to</FieldLabel>
            <Input name="dateTo" type="date" />
          </FieldRoot>
          <FieldRoot isRequired>
            <FieldLabel>Sort by</FieldLabel>
            <Select name="sort">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </Select>
          </FieldRoot>
          <Checkbox name="includeArchived">Include archived</Checkbox>
          <Button type="submit" colorScheme="blue">
            Search
          </Button>
        </VStack>
      </form>
    </ChakraUiProvider>
  )
}

export default AdvancedSearchForm
