import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

const categoryOptions = [
  { value: '', text: 'All categories' },
  { value: 'electronics', text: 'Electronics' },
  { value: 'clothing', text: 'Clothing' },
  { value: 'books', text: 'Books' },
  { value: 'home', text: 'Home & Garden' },
]

const sortOptions = [
  { value: 'relevance', text: 'Relevance' },
  { value: 'date-desc', text: 'Newest first' },
  { value: 'date-asc', text: 'Oldest first' },
  { value: 'price-asc', text: 'Price: Low to High' },
  { value: 'price-desc', text: 'Price: High to Low' },
]

function AdvancedSearchForm() {
  const [keywords, setKeywords] = useState('')
  const [category, setCategory] = useState('')
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [sortBy, setSortBy] = useState('relevance')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [includeDescription, setIncludeDescription] = useState(true)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Search submitted!')
  }, [])

  const handleClear = useCallback(() => {
    setKeywords('')
    setCategory('')
    setPriceMin('')
    setPriceMax('')
    setSortBy('relevance')
    setInStockOnly(false)
    setIncludeDescription(true)
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Keywords">
        <EuiFieldText
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Enter search terms..."
        />
      </EuiFormRow>

      <EuiFormRow label="Category">
        <EuiSelect
          options={categoryOptions}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </EuiFormRow>

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="Min price">
            <EuiFieldText
              type="number"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              placeholder="0"
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Max price">
            <EuiFieldText
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              placeholder="1000"
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFormRow label="Sort by">
        <EuiSelect
          options={sortOptions}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="inStockOnly"
          label="In stock only"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="includeDescription"
          label="Search in descriptions"
          checked={includeDescription}
          onChange={(e) => setIncludeDescription(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiButton type="submit" fill>
              Search
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleClear}>Clear</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFormRow>
    </EuiForm>
  )
}

export default AdvancedSearchForm
