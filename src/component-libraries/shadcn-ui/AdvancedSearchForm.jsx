import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#0f172a',
    lineHeight: '20px',
  },
  input: {
    height: '40px',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  },
  selectTrigger: {
    height: '40px',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#0f172a',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  selectContent: {
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    zIndex: 50,
  },
  selectViewport: {
    padding: '4px',
  },
  selectItem: {
    fontSize: '14px',
    color: '#0f172a',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    borderRadius: '4px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  checkboxIndicator: {
    color: '#ffffff',
    fontSize: '12px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#0f172a',
    cursor: 'pointer',
  },
  button: {
    height: '40px',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#18181b',
    color: '#fafafa',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
}

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="search-query" style={styles.label}>
          Search query
        </label>
        <input
          id="search-query"
          name="query"
          type="text"
          required
          style={styles.input}
          placeholder="Enter search query"
        />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="search-category" style={styles.label}>
          Category
        </label>
        <Select.Root name="category" defaultValue="all" required>
          <Select.Trigger id="search-category" style={styles.selectTrigger}>
            <Select.Value />
            <Select.Icon>▼</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content style={styles.selectContent} position="popper" sideOffset={4}>
              <Select.Viewport style={styles.selectViewport}>
                <Select.Item value="all" style={styles.selectItem}>
                  <Select.ItemText>All</Select.ItemText>
                </Select.Item>
                <Select.Item value="articles" style={styles.selectItem}>
                  <Select.ItemText>Articles</Select.ItemText>
                </Select.Item>
                <Select.Item value="products" style={styles.selectItem}>
                  <Select.ItemText>Products</Select.ItemText>
                </Select.Item>
                <Select.Item value="people" style={styles.selectItem}>
                  <Select.ItemText>People</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="search-date-from" style={styles.label}>
          Date from
        </label>
        <input id="search-date-from" name="dateFrom" type="date" style={styles.input} />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="search-date-to" style={styles.label}>
          Date to
        </label>
        <input id="search-date-to" name="dateTo" type="date" style={styles.input} />
      </div>
      <div style={styles.fieldGroup}>
        <label htmlFor="search-sort" style={styles.label}>
          Sort by
        </label>
        <Select.Root name="sort" defaultValue="relevance" required>
          <Select.Trigger id="search-sort" style={styles.selectTrigger}>
            <Select.Value />
            <Select.Icon>▼</Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content style={styles.selectContent} position="popper" sideOffset={4}>
              <Select.Viewport style={styles.selectViewport}>
                <Select.Item value="relevance" style={styles.selectItem}>
                  <Select.ItemText>Relevance</Select.ItemText>
                </Select.Item>
                <Select.Item value="newest" style={styles.selectItem}>
                  <Select.ItemText>Newest</Select.ItemText>
                </Select.Item>
                <Select.Item value="oldest" style={styles.selectItem}>
                  <Select.ItemText>Oldest</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div style={styles.checkboxContainer}>
        <Checkbox.Root id="search-archived" name="includeArchived" style={styles.checkbox}>
          <Checkbox.Indicator style={styles.checkboxIndicator}>✓</Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="search-archived" style={styles.checkboxLabel}>
          Include archived
        </label>
      </div>
      <button type="submit" style={styles.button}>
        Search
      </button>
    </form>
  )
}

export default AdvancedSearchForm
