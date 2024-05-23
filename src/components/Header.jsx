import React, { useContext } from 'react'
import {Navbar , Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { TokenAuthContext } from '../contexts/TokenAuth'

function Header(insideDashBoard) {
  const {isAuthorised,setIsAuthorised} = useContext(TokenAuthContext)
const navigate = useNavigate()
const logout=()=>{
  sessionStorage.clear()
  setIsAuthorised(false)
  navigate('/')
}

  return (
    <Navbar style={{zIndex:'1'}} className='card border shadow top-0 position-fixed w-100'>
        <Container>
          <Navbar.Brand>
    <Link style={{textDecoration:'none'}} className='fw-bolder' to={'/'}><i className="fa-brands fa-docker ">  Project Fair</i></Link>
          </Navbar.Brand>
          { insideDashBoard  &&
          <div className="ms-auto">
            <button onClick={logout} className='btn btn-link'>Logout <i className="fa-solid fa-arrow-right"></i></button>
          </div>
         }
        </Container>
      </Navbar>
  )
}

export default Header