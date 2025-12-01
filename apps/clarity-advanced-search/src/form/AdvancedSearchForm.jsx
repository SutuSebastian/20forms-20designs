import { CdsInput, CdsSelect, CdsCheckbox, CdsButton, CdsFormGroup } from '@cds/react/forms'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <CdsFormGroup layout="vertical">
        <CdsInput>
          <label>Search query</label>
          <input
            id="clarity-search-query"
            name="query"
            type="text"
            required
          />
        </CdsInput>

        <CdsSelect>
          <label>Category</label>
          <select id="clarity-search-category" name="category">
            <option value="">All categories</option>
            <option value="articles">Articles</option>
            <option value="products">Products</option>
            <option value="users">Users</option>
          </select>
        </CdsSelect>

        <CdsInput>
          <label>Date from</label>
          <input
            id="clarity-search-date-from"
            name="dateFrom"
            type="date"
          />
        </CdsInput>

        <CdsInput>
          <label>Date to</label>
          <input
            id="clarity-search-date-to"
            name="dateTo"
            type="date"
          />
        </CdsInput>

        <CdsSelect>
          <label>Sort by</label>
          <select id="clarity-search-sort" name="sort">
            <option value="relevance">Relevance</option>
            <option value="date-desc">Newest first</option>
            <option value="date-asc">Oldest first</option>
            <option value="popularity">Popularity</option>
          </select>
        </CdsSelect>

        <CdsCheckbox>
          <label>Include archived</label>
          <input
            type="checkbox"
            id="clarity-search-archived"
            name="includeArchived"
          />
        </CdsCheckbox>

        <div style={{ marginTop: '16px' }}>
          <CdsButton type="submit" action="solid">
            Search
          </CdsButton>
        </div>
      </CdsFormGroup>
    </form>
  )
}

export default AdvancedSearchForm
