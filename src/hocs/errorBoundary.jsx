import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <p>Error occurred</p>
          {this.state.error && this.state.error.toString()} <br />
          {this.state.errorInfo.componentStack}
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
