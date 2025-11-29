import { useState } from 'react'
import { Input, Button, Select, Checkbox, Spacer, Text, Divider } from '@geist-ui/core'

function AdvancedSearchForm() {
  const [category, setCategory] = useState('')
  const [sortBy, setSortBy] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    setCategory('')
    setSortBy('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="keywords" width="100%" placeholder="Enter keywords" required>
        Keywords
      </Input>
      <Spacer h={1} />
      <Divider>Filters</Divider>
      <Spacer h={1} />
      <Text small>Category</Text>
      <Spacer h={0.5} />
      <Select
        placeholder="Select category"
        width="100%"
        value={category}
        onChange={(val) => setCategory(val)}
      >
        <Select.Option value="all">All categories</Select.Option>
        <Select.Option value="electronics">Electronics</Select.Option>
        <Select.Option value="clothing">Clothing</Select.Option>
        <Select.Option value="books">Books</Select.Option>
        <Select.Option value="home">Home & Garden</Select.Option>
      </Select>
      <Spacer h={1} />
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <Input name="minPrice" type="number" width="100%" placeholder="Min">
            Min price
          </Input>
        </div>
        <div style={{ flex: 1 }}>
          <Input name="maxPrice" type="number" width="100%" placeholder="Max">
            Max price
          </Input>
        </div>
      </div>
      <Spacer h={1} />
      <Input name="dateFrom" type="date" width="100%">
        Date from
      </Input>
      <Spacer h={1} />
      <Input name="dateTo" type="date" width="100%">
        Date to
      </Input>
      <Spacer h={1} />
      <Text small>Sort by</Text>
      <Spacer h={0.5} />
      <Select
        placeholder="Select sort order"
        width="100%"
        value={sortBy}
        onChange={(val) => setSortBy(val)}
      >
        <Select.Option value="relevance">Relevance</Select.Option>
        <Select.Option value="price-low">Price: Low to High</Select.Option>
        <Select.Option value="price-high">Price: High to Low</Select.Option>
        <Select.Option value="newest">Newest first</Select.Option>
        <Select.Option value="rating">Rating</Select.Option>
      </Select>
      <Spacer h={1} />
      <Checkbox name="inStock">In stock only</Checkbox>
      <Spacer h={0.5} />
      <Checkbox name="freeShipping">Free shipping</Checkbox>
      <Spacer h={1.5} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="secondary" onClick={handleReset} style={{ flex: 1 }}>
          Reset
        </Button>
        <Button htmlType="submit" type="success" style={{ flex: 1 }}>
          Search
        </Button>
      </div>
    </form>
  )
}

export default AdvancedSearchForm
