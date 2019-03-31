import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'

import UserDetailOther from '../components/userDetail/userDetail_other'
import UserDetailNav from '../components/userDetail/userDetail_nav'
import UserDetailPrime from '../components/userDetail/userDetail_prime'
import UserDetailBuyer from '../components/userDetail/userDetail_buyer'
import UserDetailArtist from '../components/userDetail/userDetail_artist'
import UserDetailWorkUpload from '../components/userDetail/userDetail_workUpload'
import WorkList from '../components/workList'
import { errorNotificationBody, successNotificationBody } from '../utils/notification'

import { EmailValidation, TwoPasswordValidation } from '../utils/Validator'
import { uploadWork } from '../actions/workDetail'
import { getPurchasedHistory } from '../actions/purchasedHistory'
import { uploadUserIcon, updateBuyerInfo, updateArtistInfo } from '../actions/userDetail'
import { updateEmail, updatePassword } from '../actions/loginStatus'

import One from '../assets/1.jpg'
import Two from '../assets/2.jpg'
import Three from '../assets/3.jpg'
import Four from '../assets/4.jpg'
import Five from '../assets/5.jpg'

class UserPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()

    this.createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL

    this.iconRef = React.createRef()
    this.userIconSelectBtnRef = React.createRef()
    this.workImageSelectBtnRef = React.createRef()

    this.state = {
      tab: 0,

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
      selectableSubGenres: [],
      selectOrder: 1,
      workImageUrlCurrent: '1',
      workImageUrl1: One,
      workImageUrl2: Two,
      workImageUrl3: Three,
      workImageUrl4: Four,
      workImageUrl5: Five,
      workImage1: null,
      workImage2: null,
      workImage3: null,
      workImage4: null,
      workImage5: null,
      workTitle: '',
      workCaption: '',
      workTechnique: '',
      workYear: '',
      workEdition: '',
      workSign: '',
      workFrame: '',
      workHeight: '',
      workWidth: '',
      workDepth: '',
      workGenre: '',
      workSubGenre: '',
      workColorCrimson: false,
      workColorMediumBlue: false,
      workColorForestGreen: false,
      workColorGold: false,
      workColorPurple: false,
      workColorBrown: false,
      workColorBlack: false,
      workColorGrey: false,
      workColorIvory: false,
      workPrice: '',
    }
  }

  async componentWillMount() {
    this.props.getPurchasedHistory(this.props.loginStatus.user_id)

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

  logout = () => this.props.history.push('/logout')

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

    const err = this.props.uploadUserIcon(this.props.loginStatus.uuid, this.state.iconImage)

    this.setState({ iconImage: null })
  }

  primeFormChanged = e => this.setState({ [e.target.name]: e.target.value })

  updateEmail = async () => {
    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 4, position: 'tc', message: '' }

    const message = EmailValidation(this.state.email)
    if (message) {
      body.message = message
      notification.addNotification(body)
      return null
    }

    const err = await this.props.updateEmail(this.props.loginStatus.uuid, this.state.email)

    if (err) {
      body.message = 'メールアドレスの変更に失敗しました'
      notification.addNotification(body)
    }
  }

  updatePassword = async () => {
    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 4, position: 'tc', message: '' }

    const message = TwoPasswordValidation(this.state.oldPassword, this.state.newPassword)
    if (message) {
      body.message = message
      notification.addNotification(body)
      return null
    }

    const err = await this.props.updatePassword(
      this.props.loginStatus.uuid,
      this.state.oldPassword,
      this.state.newPassword
    )

    if (err) {
      body.message = err.response.data.message
      notification.addNotification(body)
      return null
    }

    body.level = 'success'
    body.message = 'パスワードを変更しました'
    notification.addNotification(body)

    this.setState({ oldPassword: '', newPassword: '' })
  }

  // =============================
  // buyer tab
  // =============================

  buyerFormChanged = e => this.setState({ [e.target.name]: e.target.value })

  updateBuyerInfo = async () => {
    const notification = this.notificationSystem.current
    const body = { level: 'error', autoDismiss: 4, position: 'tc', message: '' }

    const state = this.state
    if (!state.firstName || !state.lastName || !state.zipCode || !state.address || !state.phoneNumber) {
      body.message = '*必須項目を入力してください'
      notification.addNotification(body)
      return null
    }

    const data = {
      user_id: this.props.loginStatus.user_id,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      zipcode: this.state.zipCode,
      address: this.state.address,
      phone_number: this.state.phoneNumber,
    }

    const err = await this.props.updateBuyerInfo(this.props.loginStatus.uuid, data)

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
    const body = { level: 'error', autoDismiss: 4, position: 'tc', message: '' }

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
      user_id: this.props.loginStatus.user_id,
      artist_name: this.state.artistName,
      profile: this.state.profile,
      website: this.state.website,
      place: this.state.place,
      birthday: this.state.birthday || null,
      sex: parseInt(this.state.sex, 10),
      bank_name: this.state.bankName,
      bank_code: this.state.bankCode,
      bank_branch_name: this.state.bankBranchName,
      bank_branch_code: this.state.bankBranchCode,
      bank_account_number: this.state.bankAccountNumber,
      bank_account_name: this.state.bankAccountName,
    }

    const err = await this.props.updateArtistInfo(this.props.loginStatus.uuid, data)

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

  workFormChanged = e => {
    let { name, value } = e.target
    if (value === 'false' || value === 'true') value = value === 'true'

    this.setState({ [name]: value })

    if (name === 'workGenre') {
      const [selectedGenre] = this.props.genres.contents.filter(g => g.id === value - 0)
      this.setState({
        selectableSubGenres: selectedGenre.subgenres,
        workSubGenre: '',
      })
    }

    if (name === 'workPrice' && value.length >= 2 && value[0] === '0')
      this.setState({ workPrice: value.slice(1) })
  }

  workImageSelectBtnClicked = () => this.workImageSelectBtnRef.current.click()

  workImageSelected = e => {
    e.preventDefault()

    const f = e.target.files
    if (f.length === 0) return null

    const url = this.createObjectURL(f[0])

    this.setState({
      ['workImage' + this.state.selectOrder]: f[0],
      ['workImageUrl' + this.state.selectOrder]: url
    })

    this.setState({ selectOrder: this.state.selectOrder + 1 })
  }

  workSubImagesClicked = num => this.setState({ workImageUrlCurrent: num })

  resetWorkImages = () => {
    this.setState({
      selectOrder: 1,
      workImageUrlCurrent: '1',
      workImageUrl1: One,
      workImageUrl2: Two,
      workImageUrl3: Three,
      workImageUrl4: Four,
      workImageUrl5: Five,
      workImage1: null,
      workImage2: null,
      workImage3: null,
      workImage4: null,
      workImage5: null,
    })
  }

  resetWorkForm = () => {
    this.setState({
      selectableSubGenres: [],
      selectOrder: 1,
      workImageUrlCurrent: '1',
      workImageUrl1: One,
      workImageUrl2: Two,
      workImageUrl3: Three,
      workImageUrl4: Four,
      workImageUrl5: Five,
      workImage1: null,
      workImage2: null,
      workImage3: null,
      workImage4: null,
      workImage5: null,
      workTitle: '',
      workCaption: '',
      workTechnique: '',
      workYear: '',
      workEdition: '',
      workSign: '',
      workFrame: '',
      workHeight: '',
      workWidth: '',
      workDepth: '',
      workGenre: '',
      workSubGenre: '',
      workColorCrimson: false,
      workColorMediumBlue: false,
      workColorForestGreen: false,
      workColorGold: false,
      workColorPurple: false,
      workColorBrown: false,
      workColorBlack: false,
      workColorGrey: false,
      workColorIvory: false,
      workPrice: '',
    })
  }

  uploadWork = async e => {
    e.preventDefault()
    const notification = this.notificationSystem.current

    const work = new FormData()

    work.append('status', this.props.userDetail.contents.debuted ? '1' : '0')

    work.append('artist', this.props.loginStatus.user_id)
    work.append('name', this.state.workTitle)
    work.append('caption', this.state.workCaption)

    work.append('image1', this.state.workImage1)
    work.append('image2', this.state.workImage2)
    work.append('image3', this.state.workImage3)
    work.append('image4', this.state.workImage4)
    work.append('image5', this.state.workImage5)

    work.append('edition', this.state.workEdition)
    work.append('sign', this.state.workSign)
    work.append('year', this.state.workYear)
    work.append('technique', this.state.workTechnique)
    work.append('frame', this.state.workFrame)

    work.append('height', this.state.workHeight)
    work.append('width', this.state.workWidth)
    work.append('depth', this.state.workDepth)

    work.append('genre', 0)
    work.append('subgenre', 0)

    work.append('crimson', this.state.workColorCrimson)
    work.append('mediumblue', this.state.workColorMediumBlue)
    work.append('forestgreen', this.state.workColorForestGreen)
    work.append('gold', this.state.workColorGold)
    work.append('purple', this.state.workColorPurple)
    work.append('brown', this.state.workColorBrown)
    work.append('black', this.state.workColorBlack)
    work.append('grey', this.state.workColorGrey)
    work.append('ivory', this.state.workColorIvory)

    work.append('price', this.state.workPrice)

    const err = await this.props.uploadWork(work)
    if (err) {
      errorNotificationBody.title = 'エラーID: ' + err.response.data.errorID
      errorNotificationBody.message = err.response.data.message
      notification.addNotification(errorNotificationBody)
      return null
    }

    successNotificationBody.message = '作品をアップロードしました'
    notification.addNotification(successNotificationBody)

    this.resetWorkForm()
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
              logout={this.logout}
            />
          </div>
        )

      case 1:
        return (
          <div className="userDetail__buyer">
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
          <div className="userDetail__artist">
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
              workSubImagesClicked={this.workSubImagesClicked}
              resetWorkImages={this.resetWorkImages}
              buttonRef={this.workImageSelectBtnRef}
              workTitle={this.state.workTitle}
              workCaption={this.state.workCaption}
              workPrice={this.state.workPrice}
              workImageUrlCurrent={this.state.workImageUrlCurrent}
              workImageUrl1={this.state.workImageUrl1}
              workImageUrl2={this.state.workImageUrl2}
              workImageUrl3={this.state.workImageUrl3}
              workImageUrl4={this.state.workImageUrl4}
              workImageUrl5={this.state.workImageUrl5}
              workYear={this.state.workYear}
              workSign={this.state.workSign}
              workTechnique={this.state.workTechnique}
              workEdition={this.state.workEdition}
              workFrame={this.state.workFrame}
              workHeight={this.state.workHeight}
              workWidth={this.state.workWidth}
              workDepth={this.state.workDepth}
              workGenre={this.state.workGenre}
              workSubGenre={this.state.workSubGenre}
              selectableSubGenres={this.state.selectableSubGenres}
              genres={this.props.genres.contents}
              workColorCrimson={this.state.workColorCrimson}
              workColorMediumBlue={this.state.workColorMediumBlue}
              workColorForestGreen={this.state.workColorForestGreen}
              workColorGold={this.state.workColorGold}
              workColorPurple={this.state.workColorPurple}
              workColorBrown={this.state.workColorBrown}
              workColorBlack={this.state.workColorBlack}
              workColorGrey={this.state.workColorGrey}
              workColorIvory={this.state.workColorIvory}
            />
          </div>
        )

      case 4:
        return (
          <div className="userDetail_purchasedHistory">
            <div className="workList">
              <WorkList works={this.props.purchasedHistory.contents} />
            </div>
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
            <UserDetailNav self={this.props.loginStatus} navClicked={this.navClicked} tab={this.state.tab}/>
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
    genres: state.genres,
    purchasedHistory: state.purchasedHistory,
  }),
  dispatch => ({
    updateEmail: (userId, email) => dispatch(updateEmail(userId, email)),
    updatePassword: (userId, oldPassword, newPassword) => dispatch(updatePassword(userId, oldPassword, newPassword)),
    uploadWork: work => dispatch(uploadWork(work)),
    getPurchasedHistory: userId => dispatch(getPurchasedHistory(userId)),
    uploadUserIcon: (id, icon) => dispatch(uploadUserIcon(id, icon)),
    updateBuyerInfo: (userId, data) => dispatch(updateBuyerInfo(userId, data)),
    updateArtistInfo: (userId, data) => dispatch(updateArtistInfo(userId, data)),
  })
)(UserPageContainer)
