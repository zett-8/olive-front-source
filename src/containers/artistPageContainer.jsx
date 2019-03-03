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

  back = () => this.props.history.goBack()

  render() {
    let myself = false

    if (this.props.artistDetail.pristine) return null

    if (this.props.loginStatus.user_id === this.props.match.params.id - 0) myself = true

    return (
      <React.Fragment>
        <ArtistDetail detail={this.props.artistDetail.contents} back={this.back} myself={myself} />
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
