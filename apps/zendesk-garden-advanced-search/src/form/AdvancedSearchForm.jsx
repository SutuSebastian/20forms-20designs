import { useState, useCallback } from 'react'
import { Field, Label, Input, Checkbox } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import {
  Dropdown,
  Trigger,
  Select,
  Menu,
  Item,
} from '@zendeskgarden/react-dropdowns'

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All Categories' },
  { value: 'articles', label: 'Articles' },
  { value: 'products', label: 'Products' },
  { value: 'users', label: 'Users' },
  { value: 'documents', label: 'Documents' },
]

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'date-desc', label: 'Date (Newest first)' },
  { value: 'date-asc', label: 'Date (Oldest first)' },
  { value: 'title-asc', label: 'Title (A-Z)' },
  { value: 'title-desc', label: 'Title (Z-A)' },
]

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0])
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0])
  const [includeArchived, setIncludeArchived] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Search submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Search query</Label>
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter keywords..."
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Category</Label>
              <Dropdown
                selectedItem={category}
                onSelect={(item) => setCategory(item)}
                downshiftProps={{ itemToString: (item) => item?.label || '' }}
              >
                <Trigger>
                  <Select>{category.label}</Select>
                </Trigger>
                <Menu>
                  {CATEGORY_OPTIONS.map((option) => (
                    <Item key={option.value} value={option}>
                      {option.label}
                    </Item>
                  ))}
                </Menu>
              </Dropdown>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col sm={6}>
            <Field>
              <Label>Date from</Label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </Field>
          </Col>
          <Col sm={6}>
            <Field>
              <Label>Date to</Label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Sort by</Label>
              <Dropdown
                selectedItem={sortBy}
                onSelect={(item) => setSortBy(item)}
                downshiftProps={{ itemToString: (item) => item?.label || '' }}
              >
                <Trigger>
                  <Select>{sortBy.label}</Select>
                </Trigger>
                <Menu>
                  {SORT_OPTIONS.map((option) => (
                    <Item key={option.value} value={option}>
                      {option.label}
                    </Item>
                  ))}
                </Menu>
              </Dropdown>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Checkbox
                checked={includeArchived}
                onChange={(e) => setIncludeArchived(e.target.checked)}
              >
                <Label>Include archived items</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Search
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default AdvancedSearchForm
