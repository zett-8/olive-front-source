import React from 'react'
import { connect } from 'react-redux'

import Landing from '../components/landing'

import { getRecommendWorks } from '../actions/workList'
import { getPopularWorksForLanding, getNewWorksForLanding } from '../actions/landingWorks'

class LandingPageContainer extends React.Component {
  async componentDidMount() {
    if (this.props.workList.recommendWorks.pristine) {
      this.props.getRecommendWorks()
    }

    if (this.props.landingWorks.newWorks.pristine) {
      this.props.getPopularWorksForLanding()
    }

    if (this.props.landingWorks.newWorks.pristine) {
      this.props.getNewWorksForLanding()
    }

    document.title = '現代アートをもっと自由に | Olive'
  }

  arrowClick = (id, n) => this.scrollLeft(document.getElementById(id), n * 300, 500);

  scrollLeft = (element, change, duration) => {
    let start = element.scrollLeft
    let currentTime = 0
    const increment = 20

    const easeInOutQuad = (t, b, c, d) => {
      t /= d/2
      if (t < 1) return c/2*t*t + b
      t--
      return -c/2 * (t*(t-2) - 1) + b
    }

    const animateScroll = () => {
      currentTime += increment
      element.scrollLeft = easeInOutQuad(currentTime, start, change, duration)
      if(currentTime < duration) setTimeout(animateScroll, increment)
    }

    animateScroll()
  }



  render() {
    return <Landing scrollLeft={this.arrowClick} recommendWorks={this.props.workList.recommendWorks.contents} landingWorks={this.props.landingWorks} />
  }
}

export default connect(
  state => ({
    landingWorks: state.landingWorks,
    workList: state.workList,
  }),
  dispatch => ({
    getRecommendWorks: () => dispatch(getRecommendWorks()),
    getPopularWorksForLanding: () => dispatch(getPopularWorksForLanding()),
    getNewWorksForLanding: url => dispatch(getNewWorksForLanding(url)),
  })
)(LandingPageContainer)

// import React from 'react'
// import { connect } from 'react-redux'
//
// import Olive from '../assets/olive.jpg'
//
// class LandingPageContainer extends React.Component {
//   render() {
//     return (
//       <div className="landing">
//         <p className="landing__olive-tree">
//           <img className="landing__olive-tree__img" src={Olive} alt="" />
//         </p>
//       </div>
//     )
//   }
// }
//
// export default connect(
//   null,
//   null
// )(LandingPageContainer)
