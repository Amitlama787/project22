import React from 'react'
import Hospi from '../Data/Data'
import './Pages.css'
import { Link } from 'react-router-dom'

function Hospitalby(props) {
    let dd=Hospi.filter((a)=>a.category==props.title)
  return (
    <>
     <section className='py-3 '>
        <div className="container">
            <div className="row">
              <div className="col-lg-12 fw-bold">Hospitals OF {props.title}</div>
                {dd.map((a)=>(
           <div className="col-lg-4 py-4">
             <div className='hov'>
                  <img className='image shadow border' src={a.image} alt="" />            
           </div>    
         <Link to={`/details/${a.id}`}><div className='btnR text-center'>Read More</div>    </Link>    
           </div>
                  
                ))}
                
            </div>
        </div>
     </section>
    </>
  )
}

export default Hospitalby
