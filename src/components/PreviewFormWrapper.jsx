import React from 'react'
import FormErrorBoundary from './FormErrorBoundary'
// import root from 'react-shadow';

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
    borderRadius: '10px',
    border: '1px solid transparent',
    overflow: 'hidden',
  }

  return (
    <div style={previewFormWrapperStyle}>
      <FormErrorBoundary
        formName={formName}
        libraryName={libraryName}
        resetKey={resetKey}
      >
        {children}
      </FormErrorBoundary>
    </div>
  )
}

export default PreviewFormWrapper
