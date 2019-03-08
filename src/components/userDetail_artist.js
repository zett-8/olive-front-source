import React from 'react'

const userDetailArtist = () => {
  const today = new Date()
  return (
    <form onSubmit={e => e.preventDefault()}>
      artist name
      <input type="text" name="artist_name" />
      profile
      <textarea name="profile" />
      website
      <input type="text" name="website" />
      place
      <input type="text" name="place" />
      birthday
      <input
        type="date"
        min="1900-01-01"
        max={`${today.getFullYear()}-${today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1}-${
          today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
        }`}
        name="birthday"
      />
      <select name="sex">
        <option>other</option>
      </select>
      <input type="text" name="bank_name" />
      <input type="text" name="bank_code" />
      <input type="text" name="bank_branch_name" />
      <input type="text" name="bank_branch_code" />
      <input type="text" name="bank_account_number" />
      <input type="text" name="bank_account_name" />
      <button type="submit">save</button>
    </form>
  )
}

export default userDetailArtist
