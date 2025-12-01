import { useState, useCallback } from 'react'
import { Field, Input, Checkbox, Select } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid } from '@zendeskgarden/react-grid'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sortBy, setSortBy] = useState('relevance')
  const [includeArchived, setIncludeArchived] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Search submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Field>
              <Field.Label>Search query</Field.Label>
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Category</Field.Label>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="all">All</option>
                <option value="articles">Articles</option>
                <option value="products">Products</option>
                <option value="people">People</option>
              </Select>
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col sm={6}>
            <Field>
              <Field.Label>Date from</Field.Label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </Field>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Field>
              <Field.Label>Date to</Field.Label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Sort by</Field.Label>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                required
              >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </Select>
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Checkbox
                checked={includeArchived}
                onChange={(e) => setIncludeArchived(e.target.checked)}
              >
                <Field.Label>Include archived</Field.Label>
              </Checkbox>
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <Button type="submit" isPrimary>
              Search
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </form>
  )
}

export default AdvancedSearchForm
