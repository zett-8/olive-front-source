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
import WorkList from '../components/workList'

import { EmailValidation, TwoPasswordValidation } from '../utils/Validator'
import { uploadWork } from '../actions/workDetail'
import { getHistory } from '../actions/history'
import { getUserDetail, uploadUserIcon, updateBuyerInfo, updateArtistInfo } from '../actions/userDetail'
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
      selectOrder: 1,

      // prime tab
      iconImage: null,
      email: '',
      oldPassword: '',
      newPassword: '',

      // buyer tab
      firstName: '',
      lastName: '',
      zipCode: '',
      address: '',
      phoneNumber: '',

      // artist tab
      artistName: '',
      profile: '',
      website: '',
      birthday: '',
      sex: '',
      place: '',
      bankName: '',
      bankCode: '',
      bankBranchName: '',
      bankBranchCode: '',
      bankAccountNumber: '',
      bankAccountName: '',

      // work upload tab
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

  async componentWillMount() {
    const ID = this.props.match.params.id

    if (ID === this.props.loginStatus.user_id + '') await this.props.getUserDetail(ID)

    this.setState({
      firstName: this.props.userDetail.contents.first_name,
      lastName: this.props.userDetail.contents.last_name,
      zipCode: this.props.userDetail.contents.zipcode,
      address: this.props.userDetail.contents.address,
      phoneNumber: this.props.userDetail.contents.phone_number,

      artistName: this.props.userDetail.contents.artist_name,
      profile: this.props.userDetail.contents.profile,
      website: this.props.userDetail.contents.website,
      birthday: this.props.userDetail.contents.birthday || '',
      sex: this.props.userDetail.contents.sex,
      place: this.props.userDetail.contents.place,
      bankName: this.props.userDetail.contents.bank_name,
      bankCode: this.props.userDetail.contents.bank_code,
      bankBranchName: this.props.userDetail.contents.bank_branch_name,
      bankBranchCode: this.props.userDetail.contents.bank_branch_code,
      bankAccountNumber: this.props.userDetail.contents.bank_account_number,
      bankAccountName: this.props.userDetail.contents.bank_account_name,
    })
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

  primeFormChanged = e => this.setState({ [e.target.name]: e.target.value })

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
  // buyer tab
  // =============================

  buyerFormChanged = e => this.setState({ [e.target.name]: e.target.value })

  updateBuyerInfo = async () => {
    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 2, position: 'tc', message: '' }

    const state = this.state
    if (!state.firstName || !state.lastName || !state.zipCode || !state.address || !state.phoneNumber) {
      body.message = '*必須項目を入力してください'
      notification.addNotification(body)
      return null
    }

    const data = {
      ready_as_buyer: true,
      user_id: this.props.loginStatus.user_id,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      zipcode: this.state.zipCode,
      address: this.state.address,
      phone_number: this.state.phoneNumber,
    }

    const err = await this.props.updateBuyerInfo(this.props.loginStatus.user_id, data)

    if (err) {
      body.message = 'Buyer情報の更新に失敗しました'
      notification.addNotification(body)
      return null
    }

    body.message = 'Buyer情報を更新しました'
    body.level = 'success'
    notification.addNotification(body)
  }

  // =============================
  // artist tab
  // =============================

  artistFormChanged = e => this.setState({ [e.target.name]: e.target.value })

  updateArtistInfo = async () => {
    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 2, position: 'tc', message: '' }

    if (
      !this.state.artistName ||
      !this.state.profile ||
      !this.state.bankName ||
      !this.state.bankCode ||
      !this.state.bankBranchName ||
      !this.state.bankBranchCode ||
      !this.state.bankAccountNumber ||
      !this.state.bankAccountName
    ) {
      body.message = '*必須項目を入力してください'
      notification.addNotification(body)
      return null
    }

    const data = {
      ready_as_artist: true,
      user_id: this.props.loginStatus.user_id,
      artist_name: this.state.artistName,
      profile: this.state.profile,
      website: this.state.website,
      place: this.state.place,
      birthday: this.state.birthday || null,
      sex: this.state.sex,
      bank_name: this.state.bankName,
      bank_code: this.state.bankCode,
      bank_branch_name: this.state.bankBranchName,
      bank_branch_code: this.state.bankBranchCode,
      bank_account_number: this.state.bankAccountNumber,
      bank_account_name: this.state.bankAccountName,
    }

    const err = await this.props.updateArtistInfo(this.props.loginStatus.user_id, data)

    if (err) {
      body.message = 'Artist情報の更新に失敗しました'
      notification.addNotification(body)
      return null
    }

    body.message = 'Buyer情報を更新しました'
    body.level = 'success'
    notification.addNotification(body)

    console.log('update!')
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
              primeFormChanged={this.primeFormChanged}
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
            <UserDetailBuyer
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              zipCode={this.state.zipCode}
              address={this.state.address}
              phoneNumber={this.state.phoneNumber}
              buyerFormChanged={this.buyerFormChanged}
              updateBuyerInfo={this.updateBuyerInfo}
            />
          </div>
        )

      case 2:
        return (
          <div className="userDetail_artist">
            <UserDetailArtist
              artistName={this.state.artistName}
              profile={this.state.profile}
              website={this.state.website}
              birthday={this.state.birthday}
              sex={this.state.sex}
              place={this.state.place}
              bankName={this.state.bankName}
              bankCode={this.state.bankCode}
              bankBranchName={this.state.bankBranchName}
              bankBranchCode={this.state.bankBranchCode}
              bankAccountNumber={this.state.bankAccountNumber}
              bankAccountName={this.state.bankAccountName}
              artistFormChanged={this.artistFormChanged}
              updateArtistInfo={this.updateArtistInfo}
            />
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
            <WorkList works={this.props.history.contents} />
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
    history: state.history,
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    updateEmail: (userId, email) => dispatch(updateEmail(userId, email)),
    updatePassword: (userId, oldPassword, newPassword) => dispatch(updatePassword(userId, oldPassword, newPassword)),
    uploadWork: work => dispatch(uploadWork(work)),
    getUserDetail: id => dispatch(getUserDetail(id)),
    getHistory: userId => dispatch(getHistory(userId)),
    uploadUserIcon: (id, icon) => dispatch(uploadUserIcon(id, icon)),
    updateBuyerInfo: (userId, data) => dispatch(updateBuyerInfo(userId, data)),
    updateArtistInfo: (userId, data) => dispatch(updateArtistInfo(userId, data)),
  })
)(UserPageContainer)
