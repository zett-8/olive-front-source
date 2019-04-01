import React from 'react'
import PropTypes from 'prop-types'

import { BANK_INFO } from '../../utils/settings'

const dealProgress = props => {
  const messageRenderer = () => {
    switch (`${props.role}-phase-${props.work.status}`) {
      case 'buyer-phase-2':
        return (
          <React.Fragment>
            <p className="deal__progress__message__main">
              <span className="circle" />
              支払をしてください
            </p>
            <span>作品が購入されました。支払を完了させてください</span>
            {BANK_INFO()}
          </React.Fragment>
        )

      case 'buyer-phase-3':
        return (
          <React.Fragment>
            <p className="deal__progress__message__main">
              <span className="circle" />
              発送をお待ちください
            </p>
            <span>支払を完了しました。アーティストの発送をお待ちください</span>
          </React.Fragment>
        )

      case 'buyer-phase-4':
        return (
          <React.Fragment>
            <p className="deal__progress__message__main">
              <span className="circle" />
              発送されました。到着までしばらくお待ちください
            </p>
            <span>作品がアーティストから発送されました。到着までしばらくお待ちください</span>
          </React.Fragment>
        )

      case 'buyer-phase-5':
        return (
          <p className="deal__progress__message__main">
            <span className="circle" />
            取引終了です
          </p>
        )

      case 'artist-phase-2':
        return (
          <React.Fragment>
            <p className="deal__progress__message__main">
              <span className="circle" />
              購入者の支払いを待っています
            </p>
            <span>作品が購入されました。支払が確定されるまでお待ちください</span>
          </React.Fragment>
        )

      case 'artist-phase-3':
        return (
          <React.Fragment>
            <p className="deal__progress__message__main">
              <span className="circle" />
              支払を確認しました。発送してください
            </p>
            <span>支払確定しました。購入者の住所を確認して作品を発送してください。</span>
          </React.Fragment>
        )

      case 'artist-phase-4':
        return (
          <React.Fragment>
            <p className="deal__progress__message__main">
              <span className="circle" />
              購入者の受け取り連絡をお待ちください
            </p>
            <span>購入者から受け取り連絡があるまでお待ちください。トッラキング情報などがある場合はメッセージにて伝えてください</span>
          </React.Fragment>
        )

      case 'artist-phase-5':
        return (
          <p className="deal__progress__message__main">
            <span className="circle" />
            取引終了です
          </p>
        )

      default:
        return null
    }
  }

  const buttonRenderer = () => {
    switch (`${props.role}-phase-${props.work.status}`) {
      case 'buyer-phase-2':
        return (
          <button className="b_btn b_btn__30rem" type="button" onClick={props.notifyPayment}>
            支払連絡をする
          </button>
        )

      case 'buyer-phase-4':
        return (
          <button className="b_btn b_btn__30rem" type="button" onClick={props.notifyReception}>
            受取連絡をする
          </button>
        )

      case 'artist-phase-3':
        return (
          <button className="b_btn b_btn__30rem" type="button" onClick={props.notifyShipment}>
            発送連絡をする
          </button>
        )

      default:
        return null
    }
  }

  return (
    <React.Fragment>
      <div className="deal__progress__message">{messageRenderer()}</div>
      <div className="deal__progress__visual">
        <div className={`deal__progress__visual__phaseLine${props.work.status}`}>
          <p className="circle circle1" />
          <p className="line line1" />
          <p className="line line2" />
          <p className="circle circle2" />
          <p className="line line3" />
          <p className="line line4" />
          <p className="circle circle3" />
          <p className="line line5" />
          <p className="line line6" />
          <p className="circle circle4" />
        </div>
        <div className="deal__progress__visual__phaseGuide">
          <p>取引開始</p>
          <p />
          <p>支払済み</p>
          <p />
          <p>発送済み</p>
          <p />
          <p>取引完了</p>
        </div>
        {buttonRenderer()}
      </div>
    </React.Fragment>
  )
}

dealProgress.propTypes = {
  role: PropTypes.string, // eslint-disable-line
  work: PropTypes.shape({
    status: PropTypes.number,
  }),
  notifyPayment: PropTypes.func.isRequired, // eslint-disable-line
  notifyShipment: PropTypes.func.isRequired, // eslint-disable-line
  notifyReception: PropTypes.func.isRequired, // eslint-disable-line
}

export default dealProgress
