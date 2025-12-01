import { InputField, Button, Stack, Select, Checkbox } from '@kiwicom/orbit-components'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const categoryOptions = [
    { label: 'All', value: 'all' },
    { label: 'Articles', value: 'articles' },
    { label: 'Products', value: 'products' },
    { label: 'People', value: 'people' },
  ]

  const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Search query" name="query" type="text" required />
        <Select label="Category" name="category" options={categoryOptions} />
        <InputField label="Date from" name="dateFrom" type="date" />
        <InputField label="Date to" name="dateTo" type="date" />
        <Select label="Sort by" name="sort" options={sortOptions} />
        <Checkbox label="Include archived" name="includeArchived" />
        <Button type="primary" submit>Search</Button>
      </Stack>
    </form>
  )
}

export default AdvancedSearchForm
