import React from 'react'
import { connect } from 'react-redux'

import UserDetail from '../components/userDetail'
import UserDetailNav from '../components/userDetail_nav'
import UserDetailPrime from '../components/userDetail_prime'
import Uploader from '../components/uploader'

import { getUserDetail } from '../actions/userDetail'
import { uploadUserIcon } from '../actions/userDetail'
import { logout } from '../actions/loginStatus'

class UserPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL
    this.iconRef = React.createRef()
    this.fileSelectButtonRef = React.createRef()
    this.state = {
      iconImage: null,
      tab: 0,
    }
  }

  componentDidMount() {
    const ID = this.props.match.params.id

    if (ID === this.props.loginStatus.user_id + '') this.props.getUserDetail(ID)
  }

  navClicked = num => this.setState({ tab: num })

  logout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  fileSelectClicked = () => this.fileSelectButtonRef.current.click()

  imageChange = e => {
    e.preventDefault()
    const f = e.target.files
    const url = f.length === 0 ? '' : this.createObjectURL(f[0])

    this.setState({ iconImage: f[0] })
    this.iconRef.current.src = url
  }

  upload = e => {
    e.preventDefault()

    if (this.state.iconImage === null) return

    const err = this.props.uploadUserIcon(this.props.loginStatus.user_id, this.state.iconImage)

    this.setState({ iconImage: null })
  }

  tabContents = () => {
    switch (this.state.tab) {
      case 0:
        return (
          <UserDetailPrime
            self={this.props.loginStatus}
            detail={this.props.userDetail}
            fileSelectClicked={this.fileSelectClicked}
            imageChange={this.imageChange}
            upload={this.upload}
            iconRef={this.iconRef}
            buttonRef={this.fileSelectButtonRef}
          />
        )

      case 1:
        return (
          <React.Fragment>
            <UserDetail detail={this.props.userDetail} handleLogout={this.logout} />
            <Uploader />
          </React.Fragment>
        )
    }
  }

  render() {
    if (!Object.keys(this.props.userDetail).length) return null

    return (
      <div className="userDetail">
        <UserDetailNav navClicked={this.navClicked} />
        {this.tabContents()}
      </div>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    userDetail: state.userDetail,
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    getUserDetail: id => dispatch(getUserDetail(id)),
    uploadUserIcon: (id, icon) => dispatch(uploadUserIcon(id, icon))
  })
)(UserPageContainer)
