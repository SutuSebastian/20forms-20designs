import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function AdvancedSearchForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    document.getElementById('uswds-advanced-search-form').reset()
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  const categories = [
    'All categories',
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Sports',
    'Toys',
  ]

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' },
  ]

  return (
    <Form id="uswds-advanced-search-form" onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-search-keywords"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Keywords
        </Label>
        <TextInput
          id="uswds-search-keywords"
          name="keywords"
          type="text"
          placeholder="Enter search terms..."
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-category"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Category
        </Label>
        <Select
          id="uswds-search-category"
          name="category"
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-min-price"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Minimum price
        </Label>
        <TextInput
          id="uswds-search-min-price"
          name="minPrice"
          type="number"
          min="0"
          placeholder="0"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-max-price"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Maximum price
        </Label>
        <TextInput
          id="uswds-search-max-price"
          name="maxPrice"
          type="number"
          min="0"
          placeholder="No limit"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-date-from"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Date from
        </Label>
        <TextInput
          id="uswds-search-date-from"
          name="dateFrom"
          type="date"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-date-to"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Date to
        </Label>
        <TextInput
          id="uswds-search-date-to"
          name="dateTo"
          type="date"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-sort"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Sort by
        </Label>
        <Select
          id="uswds-search-sort"
          name="sortBy"
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-search-in-stock"
          name="inStock"
          label="In stock only"
        />
      </FormGroup>
      <FormGroup>
        <Checkbox id="uswds-search-sale" name="onSale" label="On sale" />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-search-free-shipping"
          name="freeShipping"
          label="Free shipping"
        />
      </FormGroup>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button type="submit">Search</Button>
        <Button type="button" onClick={handleReset} outline>
          Reset filters
        </Button>
      </div>
    </Form>
  )
}

export default AdvancedSearchForm
