import React from 'react'

class FilteredWorksJumpContainer extends React.Component {
  componentDidMount() {
    this.props.history.push(`/filteredWorks/${this.props.match.params.info}`)
  }

  render() {
    return <div />
  }
}

export default FilteredWorksJumpContainer
