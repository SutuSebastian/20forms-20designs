import { Input, Button, Select, SelectItem, Checkbox } from '@heroui/react'

const CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'books', label: 'Books' },
  { value: 'home', label: 'Home & Garden' },
  { value: 'sports', label: 'Sports' },
]

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Rating' },
]

function AdvancedSearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    alert('Filters reset!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <Input
        label="Keywords"
        name="keywords"
        type="text"
        placeholder="Search..."
        variant="bordered"
      />
      <Select
        label="Category"
        name="category"
        variant="bordered"
        placeholder="Select category"
      >
        {CATEGORIES.map((cat) => (
          <SelectItem key={cat.value}>{cat.label}</SelectItem>
        ))}
      </Select>
      <div className="flex gap-4">
        <Input
          label="Min price"
          name="minPrice"
          type="number"
          min={0}
          variant="bordered"
          className="flex-1"
        />
        <Input
          label="Max price"
          name="maxPrice"
          type="number"
          min={0}
          variant="bordered"
          className="flex-1"
        />
      </div>
      <div className="flex gap-4">
        <Input
          label="From date"
          name="dateFrom"
          type="date"
          variant="bordered"
          className="flex-1"
        />
        <Input
          label="To date"
          name="dateTo"
          type="date"
          variant="bordered"
          className="flex-1"
        />
      </div>
      <Select
        label="Sort by"
        name="sortBy"
        variant="bordered"
        placeholder="Select sort order"
      >
        {SORT_OPTIONS.map((opt) => (
          <SelectItem key={opt.value}>{opt.label}</SelectItem>
        ))}
      </Select>
      <div className="flex flex-col gap-2">
        <Checkbox name="inStock">In stock only</Checkbox>
        <Checkbox name="onSale">On sale</Checkbox>
        <Checkbox name="freeShipping">Free shipping</Checkbox>
      </div>
      <div className="flex gap-2">
        <Button type="submit" color="primary">
          Search
        </Button>
        <Button type="button" variant="bordered" onPress={handleReset}>
          Reset filters
        </Button>
      </div>
    </form>
  )
}

export default AdvancedSearchForm
