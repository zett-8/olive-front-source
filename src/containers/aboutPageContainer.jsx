import React from 'react'
import About from '../components/about'

class AboutPageContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'About Us | Olive'
  }

  render() {
    return <About />
  }
}

export default AboutPageContainer
