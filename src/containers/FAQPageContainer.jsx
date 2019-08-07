import React from 'react'
import FAQ from '../components/faq'

class FAQPageContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'Help | Olive'
  }

  render() {
    return <FAQ />
  }
}

export default FAQPageContainer
