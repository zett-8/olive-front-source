import React from 'react'

class Uploader extends React.Component {
  constructor(props) {
    super(props)

    this.createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL
    this.state = {
      image: '',
    }
  }

  imageChange = e => {
    e.preventDefault()
    const f = e.target.files
    const url = f.length === 0 ? '' : this.createObjectURL(f[0])

    this.setState({ image: url })
  }

  upload = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt="" />
        <form onSubmit={this.upload}>
          <input type="file" onChange={this.imageChange} />
          <button type="submit">upload</button>
        </form>
      </div>
    )
  }
}

export default Uploader
