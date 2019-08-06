import React from 'react'
import Terms from '../components/terms'

class TermsPageContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'Terms | Olive'
  }

  render() {
    return <Terms />
  }
}

export default TermsPageContainer
