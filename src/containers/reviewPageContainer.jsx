import React from 'react'
import { connect } from 'react-redux'

import SeedArtistList from '../components/seedArtistList'
import { getSeedArtist } from '../actions/seedArtists'

class ReviewPageContainer extends React.Component {
  componentWillMount() {
    // not logged in
    if (!Object.keys(this.props.loginStatus).length) this.props.history.push('/')
  }

  componentDidMount() {
    if (this.props.seedArtists.pristine) this.props.getSeedArtists()
  }

  render() {
    if (this.props.seedArtists.pristine) return null

    return (
      <div className="seedArtistList">
        <SeedArtistList seedArtists={this.props.seedArtists.contents} />
      </div>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    seedArtists: state.seedArtists,
    userDetail: state.userDetail
  }),
  dispatch => ({
    getSeedArtists: () => dispatch(getSeedArtist()),
  })
)(ReviewPageContainer)
