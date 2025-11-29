import { useState } from 'react'
import { Box, Button, Flex, SelectList, TextField } from 'gestalt'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sortBy, setSortBy] = useState('')

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
          placeholder="Enter search terms..."
          type="text"
          value={query}
        />
        <SelectList
          id="gestalt-search-category"
          label="Category"
          onChange={({ value }) => setCategory(value)}
          placeholder="All categories"
          value={category}
        >
          {[
            { label: 'All categories', value: '' },
            { label: 'Products', value: 'products' },
            { label: 'Articles', value: 'articles' },
            { label: 'Users', value: 'users' },
            { label: 'Documentation', value: 'docs' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value || 'all'} label={label} value={value} />
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
          placeholder="Relevance"
          value={sortBy}
        >
          {[
            { label: 'Relevance', value: 'relevance' },
            { label: 'Date (newest first)', value: 'date-desc' },
            { label: 'Date (oldest first)', value: 'date-asc' },
            { label: 'Popularity', value: 'popularity' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <Box>
          <Button color="red" text="Search" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default AdvancedSearchForm
