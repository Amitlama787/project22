import React from 'react'
import './Pages.css'

function Contactus() {
  return (
    <>
      <section className='py-5 my-5'>
        <div className="container">
            
          <div className="col-lg-12 ">
          <div className='order '>
         <img className='pic' src="https://ghealth121.com/wp-content/uploads/2021/01/patient-counselor-icon-2.jpg" alt="" />
            
        
            </div>
          </div>

          <div className='rel lh-lg text-light'> 
             <div>
            <span className=' text-center'><h4>Contact Us</h4></span>
            <p className='text-center'> Speak to a Patient Counselor | Get Free Medical Opinion & Estimate | Book Priority Appointment <br />
        <a href="https://whatsapp:9869858656"> <button className='btnlo'>Chat on WhatsApp!</button> </a>  
            </p>
            
          </div>
             </div>

             <div className="row lh-lg">
                <div className="col-lg-12">
                    <div>
                        <span><h1 className='darkblue text-center'>Geolocation</h1></span>

                    </div>
                </div>
                <div className="col-lg-12 py-5 my-5">
                    <div>

                   <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14127.630099057076!2d85.28404258782965!3d27.720141363924437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sswoyambh!5e0!3m2!1sen!2snp!4v1707470984629!5m2!1sen!2snp" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                </div>

                <div className="col-lg-12">
                    <div className='text-center'>
                        <span><h1 className='darkblue'>Reach us</h1></span>
                      <span className='d-flex justify-content-center'> <p className='fw-bold'>Address:</p> <span>108, Himalaya Palace, 65, Vijay Block, Laxmi Nagar, New Delhi, Delhi 110092

</span> </span> 

<span className='d-flex justify-content-center'> <p className='fw-bold'>Phone:</p> <span>+91 9811829528

</span> </span>     <span className='d-flex justify-content-center'> <p className='fw-bold'>Email:</p>
 <span >
    <a href="mailto:lamit6763@gmail.com"><p className='text-danger'> lamit6763@gmail.com</p></a>

</span> </span> 
                    </div>

                    
                </div>
             </div>

        </div>
      </section>
    </>
  )
}

export default Contactus
