import React from 'react'
import Privacy from '../components/privacy'


class PrivacyPageContainer extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'Privacy | Olive'
  }

  render() {
    return <Privacy />
  }
}

export default PrivacyPageContainer
