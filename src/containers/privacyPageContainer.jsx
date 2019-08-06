import React from 'react'
import Privacy from '../components/privacy'


class PrivacyPageContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'Terms | Olive'
  }

  render() {
    return <Privacy />
  }
}

export default PrivacyPageContainer
