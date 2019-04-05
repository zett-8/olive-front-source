import React from 'react'
import { connect } from 'react-redux'

import ArtistDetail from '../components/artistDetail'
import WorkList from '../components/workList'

import { clearArtistDetail, getArtistDetail } from '../actions/artistDetail'
import { clearWorksOfArtist, getWorksOfAnArtist } from '../actions/workList'

class ArtistPageContainer extends React.Component {
  componentWillUnmount() {
    this.props.clearArtistDetail()
    this.props.clearWorksOfArtist()
  }

  async componentWillMount() {
    const ID = this.props.match.params.id


    if (this.props.artistDetail.pristine) this.props.getArtistDetail(ID)
    if (this.props.workList.artistWorks.pristine) this.props.getWorksOfAnArtist(ID)
  }

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
    getWorksOfAnArtist: id => dispatch(getWorksOfAnArtist(id))
  })
)(ArtistPageContainer)
