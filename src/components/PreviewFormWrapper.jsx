import React from 'react'
import FormErrorBoundary from './FormErrorBoundary'

function PreviewFormWrapper({
  children,
  formName,
  libraryName,
  resetKey,
  themeMode,
  wrapper,
}) {
  // Dynamic style for theme
  const previewFormWrapperStyle = {
    padding: '10px',
    display: 'block',
    background: themeMode === 'dark' ? '#23272f' : '#fff',
    color: themeMode === 'dark' ? '#f1f3f8' : '#23272f',
  }

  const Wrapper = wrapper || React.Fragment

  return (
    <div style={previewFormWrapperStyle}>
      <FormErrorBoundary
        formName={formName}
        libraryName={libraryName}
        resetKey={resetKey}
      >
        <Wrapper>{children}</Wrapper>
      </FormErrorBoundary>
    </div>
  )
}

export default PreviewFormWrapper
