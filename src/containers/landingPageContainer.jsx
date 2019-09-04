import React from 'react'
import { connect } from 'react-redux'

import Landing from '../components/landing'

import { getPopularWorksForLanding, getNewWorksForLanding } from '../actions/landingWorks'

class LandingPageContainer extends React.Component {
  async componentDidMount() {
    if (this.props.landingWorks.newWorks.pristine) {
      this.props.getNewWorksForLanding()
    }

    if (this.props.landingWorks.newWorks.pristine) {
      this.props.getPopularWorksForLanding()
    }

    document.title = '現代アートをもっと自由に | Olive'
  }

  render() {
    return <Landing landingWorks={this.props.landingWorks} />
  }
}

export default connect(
  state => ({
    landingWorks: state.landingWorks
  }),
  dispatch => ({
    getPopularWorksForLanding: () => dispatch(getPopularWorksForLanding()),
    getNewWorksForLanding: url => dispatch(getNewWorksForLanding(url))
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
