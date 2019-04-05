import React from 'react'
import PropTypes from 'prop-types'

const userDetailArtist = props => {
  const today = new Date()

  return (
    <div>
      <p className="typ_form_label">* Artist name</p>
      <input
        className="input"
        type="text"
        name="artistName"
        value={props.artistName}
        onChange={props.artistFormChanged}
      />

      <p className="typ_form_label">* Profile</p>
      <textarea className="text_input" name="profile" value={props.profile} onChange={props.artistFormChanged} />

      <p className="typ_form_label">Website</p>
      <input className="input" type="text" name="website" value={props.website} onChange={props.artistFormChanged} />
      <p className="typ_form_label">Place</p>
      <input className="input" type="text" name="place" value={props.place} onChange={props.artistFormChanged} />
      <p className="typ_form_label">Birthday</p>
      <input
        className="input"
        type="date"
        min="1900-01-01"
        max={`${today.getFullYear()}-${
          today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1
        }-${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}`}
        name="birthday"
        value={props.birthday}
        onChange={props.artistFormChanged}
      />

      <p className="typ_form_label">Sex</p>
      <div className="select">
        <select name="sex" value={props.sex} onChange={props.artistFormChanged}>
          <option value={0}>Other</option>
          <option value={1}>Man</option>
          <option value={2}>Woman</option>
        </select>
      </div>

      <p className="typ_form_label" style={{ marginTop: '2.3rem' }}>Bank</p>
      <div className="searchSelector">
        <form name="Bank" onSubmit={props.searchBanks}>
          <input name="Bank" value={props.searchBankInput} onChange={props.handleBankInfoInput} />
          <button type="submit">Search</button>
        </form>
        <div className="select">
          <select name="bank" value={`${props.bankName}-${props.bankCode}`} onChange={props.banksWasSelected}>
            {props.selectableBanks.map(bank =>
              <option key={bank.code} value={`${bank.name}-${bank.code}`}>{bank.name}</option>
            )}
          </select>
        </div>
      </div>
      <input
        className="input"
        readOnly={true}
        type="text"
        name="bankInfo"
        value={props.bankName ? `${props.bankName} (${props.bankCode})` : ''}
      />

      <p className="typ_form_label">Bank branch</p>
      <div className="searchSelector">
        <form name="Branch" onSubmit={props.searchBanks}>
          <input name="Branch" value={props.searchBranchInput} onChange={props.handleBankInfoInput} />
          <button type="submit">Search</button>
        </form>
        <div className="select">
          <select name="branch" value={`${props.bankBranchName}-${props.bankBranchCode}`} onChange={props.banksWasSelected}>
            {props.selectableBranches.map(branch =>
              <option key={branch.code} value={`${branch.name}-${branch.code}`}>{branch.name}</option>
            )}
          </select>
        </div>
      </div>
      <input
        className="input"
        readOnly={true}
        type="text"
        name="bankBranchInfo"
        value={props.bankBranchName ? `${props.bankBranchName} (${props.bankBranchCode})` : ''}
      />

      <p className="typ_form_label">Bank account number</p>
      <input
        className="input"
        type="number"
        name="bankAccountNumber"
        value={props.bankAccountNumber}
        onChange={props.artistFormChanged}
      />
      <p className="typ_form_label">Bank account name</p>
      <input
        className="input"
        type="text"
        name="bankAccountName"
        value={props.bankAccountName}
        onChange={props.artistFormChanged}
      />

      <button className="b_btn b_btn__13rem" type="button" onClick={props.updateArtistInfo}>
        Save
      </button>
    </div>
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
  selectableBanks: PropTypes.arrayOf(PropTypes.object),
  selectableBranches: PropTypes.arrayOf(PropTypes.object),
  searchBanks: PropTypes.func.isRequired,
  searchBankInput: PropTypes.string,
  searchBranchInput: PropTypes.string,
  banksWasSelected: PropTypes.func.isRequired,
  handleBankInfoInput: PropTypes.func.isRequired,
}

export default userDetailArtist
