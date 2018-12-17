import React from 'react'
import { connect } from 'react-redux'

import Header from '../containers/headerContainer'

import { logout } from '../actions/loginStatus'
import { getWorks } from '../actions/works'


class NewPageContainer extends React.Component {
  componentDidMount() {
    this.props.getWorks()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <p>New Works</p>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    works: state.works
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    getWorks: () => dispatch(getWorks()),
  })
)(NewPageContainer)
