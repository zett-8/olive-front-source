import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <p className="typ_footer"><Link to="/about">About</Link></p>
        <p className="typ_footer"><Link to="/help">Help</Link></p>
        <p className="typ_footer"><Link to="/guidelines">Guidelines</Link></p>
        <p className="typ_footer"><Link to="/privacy">Privacy</Link></p>
        <p className="typ_footer">
          <Link to="/contact">Contact</Link>
        </p>
      </div>
      <p className="typ_footer_copy footer__copy">&copy; 2019 Olive. All rights reserved.</p>
    </footer>
  )
}

export default footer
