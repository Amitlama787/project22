import React from 'react'
import './Comp.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'


import Aboutus from '../Pages/Aboutus'
import Contactus from '../Pages/Contactus'
import Hospital from '../Pages/Hospital'
import Details from '../Pages/Details'
import Prev from '../Pages/Prev'
import Blog from '../Pages/Blog'
import Terms from '../Pages/Terms'
import Privacy from '../Pages/Privacy'

function Header() {
    return (
        <>
            <header className='px-1 hed mx-auto d-lg-block d-none'>
                <div className="containerfluid ">
                    <div className="row blue align-items-center px-3 ">
                        <div className="col-lg-1 ">
                            <img src="https://sangalotech.com/html/10/assets/images/logo.svg" alt="" />
                        </div>
                        <div className="col-lg-7 d-flex gap-1 offset-4">
                            <nav className=''>
                                <ul className='d-flex gap-4'>
                                    <Link className='' to="/"><li>Home</li></Link>
                                    <Link to="/aboutus"><li>
                                        About</li></Link>
                                    <Link to="/prevention"><li>Prevention</li></Link>
                                    <Link to="/blog"><li>Blog</li></Link>
                                    <Link to="/hospital/"><li>Best Hospital</li></Link>
                                    <Link to="/contactus"><li>Contact</li></Link>
                                </ul>
                            </nav>
                            <div><p className='text-light mx-5 '>ARE YOU SICK</p></div>
                        </div>

                    </div>
                </div>
            </header>
            <section className='d-lg-none d-block mx-auto'>
              
               <div className="containerfluid">
                <div className="row">
                    
                  <div classname="col-lg-12 ">
  <nav className="navbar navbar-dark bg-dark ">
    <div className="container-fluid">
        <div><img src="https://sangalotech.com/html/10/assets/images/logo.svg" alt="" /></div>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/prevention">Prevention</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contactus">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/hospital/">Best Hospital
</Link>
            </li>
            
          
          </ul>
         
        </div>
      </div>
    </div>
  </nav>
</div>

                </div>
               </div>
            </section>


                 <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/aboutus' element={<Aboutus/>}/>
                    <Route path='/contactus' element={<Contactus/>}/>
                    <Route path='/hospital/' element={<Hospital/>}/>
                    <Route path='/details/:cid/' element={<Details/>}/>
                    <Route path='/prevention' element={<Prev/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/terms' element={<Terms/>}/>
                    <Route path='/privacy' element={<Privacy/>}/>
                 </Routes>



        </>
    )
}

export default Header
