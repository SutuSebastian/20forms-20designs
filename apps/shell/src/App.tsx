import { useState, useMemo, useEffect, useRef } from 'react'
import { LIBRARIES, FORMS, buildIframeSrc } from './config'
import './styles.css'

type ThemeMode = 'light' | 'dark'
type GroupBy = 'library' | 'form'

// Simple checkbox row component
function CheckboxRow({
  label,
  checked,
  onChange,
  disabled = false,
}: {
  label: React.ReactNode
  checked: boolean
  onChange: () => void
  disabled?: boolean
}) {
  if (disabled) {
    return (
      <div className="checkbox-row disabled">
        <span>{label}</span>
      </div>
    )
  }

  return (
    <label className="checkbox-row">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}

// Selection column component
function SelectionColumn({
  title,
  items,
  selectedItems,
  onToggleItem,
  onSelectAll,
  onSelectNone,
  twoColumnLayout = false,
}: {
  title: string
  items: { value: string; label: React.ReactNode; disabled?: boolean }[]
  selectedItems: string[]
  onToggleItem: (value: string) => void
  onSelectAll: () => void
  onSelectNone: () => void
  twoColumnLayout?: boolean
}) {
  const selectableItems = items.filter((item) => !item.disabled)
  const allSelected =
    selectableItems.length > 0 &&
    selectableItems.every((item) => selectedItems.includes(item.value))
  const noneSelected = selectableItems.every(
    (item) => !selectedItems.includes(item.value)
  )
  const listClassName = twoColumnLayout ? 'two-column-list' : 'single-column-list'

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="selection-actions">
        <CheckboxRow
          label="Select all"
          checked={allSelected}
          onChange={onSelectAll}
        />
        <CheckboxRow
          label="Select none"
          checked={noneSelected}
          onChange={onSelectNone}
        />
      </div>
      <div className={listClassName}>
        {items.map((item) => (
          <CheckboxRow
            key={item.value}
            label={item.label}
            checked={selectedItems.includes(item.value)}
            onChange={() => onToggleItem(item.value)}
            disabled={item.disabled}
          />
        ))}
      </div>
    </section>
  )
}

// Preview card with iframe (auto-loads immediately)
function PreviewCard({
  libraryName,
  formName,
  theme,
}: {
  libraryName: string
  formName: string
  theme: ThemeMode
}) {
  const [iframeHeight, setIframeHeight] = useState(500)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const iframeSrc = buildIframeSrc(libraryName, formName, theme)

  // Listen for height messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'IFRAME_HEIGHT') {
        // Check if this message is from our iframe
        if (
          iframeRef.current &&
          event.source === iframeRef.current.contentWindow
        ) {
          const height = event.data.height
          // Only accept reasonable heights (between 100 and 1200px)
          if (height > 100 && height < 1200) {
            setIframeHeight(height + 20) // Add some padding
          }
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Send theme updates to iframe when theme changes
  useEffect(() => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'SET_THEME', theme },
        '*'
      )
    }
  }, [theme])

  if (!iframeSrc) {
    return null
  }

  // Handle iframe load and resize to fit content (fallback for same-origin)
  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    try {
      const iframe = e.currentTarget
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (iframeDoc) {
        const height = iframeDoc.body.scrollHeight
        // Only accept reasonable heights (between 100 and 1200px)
        if (height > 100 && height < 1200) {
          setIframeHeight(height + 20)
        }
      }
    } catch {
      // Cross-origin restrictions - rely on postMessage instead
    }

    // Send theme to iframe when it loads
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'SET_THEME', theme },
        '*'
      )
    }
  }

  return (
    <div className="preview-card">
      <div className="preview-card-header">
        <strong>{formName}</strong> — {libraryName}
      </div>
      <iframe
        ref={iframeRef}
        title={`${libraryName}-${formName}`}
        src={iframeSrc}
        className="preview-iframe"
        style={{ height: `${iframeHeight}px` }}
        sandbox="allow-scripts allow-forms allow-same-origin"
        onLoad={handleIframeLoad}
      />
    </div>
  )
}

// Preview section header
function PreviewSectionHeader({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="section-header-row">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const [groupBy, setGroupBy] = useState<GroupBy>('library')
  const [selectedForms, setSelectedForms] = useState<string[]>(() =>
    FORMS.slice(0, 3)
  )
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>(() =>
    LIBRARIES.filter((lib) => lib.implemented)
      .slice(0, 3)
      .map((lib) => lib.name)
  )

  // Form items for selection
  const formItems = useMemo(
    () => FORMS.map((form) => ({ value: form, label: form })),
    []
  )

  // Library items for selection (with website/repo links, disabled for non-implemented)
  const libraryItems = useMemo(
    () =>
      LIBRARIES.map((lib) => ({
        value: lib.name,
        label: (
          <span>
            {lib.name} (
            <a
              href={lib.website}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              website
            </a>
            {' / '}
            <a
              href={lib.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              repo
            </a>
            )
          </span>
        ),
        disabled: !lib.implemented,
      })),
    []
  )

  const toggleFormSelection = (form: string) => {
    setSelectedForms((prev) =>
      prev.includes(form) ? prev.filter((f) => f !== form) : [...prev, form]
    )
  }

  const toggleLibrarySelection = (lib: string) => {
    setSelectedLibraries((prev) =>
      prev.includes(lib) ? prev.filter((l) => l !== lib) : [...prev, lib]
    )
  }

  // Get active (selected AND implemented) libraries
  const activeLibraries = useMemo(
    () =>
      LIBRARIES.filter(
        (lib) => lib.implemented && selectedLibraries.includes(lib.name)
      ),
    [selectedLibraries]
  )

  // Get forms that the selected libraries have (all forms since all are implemented)
  const activeForms = useMemo(
    () => FORMS.filter((form) => selectedForms.includes(form)),
    [selectedForms]
  )

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">20 Forms, 20 Designs</h1>
        <p className="subtitle">
          Choose a form and a component library to see the pairing. Each preview
          is rendered in an isolated iframe for complete CSS isolation between
          libraries.
        </p>
      </header>

      <main>
        <div className="selector-row">
          <SelectionColumn
            title="Forms"
            items={formItems}
            selectedItems={selectedForms}
            onToggleItem={toggleFormSelection}
            onSelectAll={() =>
              setSelectedForms(formItems.map((item) => item.value))
            }
            onSelectNone={() => setSelectedForms([])}
          />
          <SelectionColumn
            title="Component libraries"
            items={libraryItems}
            selectedItems={selectedLibraries}
            onToggleItem={toggleLibrarySelection}
            onSelectAll={() =>
              setSelectedLibraries(
                libraryItems
                  .filter((item) => !item.disabled)
                  .map((item) => item.value)
              )
            }
            onSelectNone={() => setSelectedLibraries([])}
            twoColumnLayout
          />
        </div>

        <div className="theme-toggle-row">
          <span className="toggle-label">Theme:</span>
          <label className="radio-row">
            <input
              type="radio"
              name="preview-theme"
              value="light"
              checked={themeMode === 'light'}
              onChange={() => setThemeMode('light')}
            />
            <span>Light theme</span>
          </label>
          <label className="radio-row">
            <input
              type="radio"
              name="preview-theme"
              value="dark"
              checked={themeMode === 'dark'}
              onChange={() => setThemeMode('dark')}
            />
            <span>Dark theme</span>
          </label>
        </div>

        <div className="preview-toggle-row">
          <span className="toggle-label">Group previews by:</span>
          <label className="radio-row">
            <input
              type="radio"
              name="preview-group-by"
              value="library"
              checked={groupBy === 'library'}
              onChange={() => setGroupBy('library')}
            />
            <span>Design system</span>
          </label>
          <label className="radio-row">
            <input
              type="radio"
              name="preview-group-by"
              value="form"
              checked={groupBy === 'form'}
              onChange={() => setGroupBy('form')}
            />
            <span>Form name</span>
          </label>
        </div>

        {/* Previews grouped by library */}
        {groupBy === 'library' &&
          activeLibraries.map((lib) => {
            const formsForLibrary = activeForms
            if (formsForLibrary.length === 0) return null

            return (
              <section key={lib.name} className="preview-section">
                <PreviewSectionHeader
                  title={`${lib.name} previews`}
                  description={`${lib.name} form implementations.`}
                />
                <div className="preview-strip">
                  {formsForLibrary.map((form) => (
                    <PreviewCard
                      key={`${lib.name}-${form}`}
                      libraryName={lib.name}
                      formName={form}
                      theme={themeMode}
                    />
                  ))}
                </div>
              </section>
            )
          })}

        {/* Previews grouped by form */}
        {groupBy === 'form' &&
          activeForms.map((form) => {
            if (activeLibraries.length === 0) return null

            return (
              <section key={form} className="preview-section">
                <PreviewSectionHeader
                  title={form}
                  description={`Compare this form across different design systems.`}
                />
                <div className="preview-strip">
                  {activeLibraries.map((lib) => (
                    <PreviewCard
                      key={`${lib.name}-${form}`}
                      libraryName={lib.name}
                      formName={form}
                      theme={themeMode}
                    />
                  ))}
                </div>
              </section>
            )
          })}

        {activeLibraries.length === 0 && (
          <p className="empty-message">
            Select at least one implemented library to see previews.
          </p>
        )}

        {activeForms.length === 0 && activeLibraries.length > 0 && (
          <p className="empty-message">
            Select at least one form to see previews.
          </p>
        )}
      </main>
    </div>
  )
}

export default App
