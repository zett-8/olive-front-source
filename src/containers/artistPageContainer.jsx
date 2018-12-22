import React from 'react'
import { connect } from 'react-redux'

import ArtistDetail from '../components/artistDetail'
import WorkList from '../components/workList'

import { getArtistDetail } from '../actions/artistDetail'
import { getWorksOfAnArtist } from '../actions/works'

class ArtistPageContainer extends React.Component {
  componentDidMount() {
    const ID = this.props.match.params.id

    this.props.getArtistDetail(ID)
    this.props.getWorksOfAnArtist(ID)
  }

  back = () => this.props.history.goBack()

  render() {
    let myself = false

    if (!Object.keys(this.props.artistDetail).length) return null

    if (this.props.loginStatus.user_id === this.props.match.params.id - 0) myself = true

    return (
      <React.Fragment>
        <ArtistDetail detail={this.props.artistDetail} back={this.back} myself={myself} />
        <WorkList works={this.props.works}/>
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
    getArtistDetail: id => dispatch(getArtistDetail(id)),
    getWorksOfAnArtist: id => dispatch(getWorksOfAnArtist(id))
  })
)(ArtistPageContainer)
