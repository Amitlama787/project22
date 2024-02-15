import React from 'react'
import './Comp.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <section className='border terf'>
       <div className="containerfluid">
        <div className="row black">
          <div className="col-lg-12">
           <div className='d-flex gap-4 justify-content-center'>
           <a href="https://facebook.com" target='_blank'><div className='icons'><i class="bi bi-facebook"></i></div></a> 
            <a href="https://twitter.com" target='_blank'><div className='icons'><i class="bi bi-twitter"></i></div></a>
           <a href="https://instagram.com" target='_blank'><div className='icons'><i class="bi bi-instagram"></i></div></a> 
           <a href="https://youtube.com" target='_blank'> <div className="icons"><i class="bi bi-youtube"></i></div></a>
            
           </div>
           <div className="col-lg-12 py-3">
            <p className='text-light text-center'>Copyright 2024 © All rights Reserved. Ginger Healthcare Private Ltd. New Delhi, India</p>
           </div>
           <div className="col-lg-12">
            <div className='text-light d-flex gap-5 justify-content-center'>
              <Link to="/terms"><div className=''><p className='terms'>Terms and conditions</p></div></Link>
              <Link to="/privacy"><div className=''><p className='term'>Privacy Policy</p></div> </Link>
            </div>
           
            <div>
             
            </div>
           </div>

           <div className="col-lg-12 my-5">
            <div>
              <img src="https://ghealth121.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt="" />
              <span className='text-light'>English</span>
            </div>
           </div>
          </div>
        </div>
       </div>
      </section>
    </>
  )
}

export default Footer
