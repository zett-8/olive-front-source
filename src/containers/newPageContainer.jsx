import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './headerContainer'

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

NewPageContainer.propTypes = {
  getWorks: PropTypes.func.isRequired
}

export default connect(
  state => ({
    works: state.works
  }),
  dispatch => ({
    getWorks: () => dispatch(getWorks()),
  })
)(NewPageContainer)
