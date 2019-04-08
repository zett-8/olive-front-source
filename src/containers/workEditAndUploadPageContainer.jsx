import React from 'react'
import { connect } from 'react-redux'
import NotificationSystem from "react-notification-system";

import UserDetailWorkUpload from '../components/workForm'

import { workFormValidation } from '../utils/Validator'
import {errorNotificationBody, notYetNotificationBody, successNotificationBody} from '../utils/notification'
import { uploadWork, updateWork, getWorkDetail, clearWorkDetail } from '../actions/workDetail'

import One from '../assets/1.jpg'
import Two from '../assets/2.jpg'
import Three from '../assets/3.jpg'
import Four from '../assets/4.jpg'
import Five from '../assets/5.jpg'

class WorkEditAndUpload extends React.Component {
  constructor(props) {
    super(props)

    this.notificationSystem = React.createRef()
    this.workImageSelectBtnRef = React.createRef()
    this.createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL

    this.state = {
      edit: false,

      selectableSubGenres: [],
      selectOrder: 1,
      workImageUrlCurrent: '1',
      work: JSON.parse(JSON.stringify(INITIAL_WORK_FORM))
    }
  }

  componentWillMount() { this.setState({ edit: this.props.edit }) }

  async componentDidMount() {
    if (this.state.edit) {
      await this.props.getWorkDetail(this.props.match.params.id)

      const work = this.state.work
      const currentWork = this.props.workDetail.contents

      if (currentWork.sold) this.props.history.push('/')

      const displaceableImages = ['1', '2', '3', '4', '5'].filter((num) => !currentWork['image' + num])

      this.setState({
        selectableSubGenres: currentWork.genre.subgenres,
        selectOrder: displaceableImages[0] || '6',
        displaceableImages
      })

      work.imageUrl1 = currentWork.image1
      work.imageUrl2 = currentWork.image2 || Two
      work.imageUrl3 = currentWork.image3 || Three
      work.imageUrl4 = currentWork.image4 || Four
      work.imageUrl5 = currentWork.image5 || Five
      work.image1 = currentWork.image1
      work.image2 = currentWork.image2
      work.image3 = currentWork.image3
      work.image4 = currentWork.image4
      work.image5 = currentWork.image5
      work.title = currentWork.title
      work.caption = currentWork.caption
      work.technique = currentWork.technique
      work.year = currentWork.year
      work.edition = currentWork.edition
      work.sign = currentWork.sign
      work.frame = currentWork.frame
      work.height = String(currentWork.height)
      work.width = String(currentWork.width)
      work.depth = String(currentWork.depth)
      work.genre = String(currentWork.genre.id)
      work.subgenre = String(currentWork.subgenre.id)
      work.price = String(currentWork.price)

      Object.keys(currentWork.colors).forEach(colorName => {
        work[colorName] = currentWork.colors[colorName]
      })

      this.setState({ work })
    }
  }

  componentWillUnmount() { this.props.clearWorkDetail() }

  workSubImagesClicked = num => this.setState({ workImageUrlCurrent: num })

  workImageSelectBtnClicked = () => this.workImageSelectBtnRef.current.click()

  workImageSelected = e => {
    const f = e.target.files
    if (f.length === 0) return null

    const url = this.createObjectURL(f[0])

    const work = this.state.work
    work['image' + this.state.selectOrder] = f[0]
    work['imageUrl' + this.state.selectOrder] = url

    this.setState({ work, selectOrder: this.state.selectOrder + 1 })
  }

  resetWorkImages = () => {
    const work = this.state.work

    if (this.state.edit) {
      this.state.displaceableImages.forEach(num => {
        work['image' + num] = null
        work['imageUrl' + num] = INITIAL_WORK_FORM['imageUrl' + num]
      })

      this.setState({ work, selectOrder: this.state.displaceableImages[0] || '6', workImageUrlCurrent: '1' })
      return null
    }

    work.imageUrl1 = One
    work.imageUrl2 = Two
    work.imageUrl3 = Three
    work.imageUrl4 = Four
    work.imageUrl5 = Five
    work.image1 = null
    work.image2 = null
    work.image3 = null
    work.image4 = null
    work.image5 = null

    this.setState({ work, selectOrder: 1, workImageUrlCurrent: '1' })
  }

  resetWorkForm = () => {
    this.setState({
      selectableSubGenres: [],
      selectOrder: 1,
      workImageUrlCurrent: '1',
      work: JSON.parse(JSON.stringify(INITIAL_WORK_FORM))
    })
  }

  workFormChanged = e => {
    let { name, value } = e.target
    if (value === 'false' || value === 'true') value = value === 'true'

    const work = this.state.work
    work[name] = value

    if (name === 'genre') {
      const [selectedGenre] = this.props.genres.contents.filter(g => g.id === value - 0)
      this.setState({ selectableSubGenres: selectedGenre.subgenres })
      work.subgenre = ''
    }

    if (['price', 'height', 'width', 'depth' ].indexOf(name) >= 0 && value.length >= 2 && value[0] === '0')
      work[name] = value.slice(1)

    this.setState({ work })
  }

  updateWork = async () => {
    const message = workFormValidation(this.state.work)

    if (message) {
      notYetNotificationBody.message = message
      this.notificationSystem.current.addNotification(notYetNotificationBody)
      return null
    }

    const work = new FormData()

    Object.keys(this.state.work).forEach(key => work.append(key, this.state.work[key]))

    ;['1', '2', '3', '4', '5'].forEach(num => {
      work.delete('image' + num)
      work.delete('imageUrl' + num)
    })

    if (this.state.displaceableImages !== '6'){
      this.state.displaceableImages.forEach(num => work.append('image' + num, this.state.work['image' + num]))
    }

    const err = await this.props.updateWork(this.props.workDetail.contents.id, work)

    if (err) {
      this.notificationSystem.current.addNotification(errorNotificationBody)
      return null
    }

    successNotificationBody.title = 'Saved New Changes!'
    this.notificationSystem.current.addNotification(successNotificationBody)
  }

  uploadWork = async () => {
    const message = workFormValidation(this.state.work)

    if (message) {
      notYetNotificationBody.message = message
      this.notificationSystem.current.addNotification(notYetNotificationBody)
      return null
    }

    const work = new FormData()

    work.append('status', this.props.userDetail.contents.debuted ? '1' : '0')
    work.append('artist', this.props.loginStatus.user_id)
    Object.keys(this.state.work).forEach(key => work.append(key, this.state.work[key]))

    const err = await this.props.uploadWork(work)

    if (err) {
      this.notificationSystem.current.addNotification(errorNotificationBody)
      return null
    }

    successNotificationBody.message = '作品をアップロードしました'
    this.notificationSystem.current.addNotification(successNotificationBody)

    this.resetWorkForm()
  }

  render() {
    return (
      <React.Fragment>
        <NotificationSystem ref={this.notificationSystem} />
        <div className="workEditAndUpload">
          <UserDetailWorkUpload
            upload={this.uploadWork}
            update={this.updateWork}
            workImageSelectBtnClicked={this.workImageSelectBtnClicked}
            workImageSelected={this.workImageSelected}
            workFormChanged={this.workFormChanged}
            workSubImagesClicked={this.workSubImagesClicked}
            resetWorkImages={this.resetWorkImages}
            buttonRef={this.workImageSelectBtnRef}
            genres={this.props.genres.contents}
            selectableSubGenres={this.state.selectableSubGenres}
            workImageUrlCurrent={this.state.workImageUrlCurrent}
            work={this.state.work}
            edit={this.state.edit}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    loginStatus: state.loginStatus,
    genres: state.genres,
    userDetail: state.userDetail,
    workDetail: state.workDetail
  }),
  dispatch => ({
    uploadWork: work => dispatch(uploadWork(work)),
    updateWork: (id, work) => dispatch(updateWork(id, work)),
    getWorkDetail: id => dispatch(getWorkDetail(id)),
    clearWorkDetail: () => dispatch(clearWorkDetail())
  })
)(WorkEditAndUpload)

const INITIAL_WORK_FORM = {
  imageUrl1: One,
  imageUrl2: Two,
  imageUrl3: Three,
  imageUrl4: Four,
  imageUrl5: Five,
  image1: null,
  image2: null,
  image3: null,
  image4: null,
  image5: null,
  title: '',
  caption: '',
  technique: '',
  year: '',
  edition: '',
  sign: '',
  frame: '',
  height: '',
  width: '',
  depth: '',
  genre: '',
  subgenre: '',
  price: '',

  crimson: false,
  mediumblue: false,
  forestgreen: false,
  gold: false,
  purple: false,
  brown: false,
  black: false,
  grey: false,
  ivory: false,
}
