import React from 'react'

function PreviewSectionHeader({ title, description }) {
  return (
    <div style={{ marginBottom: '6px' }}>
      <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h2>
      <p style={{ margin: 0, color: '#5b6675' }}>{description}</p>
    </div>
  )
}

export default PreviewSectionHeader
