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
            <img src={FaceBook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Google} alt="" />
            <img src={Foo} alt="" />
            <img src={BE} alt="" />
            
        </div>
        <p>
        @2014 AESTHETIC THEME.ALL RIGHTS RESERVED
        </p>
    </div>
  )
}

export default Footer