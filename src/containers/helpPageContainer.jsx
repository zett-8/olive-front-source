import React from 'react'
import Help from '../components/help'

class helpPageContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'Help | Olive'
  }

  render() {
    return <Help/>
  }
}

export default helpPageContainer
