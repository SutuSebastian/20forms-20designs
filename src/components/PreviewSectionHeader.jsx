import React from 'react'

const warningBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 12px',
  marginTop: '8px',
  backgroundColor: '#fff3cd',
  color: '#856404',
  border: '1px solid #ffc107',
  borderRadius: '6px',
  fontSize: '0.85rem',
  fontWeight: 500,
}

function PreviewSectionHeader({ title, description, warningMessage }) {
  return (
    <div style={{ marginBottom: '6px' }}>
      <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h2>
      <p style={{ margin: 0, color: '#5b6675' }}>{description}</p>
      {warningMessage && (
        <div style={warningBadgeStyle}>
          <span>⚠️</span>
          <span>{warningMessage}</span>
        </div>
      )}
    </div>
  )
}

export default PreviewSectionHeader
