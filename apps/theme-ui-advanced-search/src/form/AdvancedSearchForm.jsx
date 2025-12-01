/** @jsxImportSource theme-ui */

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const inputStyles = {
    width: '100%',
    padding: '8px 12px',
    fontSize: '16px',
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'default',
    backgroundColor: 'inputBg',
    color: 'text',
    outline: 'none',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: '0 0 0 2px rgba(0, 119, 204, 0.2)',
    },
  }

  const labelStyles = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: 'bold',
    color: 'text',
  }

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'primary',
    border: 'none',
    borderRadius: 'default',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
  }

  const selectStyles = {
    ...inputStyles,
    appearance: 'none',
    backgroundImage:
      'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '16px',
    paddingRight: '32px',
  }

  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-search-query" sx={labelStyles}>
          Search query
        </label>
        <input
          id="theme-ui-search-query"
          name="query"
          type="text"
          required
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-search-category" sx={labelStyles}>
          Category
        </label>
        <select
          id="theme-ui-search-category"
          name="category"
          required
          sx={selectStyles}
        >
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </select>
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-search-date-from" sx={labelStyles}>
          Date from
        </label>
        <input
          id="theme-ui-search-date-from"
          name="dateFrom"
          type="date"
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-search-date-to" sx={labelStyles}>
          Date to
        </label>
        <input
          id="theme-ui-search-date-to"
          name="dateTo"
          type="date"
          sx={inputStyles}
        />
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label htmlFor="theme-ui-search-sort" sx={labelStyles}>
          Sort by
        </label>
        <select
          id="theme-ui-search-sort"
          name="sort"
          required
          sx={selectStyles}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div sx={{ marginBottom: 3 }}>
        <label
          sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text' }}
        >
          <input name="includeArchived" type="checkbox" />
          Include archived
        </label>
      </div>
      <button type="submit" sx={buttonStyles}>
        Search
      </button>
    </form>
  )
}

export default AdvancedSearchForm
