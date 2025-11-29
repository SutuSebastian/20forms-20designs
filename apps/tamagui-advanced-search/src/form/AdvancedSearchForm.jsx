import {
  Button,
  Checkbox,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  Select,
  Separator,
  H4,
} from 'tamagui'
import { useState } from 'react'

function AdvancedSearchForm() {
  const [category, setCategory] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [inStock, setInStock] = useState(false)
  const [onSale, setOnSale] = useState(false)
  const [freeShipping, setFreeShipping] = useState(false)
  const [newArrivals, setNewArrivals] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    setCategory('')
    setSortBy('')
    setInStock(false)
    setOnSale(false)
    setFreeShipping(false)
    setNewArrivals(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$4">
        <YStack gap="$1">
          <Label htmlFor="keyword">Search keywords</Label>
          <Input id="keyword" name="keyword" placeholder="Enter search terms" />
        </YStack>

        <XStack gap="$3" flexWrap="wrap">
          <YStack gap="$1" flex={1} minWidth={150}>
            <Label htmlFor="category">Category</Label>
            <Select id="category" value={category} onValueChange={setCategory}>
              <Select.Trigger>
                <Select.Value placeholder="All categories" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item index={0} value="all">
                  <Select.ItemText>All categories</Select.ItemText>
                </Select.Item>
                <Select.Item index={1} value="electronics">
                  <Select.ItemText>Electronics</Select.ItemText>
                </Select.Item>
                <Select.Item index={2} value="clothing">
                  <Select.ItemText>Clothing</Select.ItemText>
                </Select.Item>
                <Select.Item index={3} value="home">
                  <Select.ItemText>Home & Garden</Select.ItemText>
                </Select.Item>
                <Select.Item index={4} value="sports">
                  <Select.ItemText>Sports</Select.ItemText>
                </Select.Item>
                <Select.Item index={5} value="books">
                  <Select.ItemText>Books</Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select>
          </YStack>

          <YStack gap="$1" flex={1} minWidth={150}>
            <Label htmlFor="sortBy">Sort by</Label>
            <Select id="sortBy" value={sortBy} onValueChange={setSortBy}>
              <Select.Trigger>
                <Select.Value placeholder="Relevance" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item index={0} value="relevance">
                  <Select.ItemText>Relevance</Select.ItemText>
                </Select.Item>
                <Select.Item index={1} value="price-low">
                  <Select.ItemText>Price: Low to High</Select.ItemText>
                </Select.Item>
                <Select.Item index={2} value="price-high">
                  <Select.ItemText>Price: High to Low</Select.ItemText>
                </Select.Item>
                <Select.Item index={3} value="newest">
                  <Select.ItemText>Newest First</Select.ItemText>
                </Select.Item>
                <Select.Item index={4} value="rating">
                  <Select.ItemText>Customer Rating</Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select>
          </YStack>
        </XStack>

        <Separator />
        <H4>Price Range</H4>

        <XStack gap="$3">
          <YStack gap="$1" flex={1}>
            <Label htmlFor="minPrice">Min price</Label>
            <Input
              id="minPrice"
              name="minPrice"
              inputMode="decimal"
              placeholder="$0"
            />
          </YStack>

          <YStack gap="$1" flex={1}>
            <Label htmlFor="maxPrice">Max price</Label>
            <Input
              id="maxPrice"
              name="maxPrice"
              inputMode="decimal"
              placeholder="$1000"
            />
          </YStack>
        </XStack>

        <Separator />
        <H4>Date Range</H4>

        <XStack gap="$3">
          <YStack gap="$1" flex={1}>
            <Label htmlFor="fromDate">From date</Label>
            <Input id="fromDate" name="fromDate" placeholder="YYYY-MM-DD" />
          </YStack>

          <YStack gap="$1" flex={1}>
            <Label htmlFor="toDate">To date</Label>
            <Input id="toDate" name="toDate" placeholder="YYYY-MM-DD" />
          </YStack>
        </XStack>

        <Separator />
        <H4>Filters</H4>

        <XStack gap="$4" flexWrap="wrap">
          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="inStock"
              checked={inStock}
              onCheckedChange={setInStock}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="inStock">In stock only</Label>
          </XStack>

          <XStack gap="$2" alignItems="center">
            <Checkbox id="onSale" checked={onSale} onCheckedChange={setOnSale}>
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="onSale">On sale</Label>
          </XStack>

          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="freeShipping"
              checked={freeShipping}
              onCheckedChange={setFreeShipping}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="freeShipping">Free shipping</Label>
          </XStack>

          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="newArrivals"
              checked={newArrivals}
              onCheckedChange={setNewArrivals}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="newArrivals">New arrivals</Label>
          </XStack>
        </XStack>

        <XStack gap="$2">
          <Button flex={1} onPress={handleReset}>
            Reset
          </Button>
          <Button flex={1} themeInverse onPress={() => {}}>
            Search
          </Button>
        </XStack>
      </YStack>
    </form>
  )
}

export default AdvancedSearchForm
