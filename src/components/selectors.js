import React from 'react'

const selectors = () => {
  return (
    <div id="selectors">
      <form>
        <div id="sizeSelector">
          <p>size:</p>
          <select name="size">
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </select>
        </div>

        <div id="colorSelector">
          <p>color:</p>
          <select name="color">
            <option>a</option>
            <option>b</option>
            <option>c</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default selectors
