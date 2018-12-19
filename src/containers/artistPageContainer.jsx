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
    return <ArtistDetail detail={this.props.artistDetail} back={this.back} />
  }
}

export default connect(
  state => ({
    artistDetail: state.artistDetail,
  }),
  dispatch => ({
    getArtistDetail: id => dispatch(getArtistDetail(id))
  })
)(ArtistPageContainer)
