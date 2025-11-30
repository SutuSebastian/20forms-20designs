import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)
  const [sort, setSort] = useState('relevance')
  const [includeArchived, setIncludeArchived] = useState(false)

  const categoryOptions = [
    { label: 'All', value: 'all' },
    { label: 'Articles', value: 'articles' },
    { label: 'Products', value: 'products' },
    { label: 'People', value: 'people' },
  ]

  const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-search-query"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Search query
        </label>
        <InputText
          id="primereact-search-query"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-search-category"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Category
        </label>
        <Dropdown
          id="primereact-search-category"
          name="category"
          value={category}
          options={categoryOptions}
          onChange={(e) => setCategory(e.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-search-date-from"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Date from
        </label>
        <Calendar
          id="primereact-search-date-from"
          name="dateFrom"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.value)}
          dateFormat="yy-mm-dd"
          showIcon
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-search-date-to"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Date to
        </label>
        <Calendar
          id="primereact-search-date-to"
          name="dateTo"
          value={dateTo}
          onChange={(e) => setDateTo(e.value)}
          dateFormat="yy-mm-dd"
          showIcon
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-search-sort"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Sort by
        </label>
        <Dropdown
          id="primereact-search-sort"
          name="sort"
          value={sort}
          options={sortOptions}
          onChange={(e) => setSort(e.value)}
          required
        />
      </div>
      <div
        className="field"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Checkbox
          inputId="primereact-search-archived"
          name="includeArchived"
          checked={includeArchived}
          onChange={(e) => setIncludeArchived(e.checked)}
        />
        <label htmlFor="primereact-search-archived">Include archived</label>
      </div>
      <Button type="submit" label="Search" />
    </form>
  )
}

export default AdvancedSearchForm
