import React from 'react'
import { connect } from 'react-redux'

import WorkList from '../components/workList'

import { getRecommendWorks, getNextRecommendWorks } from '../actions/workList'
import scrollHandler from '../utils/scrollHandler'

class LandingPageContainer extends React.Component {
  async componentDidMount() {
    if (this.props.workList.recommendWorks.pristine) {
      await this.props.getRecommendWorks()
      this.fetchNextWorks()
    }

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll) }

  fetchNextWorks = () => this.props.getNextRecommendWorks(this.props.workList.recommendWorks.nextWorksApi)
  handleScroll = () =>scrollHandler(this.fetchNextWorks)

  render() {
    if (this.props.workList.recommendWorks.pristine) return null

    return <WorkList works={this.props.workList.recommendWorks.contents} />
  }
}

export default connect(
  state => ({
    workList: state.workList
  }),
  dispatch => ({
    getRecommendWorks: () => dispatch(getRecommendWorks()),
    getNextRecommendWorks: url => dispatch(getNextRecommendWorks(url))
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
