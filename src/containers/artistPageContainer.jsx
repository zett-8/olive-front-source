import React from 'react'
import { connect } from 'react-redux'

import ArtistDetail from '../components/artistDetail'

import { getArtistDetail } from '../actions/artistDetail'

class ArtistPageContainer extends React.Component {
  componentDidMount() {
    this.props.getArtistDetail(this.props.match.params.id)
  }

  back = () => this.props.history.goBack()

  render() {
    let myself = false

    if (!Object.keys(this.props.artistDetail).length) return null

    if (this.props.loginStatus.user_id === this.props.match.params.id - 0) myself = true

    return <ArtistDetail detail={this.props.artistDetail} back={this.back} myself={myself}/>
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    artistDetail: state.artistDetail,
  }),
  dispatch => ({
    getArtistDetail: id => dispatch(getArtistDetail(id))
  })
)(ArtistPageContainer)
