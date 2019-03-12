import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'

import UserDetailOther from '../components/userDetail_other'
import UserDetailNav from '../components/userDetail_nav'
import UserDetailPrime from '../components/userDetail_prime'
import UserDetailBuyer from '../components/userDetail_buyer'
import UserDetailArtist from '../components/userDetail_artist'
import UserDetailWorkUpload from '../components/userDetail_workUpload'
import UserDetailHistory from '../components/userDetail_history'

import { EmailValidation, TwoPasswordValidation } from '../utils/Validator'
import { uploadWork } from '../actions/workDetail'
import { getUserDetail } from '../actions/userDetail'
import { uploadUserIcon } from '../actions/userDetail'
import { logout, updateEmail, updatePassword } from '../actions/loginStatus'

class UserPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()

    this.createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL

    this.iconRef = React.createRef()
    this.userIconSelectBtnRef = React.createRef()

    this.workImageRef1 = React.createRef()
    this.workImageRef2 = React.createRef()
    this.workImageRef3 = React.createRef()
    this.workImageRef4 = React.createRef()
    this.workImageRef5 = React.createRef()
    this.workImageSelectBtnRef = React.createRef()

    this.state = {
      tab: 0,
      // prime
      iconImage: null,
      email: '',
      oldPassword: '',
      newPassword: '',
      selectOrder: 1,
      workImage1: null,
      workImage2: null,
      workImage3: null,
      workImage4: null,
      workImage5: null,
      workTitle: '',
      workCaption: '',
      workPrice: '',
    }
  }

  componentWillMount() {
    const ID = this.props.match.params.id

    if (ID === this.props.loginStatus.user_id + '') this.props.getUserDetail(ID)
  }

  navClicked = num => this.setState({ tab: num })

  logout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  // =============================
  // user prime tab
  // =============================

  userIconSelectBtnClicked = () => this.userIconSelectBtnRef.current.click()

  userIconSelected = e => {
    e.preventDefault()

    const f = e.target.files
    if (f.length === 0) return false

    const url = this.createObjectURL(f[0])

    this.setState({ iconImage: f[0] })
    this.iconRef.current.style.backgroundImage = `url(${url})`
  }

  uploadUserIcon = e => {
    e.preventDefault()

    if (this.state.iconImage === null) return

    const err = this.props.uploadUserIcon(this.props.loginStatus.user_id, this.state.iconImage)

    this.setState({ iconImage: null })
  }

  primeFormTyped = e => this.setState({ [e.target.name]: e.target.value })

  updateEmail = async () => {
    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 2, position: 'tc', message: '' }

    const message = EmailValidation(this.state.email)
    if (message) {
      body.message = message
      notification.addNotification(body)
      return null
    }

    const err = await this.props.updateEmail(this.props.loginStatus.user_id, this.state.email)
    if (err) {
      body.message = 'メールアドレスの変更に失敗しました'
      notification.addNotification(body)
    }
  }

  updatePassword = async () => {
    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 2, position: 'tc', message: '' }

    const message = TwoPasswordValidation(this.state.oldPassword, this.state.newPassword)
    if (message) {
      body.message = message
      notification.addNotification(body)
      return null
    }

    const err = await this.props.updatePassword(
      this.props.loginStatus.user_id,
      this.state.oldPassword,
      this.state.newPassword
    )

    if (err) {
      body.message = err.response.data.message
      notification.addNotification(body)
      return null
    }

    this.setState({ oldPassword: '', newPassword: '' })
  }

  // =============================
  // work upload tab
  // =============================

  workFormChanged = e => this.setState({ [e.target.name]: e.target.value })
  workFormIntChanged = e => this.setState({ [e.target.name]: parseInt(e.target.value, 10) })

  workImageSelectBtnClicked = () => this.workImageSelectBtnRef.current.click()

  workImageSelected = e => {
    e.preventDefault()

    const f = e.target.files
    if (f.length === 0) return false

    const url = this.createObjectURL(f[0])

    this.setState({ ['workImage' + this.state.selectOrder]: f[0] })
    this['workImageRef' + this.state.selectOrder].current.src = url

    this.setState({ selectOrder: this.state.selectOrder + 1 })
  }

  uploadWork = e => {
    e.preventDefault()

    const work = new FormData()
    work.append('artist', this.props.loginStatus.user_id),
      work.append('name', this.state.workTitle),
      work.append('caption', this.state.workCaption),
      work.append('price', this.state.workPrice),
      work.append('image1', this.state.workImage1),
      work.append('image2', this.state.workImage2),
      work.append('image3', this.state.workImage3),
      work.append('image4', this.state.workImage4),
      work.append('image5', this.state.workImage5),
      work.append('size', 0),
      work.append('color', 0),
      work.append('genre', 0),
      work.append('subgenre', 0)

    const err = this.props.uploadWork(work)
  }

  tabContents = () => {
    switch (this.state.tab) {
      case 0:
        return (
          <div className="userDetail__prime">
            <UserDetailPrime
              self={this.props.loginStatus}
              detail={this.props.userDetail.contents}
              userIconSelectBtnClicked={this.userIconSelectBtnClicked}
              userIconSelected={this.userIconSelected}
              upload={this.uploadUserIcon}
              iconRef={this.iconRef}
              buttonRef={this.userIconSelectBtnRef}
              primeFormTyped={this.primeFormTyped}
              email={this.state.email}
              oldPassword={this.state.oldPassword}
              newPassword={this.state.newPassword}
              updateEmail={this.updateEmail}
              updatePassword={this.updatePassword}
            />
          </div>
        )

      case 1:
        return (
          <div className="userDetail_buyer">
            <UserDetailBuyer />
          </div>
        )

      case 2:
        return (
          <div className="userDetail_artist">
            <UserDetailArtist />
          </div>
        )

      case 3:
        return (
          <div className="userDetail__workUpload">
            <UserDetailWorkUpload
              upload={this.uploadWork}
              workImageSelectBtnClicked={this.workImageSelectBtnClicked}
              workImageSelected={this.workImageSelected}
              workFormChanged={this.workFormChanged}
              workFormIntChanged={this.workFormIntChanged}
              buttonRef={this.workImageSelectBtnRef}
              workTitle={this.state.workTitle}
              workCaption={this.state.workCaption}
              workPrice={this.state.workPrice}
              workImageRef1={this.workImageRef1}
              workImageRef2={this.workImageRef2}
              workImageRef3={this.workImageRef3}
              workImageRef4={this.workImageRef4}
              workImageRef5={this.workImageRef5}
            />
          </div>
        )

      case 4:
        return (
          <div className="userDetail_history">
            <UserDetailHistory />
          </div>
        )

      case 5:
        return (
          <React.Fragment>
            <UserDetailOther detail={this.props.userDetail.contents} handleLogout={this.logout} />
          </React.Fragment>
        )
    }
  }

  render() {
    if (!Object.keys(this.props.loginStatus).length) return <Redirect to="/login" />

    if (this.props.userDetail.pristine) return null

    return (
      <React.Fragment>
        <NotificationSystem ref={this.notificationSystem} />
        <div className="userDetail">
          <div className="userDetail__nav">
            <UserDetailNav navClicked={this.navClicked} />
          </div>
          {this.tabContents()}
        </div>
      </React.Fragment>
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
    updateEmail: (userId, email) => dispatch(updateEmail(userId, email)),
    updatePassword: (userId, oldPassword, newPassword) => dispatch(updatePassword(userId, oldPassword, newPassword)),
    uploadWork: work => dispatch(uploadWork(work)),
    getUserDetail: id => dispatch(getUserDetail(id)),
    uploadUserIcon: (id, icon) => dispatch(uploadUserIcon(id, icon)),
  })
)(UserPageContainer)
