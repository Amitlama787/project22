import React from 'react'
import { useParams } from 'react-router-dom'
import Hospi from '../Data/Data'

function Details() {
  let {cid}=useParams()
  let cc=Hospi.find((a)=> a.id==cid)
  return (
    <>
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">

              <div>
               <img className='opimg shadow' src={cc.image} alt="" />
              </div>
            </div>


            <div className="col-lg-4 offset-4 cola">

              <div>
                <div className='intro '>
              <span className='text-danger fw-bold'> Description:</span> {cc.Introduction}
                </div>

                <div className='py-3 '>
                <span className='text-danger '> Address:</span> {cc.adress}
                <div><span className='text-danger'> Phone Number:</span> {cc.phone}</div>
                </div>

                
                <div>

                </div>
              </div>
           
       
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Details
