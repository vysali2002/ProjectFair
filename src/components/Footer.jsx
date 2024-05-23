import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column  mt-5 shadow' style={{width:"100%" , height:'300px' , }}>
    <div className='footer d-flex justify-content-evenly w-100 p-2 mt-3'>
        <div style={{width:'300px'}} className='media'>
            <h5 className='fw-bolder text-light'><i className='fa-brands fa-docker'></i>Project Fair</h5>
            <p style={{textAlign:'justify'}} >Designed and built with all the love in the world by the bootstrap team with the help of our contributors. </p>
        <span>Code licensed MIT, docs CC BY 3.0</span>
        <span>Currently v5.3.2.</span>   
        </div>
        <div className='links d-flex flex-column ms-3'>
            <h5 className='d-flex'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
            <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
        </div>
        <div className='guides d-flex flex-column ms-3'>
            <h5 className='d-flex'>Guides</h5>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
            <a href="https://reactrouter.com/en/main " target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
            <a href="https://react-bootstrap.netlify.app/ " target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
        </div>
        <div className='contact ms-3'>
            <h5>Contact Us</h5>
            <div className='d-flex'> 
            <input type="text" className='form-control me-1'placeholder='Email id Please' />
            <button className='btn btn-info'> <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='icons d-flex justify-content-between mt-3'>
                <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-1x"></i></a>
                <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-1x"></i></a>
                <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-1x"></i></a>
                <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-1x"></i></a>
                <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-phone fa-1x"></i></a>
            </div>
        </div>
    </div>
    <p >Copyright &copy; 2024 E Cart. Build with react</p>
</div>
  )
}

export default Footer