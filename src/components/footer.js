import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <p>About</p>
        <p>Help</p>
        <p>Guidelines</p>
        <p>Privacy</p>
        <p>
          <Link to="/new">Contact</Link>
        </p>
      </div>
      <p className="footer__copy">&copy; 2019 Olive. All rights reserved.</p>
    </footer>
  )
}

export default footer
