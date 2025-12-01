import { Form, Button, SelectPicker, Checkbox, DatePicker } from 'rsuite'

const categoryData = [
  { label: 'All', value: 'all' },
  { label: 'Articles', value: 'articles' },
  { label: 'Products', value: 'products' },
  { label: 'People', value: 'people' },
]

const sortData = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
]

function AdvancedSearchForm() {
  const handleSubmit = () => {
    alert('Search submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="query">
        <Form.ControlLabel>Search query</Form.ControlLabel>
        <Form.Control name="query" type="text" required />
      </Form.Group>

      <Form.Group controlId="category">
        <Form.ControlLabel>Category</Form.ControlLabel>
        <Form.Control
          name="category"
          accepter={SelectPicker}
          data={categoryData}
          defaultValue="all"
          block
          searchable={false}
        />
      </Form.Group>

      <Form.Group controlId="dateFrom">
        <Form.ControlLabel>Date from</Form.ControlLabel>
        <Form.Control name="dateFrom" accepter={DatePicker} block />
      </Form.Group>

      <Form.Group controlId="dateTo">
        <Form.ControlLabel>Date to</Form.ControlLabel>
        <Form.Control name="dateTo" accepter={DatePicker} block />
      </Form.Group>

      <Form.Group controlId="sort">
        <Form.ControlLabel>Sort by</Form.ControlLabel>
        <Form.Control
          name="sort"
          accepter={SelectPicker}
          data={sortData}
          defaultValue="relevance"
          block
          searchable={false}
        />
      </Form.Group>

      <Form.Group controlId="includeArchived">
        <Checkbox name="includeArchived">Include archived</Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Search
        </Button>
      </Form.Group>
    </Form>
  )
}

export default AdvancedSearchForm
