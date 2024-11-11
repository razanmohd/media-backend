import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEVHcEw8jPA8jPD///88jPE9jfE8jPA/kPU8jPE8jfEwiPBQmPLh7fxtpvPV5vuyz/iawPZFkfGq99jhAAAACnRSTlMA3///kT18EuvHBSl2iQAAALtJREFUOI2Nk1kSxCAIRBUwataZ+192TOIgLinCn/IK2haM4fCOYgAIkZw3fXiywGGpRfwETUw1Ets8QBRpF/p8EuMYGOYT8e8/qJ+73Do6fULpVYCPy9wRZwni/H5Ai1AqwP4sK+LnWyPWGwcSwHWbK8SVDjeAuG+SIOFhBhAPUSQKkxiQUoKBEXBKybcPQBHy0AJKC1Wk+szeKOlTMkq1Wv0s/bvVgdFHTh3aF2OvLs6L1VOX90KG6/8DhoYLYmE83L8AAAAASUVORK5CYII="
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MX PLAYER
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
