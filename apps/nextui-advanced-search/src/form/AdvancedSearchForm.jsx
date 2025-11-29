import { useState } from 'react'
import {
  Input,
  Button,
  Select,
  SelectItem,
  Checkbox,
  CheckboxGroup,
  Slider,
} from '@nextui-org/react'

const categories = [
  { key: 'all', label: 'All Categories' },
  { key: 'electronics', label: 'Electronics' },
  { key: 'clothing', label: 'Clothing' },
  { key: 'home', label: 'Home & Garden' },
  { key: 'books', label: 'Books' },
]

const sortOptions = [
  { key: 'relevance', label: 'Relevance' },
  { key: 'price-low', label: 'Price: Low to High' },
  { key: 'price-high', label: 'Price: High to Low' },
  { key: 'newest', label: 'Newest First' },
  { key: 'rating', label: 'Highest Rated' },
]

const conditions = [
  { key: 'new', label: 'New' },
  { key: 'used', label: 'Used' },
  { key: 'refurbished', label: 'Refurbished' },
]

function AdvancedSearchForm() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    setPriceRange([0, 1000])
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Search keywords"
        name="keywords"
        placeholder="Enter search terms..."
        variant="bordered"
      />
      <Select
        label="Category"
        name="category"
        variant="bordered"
        defaultSelectedKeys={['all']}
      >
        {categories.map((c) => (
          <SelectItem key={c.key}>{c.label}</SelectItem>
        ))}
      </Select>
      <div className="flex flex-col gap-2">
        <span className="text-sm">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </span>
        <Slider
          label="Price"
          step={10}
          minValue={0}
          maxValue={1000}
          value={priceRange}
          onChange={setPriceRange}
          className="max-w-md"
          formatOptions={{ style: 'currency', currency: 'USD' }}
        />
      </div>
      <CheckboxGroup label="Condition">
        {conditions.map((c) => (
          <Checkbox key={c.key} value={c.key}>
            {c.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <Select
        label="Sort by"
        name="sort"
        variant="bordered"
        defaultSelectedKeys={['relevance']}
      >
        {sortOptions.map((s) => (
          <SelectItem key={s.key}>{s.label}</SelectItem>
        ))}
      </Select>
      <Checkbox name="inStock" defaultSelected>
        In stock only
      </Checkbox>
      <Checkbox name="freeShipping">Free shipping</Checkbox>
      <div className="flex gap-2">
        <Button type="submit" color="primary" className="flex-1">
          Search
        </Button>
        <Button type="button" variant="bordered" onPress={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  )
}

export default AdvancedSearchForm
