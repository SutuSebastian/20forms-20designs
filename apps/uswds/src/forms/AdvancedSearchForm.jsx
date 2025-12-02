import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="uswds-search-query">Search query</Label>
        <TextInput id="uswds-search-query" name="query" type="text" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-search-category">Category</Label>
        <Select id="uswds-search-category" name="category" required>
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-search-date-from">Date from</Label>
        <TextInput id="uswds-search-date-from" name="dateFrom" type="date" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-search-date-to">Date to</Label>
        <TextInput id="uswds-search-date-to" name="dateTo" type="date" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="uswds-search-sort">Sort by</Label>
        <Select id="uswds-search-sort" name="sort" required>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-search-archived"
          name="includeArchived"
          label="Include archived"
        />
      </FormGroup>
      <Button type="submit">Search</Button>
    </Form>
  )
}

export default AdvancedSearchForm
