import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'

import WorkEditAndUpload from './workEditAndUploadPageContainer'
import UserDetailOther from '../components/userDetail/userDetail_other'
import UserDetailNav from '../components/userDetail/userDetail_nav'
import UserDetailPrime from '../components/userDetail/userDetail_prime'
import UserDetailBuyer from '../components/userDetail/userDetail_buyer'
import UserDetailArtist from '../components/userDetail/userDetail_artist'
import WorkList from '../components/workList'

import { getPurchasedHistory } from '../actions/workList'
import { uploadUserIcon, updateBuyerInfo, updateArtistInfo, getUserDetail } from '../actions/userDetail'
import { updateEmail, updatePassword } from '../actions/loginStatus'
import { changeUserTab } from '../actions/userPageTab'
import {
  errorNotificationBody,
  notYetNotificationBody,
  oopsNotificationBody,
  successNotificationBody
} from '../utils/notification'
import { EmailValidation, TwoPasswordValidation } from '../utils/Validator'

class UserPageContainer extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()

    this.createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL

    this.iconRef = React.createRef()
    this.userIconSelectBtnRef = React.createRef()

    this.state = {
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
      selectableBanks: [],
      selectableBranches: [],
      searchBankInput: '',
      searchBranchInput: '',
    }
  }

  async componentWillMount() {
    this.setCurrentUserInfo()
    this.props.getPurchasedHistory(this.props.loginStatus.user_id)
  }

  componentDidMount() {
    if (this.props.userDetail.pristine) this.props.getUserDetail(this.props.loginStatus.token, this.props.loginStatus.uuid)
  }

  componentDidUpdate(prevProps) {
    if (this.props.userDetail.contents !== prevProps.userDetail.contents) this.setCurrentUserInfo()
  }

  setCurrentUserInfo = () => {
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

  navClicked = num => this.props.changeUserTab(num)

  goToMyPage = () => this.props.history.push(`/artist/${this.props.userDetail.contents.id}`)

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

  uploadUserIcon = async e => {
    e.preventDefault()

    if (this.state.iconImage === null) return

    const err = await this.props.uploadUserIcon(this.props.loginStatus.token, this.props.loginStatus.uuid, this.state.iconImage)

    if (err) {
      this.notificationSystem.current.addNotification(errorNotificationBody)
      return null
    }

    successNotificationBody.title = 'Updated User Icon!'
    this.notificationSystem.current.addNotification(successNotificationBody)
    this.setState({ iconImage: null })
  }

  primeFormChanged = e => this.setState({ [e.target.name]: e.target.value })

  updateEmail = async () => {
    const message = EmailValidation(this.state.email)

    if (message) {
      oopsNotificationBody.message = message
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      return null
    }

    const err = await this.props.updateEmail(this.props.loginStatus.token, this.props.loginStatus.uuid, this.state.email)

    if (err) this.notificationSystem.current.addNotification(errorNotificationBody)
  }

  updatePassword = async () => {
    const message = TwoPasswordValidation(this.state.oldPassword, this.state.newPassword)

    if (message) {
      oopsNotificationBody.message = message
      this.notificationSystem.current.addNotification(oopsNotificationBody)
      return null
    }

    const err = await this.props.updatePassword(
      this.props.loginStatus.token,
      this.props.loginStatus.uuid,
      this.state.oldPassword,
      this.state.newPassword
    )

    if (err) {
      this.notificationSystem.current.addNotification(errorNotificationBody)
      return null
    }

    successNotificationBody.title = 'Updated Password!'
    this.notificationSystem.current.addNotification(successNotificationBody)

    this.setState({ oldPassword: '', newPassword: '' })
  }

  // =============================
  // buyer tab
  // =============================

  buyerFormChanged = e => this.setState({ [e.target.name]: e.target.value })

  updateBuyerInfo = async () => {
    const state = this.state

    if (!state.firstName || !state.lastName || !state.zipCode || !state.address || !state.phoneNumber) {
      notYetNotificationBody.message = '*必須項目を入力してください'
      this.notificationSystem.current.addNotification(notYetNotificationBody)
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

    const err = await this.props.updateBuyerInfo(this.props.loginStatus.token, this.props.loginStatus.uuid, data)

    if (err) {
      this.notificationSystem.current.addNotification(errorNotificationBody)
      return null
    }

    successNotificationBody.title = 'Updated Buyer Info!'
    this.notificationSystem.current.addNotification(successNotificationBody)
  }

  // =============================
  // artist tab
  // =============================

  artistFormChanged = e => this.setState({ [e.target.name]: e.target.value })

  searchBanks = async e => {
    e.preventDefault()

    if (e.target.name === 'Bank') {
      const banks = await axios.get(`https://bank.teraren.com/banks/search.json?name=${this.state.searchBankInput.slice(-2) === '銀行' ? this.state.searchBankInput.slice(0, -2) : this.state.searchBankInput}`).then(res => res.data)
      this.setState({ selectableBanks: banks })

      if (this.state.selectableBanks.length) {
        this.setState({
          bankName: this.state.selectableBanks[0].name,
          bankCode: this.state.selectableBanks[0].code,
        })

        const branches = await axios.get(`https://bank.teraren.com/banks/${this.state.bankCode}/branches.json`).then(res => res.data)

        if (branches.length) {
          this.setState({
            selectableBranches: branches,
            bankBranchName: branches[0].name,
            bankBranchCode: branches[0].code
          })
        }
      }

      return null
    }

    if (e.target.name === 'Branch') {
      const branches = await axios.get(`https://bank.teraren.com/banks/${this.state.bankCode}/branches/search.json?name=${this.state.searchBranchInput}`).then(res => res.data)
      if (branches.length) {
        this.setState({
          selectableBranches: branches,
          bankBranchName: branches[0].name,
          bankBranchCode: branches[0].code
        })
      }
    }
  }

  banksWasSelected = async e => {
    if (e.target.name === 'bank') {
      const [bankName, bankCode] = e.target.value.split('-')
      this.setState({ bankName, bankCode, selectableBranches: [] })

      const branches = await axios.get(`https://bank.teraren.com/banks/${bankCode}/branches.json`).then(res => res.data)
      this.setState({
        selectableBranches: branches,
        bankBranchName: branches[0].name,
        bankBranchCode: branches[0].code
      })
      return null
    }

    if (e.target.name === 'branch') {
      const [bankBranchName, bankBranchCode] = e.target.value.split('-')
      this.setState({ bankBranchName, bankBranchCode })
    }
  }

  handleBankInfoInput = e => this.setState({ [`search${e.target.name}Input`]: e.target.value })

  updateArtistInfo = async () => {
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
      notYetNotificationBody.message = '*必須項目を入力してください'
      this.notificationSystem.current.addNotification(notYetNotificationBody)
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

    const err = await this.props.updateArtistInfo(this.props.loginStatus.token, this.props.loginStatus.uuid, data)

    if (err) {
      this.notificationSystem.current.addNotification(errorNotificationBody)
      return null
    }

    successNotificationBody.title = 'Updated Artist Info!'
    this.notificationSystem.current.addNotification(successNotificationBody)
  }

  tabContents = () => {
    switch (this.props.userTab.num) {
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
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              zipCode={this.state.zipCode}
              address={this.state.address}
              phoneNumber={this.state.phoneNumber}
              buyerFormChanged={this.buyerFormChanged}
              updateBuyerInfo={this.updateBuyerInfo}
              logout={this.logout}
            />
          </div>
        )

      case 1:
        return (
          <div className="userDetail_purchasedHistory">
            <WorkList works={this.props.workList.purchasedWorks.contents} />
          </div>
        )

      case 2:
        return (
          <div className="userDetail__artist">
            <UserDetailArtist
              readyAsArtist={this.props.userDetail.contents.ready_as_artist}
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
              selectableBanks={this.state.selectableBanks}
              selectableBranches={this.state.selectableBranches}
              searchBanks={this.searchBanks}
              searchBankInput={this.state.searchBankInput}
              handleBankInfoInput={this.handleBankInfoInput}
              banksWasSelected={this.banksWasSelected}
              searchBranchInput={this.state.searchBranchInput}
              artistFormChanged={this.artistFormChanged}
              updateArtistInfo={this.updateArtistInfo}
            />
          </div>
        )

      case 3:
        return <div><WorkEditAndUpload mypage={true} edit={false} /></div>


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
          <div className="userDetail__navWrapper">
            <div className="userDetail__nav">
              <UserDetailNav
                self={this.props.loginStatus}
                navClicked={this.navClicked}
                tab={this.props.userTab.num}
                debuted={this.props.userDetail.contents.debuted}
                goToMyPage={this.goToArtistPage}
                logout={this.logout}
              />
            </div>
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
    workList: state.workList,
    userTab: state.userTab
  }),
  dispatch => ({
    getPurchasedHistory: (user_id) => dispatch(getPurchasedHistory(user_id)),
    getUserDetail: (token, uuid) => dispatch(getUserDetail(token, uuid)),
    updateEmail: (token, userId, email) => dispatch(updateEmail(token, userId, email)),
    updatePassword: (token, userId, oldPassword, newPassword) => dispatch(updatePassword(token, userId, oldPassword, newPassword)),
    uploadUserIcon: (token, id, icon) => dispatch(uploadUserIcon(token, id, icon)),
    updateBuyerInfo: (token, userId, data) => dispatch(updateBuyerInfo(token, userId, data)),
    updateArtistInfo: (token, userId, data) => dispatch(updateArtistInfo(token, userId, data)),
    changeUserTab: num => dispatch(changeUserTab(num))
  })
)(UserPageContainer)

