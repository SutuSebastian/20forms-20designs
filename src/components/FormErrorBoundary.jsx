import { Component } from 'react'
import styles from '../styles'

class FormErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    const { formName, libraryName } = this.props
    console.error('Form preview failed to render', {
      form: formName,
      library: libraryName,
      error,
      info,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, error: null })
    }
  }

  render() {
    const { hasError } = this.state
    const { children, formName, libraryName } = this.props

    if (hasError) {
      return (
        <div style={styles.formErrorFallback}>
          <div style={styles.formErrorTitle}>Preview unavailable</div>
          <p style={styles.formErrorDetails}>
            {libraryName ? `${libraryName} ` : ''}implementation for{' '}
            {formName || 'this form'} failed to render. See the console for
            details.
          </p>
        </div>
      )
    }

    return children
  }
}

export default FormErrorBoundary
