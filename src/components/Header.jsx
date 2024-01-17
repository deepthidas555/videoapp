import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>

              <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <Link to={'/'} className='fs-4' style={{textDecoration:'none',color:'black'}}>
            <i class="fa-solid fa-cloud-arrow-down" ></i>{' '}
            MediaPlayer
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header