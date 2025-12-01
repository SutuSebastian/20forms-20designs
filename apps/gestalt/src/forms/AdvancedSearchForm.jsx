import { useState } from 'react'
import { Box, Button, Checkbox, Flex, SelectList, TextField } from 'gestalt'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sortBy, setSortBy] = useState('relevance')
  const [includeArchived, setIncludeArchived] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-search-query"
          label="Search query"
          onChange={({ value }) => setQuery(value)}
          type="text"
          value={query}
        />
        <SelectList
          id="gestalt-search-category"
          label="Category"
          onChange={({ value }) => setCategory(value)}
          value={category}
        >
          {[
            { label: 'All', value: 'all' },
            { label: 'Articles', value: 'articles' },
            { label: 'Products', value: 'products' },
            { label: 'People', value: 'people' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <TextField
          id="gestalt-search-date-from"
          label="Date from"
          onChange={({ value }) => setDateFrom(value)}
          type="date"
          value={dateFrom}
        />
        <TextField
          id="gestalt-search-date-to"
          label="Date to"
          onChange={({ value }) => setDateTo(value)}
          type="date"
          value={dateTo}
        />
        <SelectList
          id="gestalt-search-sort"
          label="Sort by"
          onChange={({ value }) => setSortBy(value)}
          value={sortBy}
        >
          {[
            { label: 'Relevance', value: 'relevance' },
            { label: 'Newest', value: 'newest' },
            { label: 'Oldest', value: 'oldest' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <Checkbox
          checked={includeArchived}
          id="gestalt-search-archived"
          label="Include archived"
          onChange={({ checked }) => setIncludeArchived(checked)}
        />
        <Box>
          <Button color="red" text="Search" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default AdvancedSearchForm
