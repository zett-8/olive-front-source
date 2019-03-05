import React from 'react'
import { connect } from 'react-redux'

import ArtistDetail from '../components/artistDetail'
import WorkList from '../components/workList'

import { clearArtistDetail, getArtistDetail } from '../actions/artistDetail'
import { clearWorks, getWorksOfAnArtist } from '../actions/works'

class ArtistPageContainer extends React.Component {
  async componentWillMount() {
    await this.props.clearArtistDetail()
    await this.props.clearWorks()

    const ID = this.props.match.params.id

    let err
    err = this.props.getArtistDetail(ID)
    err = this.props.getWorksOfAnArtist(ID)
  }

  render() {
    if (this.props.artistDetail.pristine) return null

    return (
      <React.Fragment>
        <div className="artistDetail">
          <ArtistDetail detail={this.props.artistDetail.contents} />
        </div>
        <div className="workList">
         <WorkList works={this.props.works.contents}/>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    artistDetail: state.artistDetail,
    works: state.works
  }),
  dispatch => ({
    clearArtistDetail: () => dispatch(clearArtistDetail()),
    clearWorks: () => dispatch(clearWorks()),
    getArtistDetail: id => dispatch(getArtistDetail(id)),
    getWorksOfAnArtist: id => dispatch(getWorksOfAnArtist(id))
  })
)(ArtistPageContainer)
