import React from 'react'
import { connect } from 'react-redux'

import UserDetail from '../components/userDetail'
import UserDetailNav from '../components/userDetail_nav'
import UserDetailPrime from '../components/userDetail_prime'
import UserDetailWorkUpload from '../components/userDetail_workUpload'
import Uploader from '../components/uploader'

import { uploadWork } from '../actions/workDetail'
import { getUserDetail } from '../actions/userDetail'
import { uploadUserIcon } from '../actions/userDetail'
import { logout } from '../actions/loginStatus'

class UserPageContainer extends React.Component {
  constructor(props) {
    super(props)

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
      iconImage: null,
      tab: 0,

      selectOrder:1,
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

  componentDidMount() {
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
    this.iconRef.current.src = url
  }

  uploadUserIcon = e => {
    e.preventDefault()

    if (this.state.iconImage === null) return

    const err = this.props.uploadUserIcon(this.props.loginStatus.user_id, this.state.iconImage)

    this.setState({ iconImage: null })
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
          <div className="userDetail_prime">
            <UserDetailPrime
              self={this.props.loginStatus}
              detail={this.props.userDetail.contents}
              userIconSelectBtnClicked={this.userIconSelectBtnClicked}
              userIconSelected={this.userIconSelected}
              upload={this.uploadUserIcon}
              iconRef={this.iconRef}
              buttonRef={this.userIconSelectBtnRef}
            />
          </div>
        )

      case 1:
        return (
          <div className="userDetail_workUpload">
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

      case 2:
        return (
          <React.Fragment>
            <UserDetail detail={this.props.userDetail.contents} handleLogout={this.logout} />
            <Uploader />
          </React.Fragment>
        )
    }
  }

  render() {
    if (this.props.userDetail.pristine) return null

    return (
      <div className="userDetail">
        <div className="userDetail__nav">
          <UserDetailNav navClicked={this.navClicked} />
        </div>
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
    uploadWork: work => dispatch(uploadWork(work)),
    getUserDetail: id => dispatch(getUserDetail(id)),
    uploadUserIcon: (id, icon) => dispatch(uploadUserIcon(id, icon)),
  })
)(UserPageContainer)
