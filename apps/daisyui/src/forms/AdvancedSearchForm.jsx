function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-search-query">
          <span className="label-text">Search query</span>
        </label>
        <input
          id="daisyui-search-query"
          name="query"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-search-category">
          <span className="label-text">Category</span>
        </label>
        <select
          id="daisyui-search-category"
          name="category"
          required
          className="select select-bordered w-full"
        >
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </select>
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-search-date-from">
          <span className="label-text">Date from</span>
        </label>
        <input
          id="daisyui-search-date-from"
          name="dateFrom"
          type="date"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-search-date-to">
          <span className="label-text">Date to</span>
        </label>
        <input
          id="daisyui-search-date-to"
          name="dateTo"
          type="date"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-search-sort">
          <span className="label-text">Sort by</span>
        </label>
        <select
          id="daisyui-search-sort"
          name="sort"
          required
          className="select select-bordered w-full"
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="includeArchived" type="checkbox" className="checkbox" />
          <span className="label-text">Include archived</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  )
}

export default AdvancedSearchForm
