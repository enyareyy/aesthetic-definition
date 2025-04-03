import React from 'react'
import './Footer.css'
import FaceBook from '../../assets/footerFB.png'
import Twitter from '../../assets/footerX.png'
import Google from '../../assets/footerGG.png'
import Foo from '../../assets/footer.png'
import BE from '../../assets/footerBE.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="soc-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FaceBook} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <img src={Google} alt="Google" />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={Foo} alt="Foo" />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <img src={BE} alt="Behance" />
          </a>            
        </div>
        <p>
        @2014 AESTHETIC THEME.ALL RIGHTS RESERVED
        </p>
    </div>
  )
}

export default Footer