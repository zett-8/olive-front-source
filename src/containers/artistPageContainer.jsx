import React from 'react'
import { connect } from 'react-redux'

import ArtistDetail from '../components/artistDetail'
import WorkList from '../components/workList'

import { clearArtistDetail, getArtistDetail } from '../actions/artistDetail'
import { clearWorksOfArtist, getWorksOfAnArtist, getNextWorksOfAnArtist } from '../actions/workList'
import scrollHandler from '../utils/scrollHandler'

class ArtistPageContainer extends React.Component {
  async componentWillMount() {
    const ID = this.props.match.params.id


    if (this.props.artistDetail.pristine) this.props.getArtistDetail(ID)
    if (this.props.workList.artistWorks.pristine) {
      await this.props.getWorksOfAnArtist(ID)
      this.fetchNextWorks()
    }

    window.addEventListener('scroll', this.handleScroll)
  }

   componentWillUnmount() {
    this.props.clearArtistDetail()
    this.props.clearWorksOfArtist()

    ;window.removeEventListener('scroll', this.handleScroll)
  }

  fetchNextWorks = () => this.props.getNextWorksOfAnArtist(this.props.workList.artistWorks.nextWorksApi)
  handleScroll = () => scrollHandler(this.fetchNextWorks)

  render() {
    if (this.props.artistDetail.pristine) return null

    return (
      <React.Fragment>
        <div className="artistDetail">
          <ArtistDetail detail={this.props.artistDetail.contents} />
        </div>
        <WorkList works={this.props.workList.artistWorks.contents}/>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    artistDetail: state.artistDetail,
    workList: state.workList
  }),
  dispatch => ({
    clearArtistDetail: () => dispatch(clearArtistDetail()),
    getArtistDetail: id => dispatch(getArtistDetail(id)),
    clearWorksOfArtist: () => dispatch(clearWorksOfArtist()),
    getWorksOfAnArtist: id => dispatch(getWorksOfAnArtist(id)),
    getNextWorksOfAnArtist: url => dispatch(getNextWorksOfAnArtist(url))
  })
)(ArtistPageContainer)
