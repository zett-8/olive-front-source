import React from 'react'
import Terms from '../components/terms'

class TermsPageContainer extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'Terms | Olive'
  }

  render() {
    return <Terms />
  }
}

export default TermsPageContainer
