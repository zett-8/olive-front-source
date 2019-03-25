import React from 'react'
import PropTypes from 'prop-types'

const userDetailArtist = props => {
  const today = new Date()

  return (
    <React.Fragment>
      <p>artist name</p>
      <span>*</span>
      <input type="text" name="artistName" value={props.artistName} onChange={props.artistFormChanged} />
      <p>profile</p>
      <span>*</span>
      <textarea name="profile" value={props.profile} onChange={props.artistFormChanged} />
      <p>website</p>
      <input type="text" name="website" value={props.website} onChange={props.artistFormChanged} />
      <p>place</p>
      <input type="text" name="place" value={props.place} onChange={props.artistFormChanged} />
      <p>birthday</p>
      <input
        type="date"
        min="1900-01-01"
        max={`${today.getFullYear()}-${
          today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1
        }-${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}`}
        name="birthday"
        value={props.birthday}
        onChange={props.artistFormChanged}
      />
      <p>Sex</p>
      <select name="sex" value={props.sex} onChange={props.artistFormChanged}>
        <option>other</option>
      </select>

      <p>bank name</p>
      <span>*</span>
      <input type="text" name="bankName" value={props.bankName} onChange={props.artistFormChanged} />
      <p>bank code</p>
      <span>*</span>
      <input type="text" name="bankCode" value={props.bankCode} onChange={props.artistFormChanged} />
      <p>bank branch name</p>
      <span>*</span>
      <input type="text" name="bankBranchName" value={props.bankBranchName} onChange={props.artistFormChanged} />
      <p>bank branch code</p>
      <span>*</span>
      <input type="text" name="bankBranchCode" value={props.bankBranchCode} onChange={props.artistFormChanged} />
      <p>bank account number</p>
      <span>*</span>
      <input type="text" name="bankAccountNumber" value={props.bankAccountNumber} onChange={props.artistFormChanged} />
      <p>bank account name</p>
      <span>*</span>
      <input type="text" name="bankAccountName" value={props.bankAccountName} onChange={props.artistFormChanged} />

      <button className="b_btn b_btn__13rem" type="button" onClick={props.updateArtistInfo}>
        save
      </button>
    </React.Fragment>
  )
}

userDetailArtist.propTypes = {
  artistFormChanged: PropTypes.func.isRequired,
  updateArtistInfo: PropTypes.func.isRequired,
  artistName: PropTypes.string,
  profile: PropTypes.string,
  website: PropTypes.string,
  birthday: PropTypes.string,
  sex: PropTypes.number,
  place: PropTypes.string,
  bankName: PropTypes.string,
  bankCode: PropTypes.string,
  bankBranchName: PropTypes.string,
  bankBranchCode: PropTypes.string,
  bankAccountName: PropTypes.string,
  bankAccountNumber: PropTypes.string,
}

export default userDetailArtist
