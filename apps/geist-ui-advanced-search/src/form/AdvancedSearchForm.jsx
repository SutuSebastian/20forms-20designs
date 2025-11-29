import { Input, Button, Select, Checkbox, Spacer, Text } from '@geist-ui/core'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="query" width="100%" placeholder="Search query" required>
        Search query
      </Input>
      <Spacer h={1} />
      <Text small>Category</Text>
      <Spacer h={0.5} />
      <Select name="category" placeholder="Select category" width="100%">
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="articles">Articles</Select.Option>
        <Select.Option value="products">Products</Select.Option>
        <Select.Option value="people">People</Select.Option>
      </Select>
      <Spacer h={1} />
      <Input name="dateFrom" htmlType="date" width="100%">
        Date from
      </Input>
      <Spacer h={1} />
      <Input name="dateTo" htmlType="date" width="100%">
        Date to
      </Input>
      <Spacer h={1} />
      <Text small>Sort by</Text>
      <Spacer h={0.5} />
      <Select name="sort" placeholder="Select sort" width="100%">
        <Select.Option value="relevance">Relevance</Select.Option>
        <Select.Option value="newest">Newest</Select.Option>
        <Select.Option value="oldest">Oldest</Select.Option>
      </Select>
      <Spacer h={1} />
      <Checkbox name="includeArchived">Include archived</Checkbox>
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Search
      </Button>
    </form>
  )
}

export default AdvancedSearchForm
