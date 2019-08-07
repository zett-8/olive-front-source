import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <p className="typ_footer"><Link to="/about">About</Link></p>
        <p className="typ_footer"><Link to="/faq">FAQ</Link></p>
        <p className="typ_footer"><Link to="/terms">Terms</Link></p>
        <p className="typ_footer"><Link to="/privacy">Privacy</Link></p>
        <p className="typ_footer"><a href="https://twitter.com/olive_gallery" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <p className="typ_footer"><a href="https://www.facebook.com/Olive-473729523378839" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        <p className="typ_footer"><a href="https://www.instagram.com/olive_art_gallery" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p className="typ_footer"><Link to="/contact">Contact</Link></p>
      </div>
      <p className="typ_footer_copy footer__copy">&copy; 2019 Olive - by noon inc.</p>
    </footer>
  )
}

export default footer
