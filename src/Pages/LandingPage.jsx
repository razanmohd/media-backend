import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"skyblue",fontSize:"40px"}}>Welcome To MX Player <span className='text-primary'></span></h1>
        <p>MX Player is a video streaming app that offers thousands of hours of premium, exclusive and original content from leading Producers and Publishers. It’s a one-stop app for some of the best Movies, TV Shows, Web Series, Music Videos and Short Videos. The platform lays focus on Exclusive Original Content with emphasis on high-quality Hindi and Regional Languages. The language range includes everything from Malayalam, Tamil, Bengali, Punjabi, Bhojpuri, and Kannada. MX Player will offer consumers more than 20 original shows and over 50,000 hours of Premium Content across languages. Large collection of Movies, TV Shows, Web Series, Music Videos and Short Videos. Watch your favourite content on the go anytime, anywhere.</p>
        <Link style={{textDecoration:"none",color:"skyblue",fontSize:"30px"}} to={"/home"}>Get started
      <i class="fa-solid fa-rotate-right"></i></Link>
        </Col>
        <Col lg={5}>
        <img src="https://cdn.dribbble.com/users/10585521/screenshots/17428724/mxplayer_logo_motion_1.gif" alt="" width='100%' />
        </Col>
        <Col></Col>

      </Row>


      {/* cards section */}

        
      <div className='container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100'>
        <h2 className='text-center text-primary'>Features</h2>
        <div className='card mb-5 mt-5 d-flex flex-row align-items-center justify-content-between w-100'>
        <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.freepik.com/premium-vector/video-message-icon-vector-image-can-be-used-product-management_120816-190114.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Managing videos</MDBCardTitle>
        <MDBCardText>
          Managing your movies and shows
        </MDBCardText>
        <MDBBtn href='#' className='btn-info'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_640.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Categorized Videos</MDBCardTitle>
        <MDBCardText>
          Categorizing movies and shows according to your choices
        </MDBCardText>
        <MDBBtn href='#' className='btn-info'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>


    <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://static-00.iconduck.com/assets.00/history-icon-2048x1863-wlx4kvv2.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Watch History</MDBCardTitle>
        <MDBCardText>
            Watch where you left off!!!!
        </MDBCardText>
        <MDBBtn href='#'className='btn-info'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
      </div>



      {/* details section  */}

      <div className='container border border-2 d-flex align-items-center justify-content mt-5 p-3'>
        <div className='col-lg-5'>
          <h4 className='text-info fw-bolder'>Simple,Powerful & Fast</h4>
          <h6 className='m-3'><span className='text-info fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. In obcaecati explicabo laborum! Quia cumque numquam laboriosam rerum, qui mollitia totam distinctio quam ad ipsum consequuntur id delectus velit, ut fugit.</h6>

          <h6 className='m-3'><span className='text-info fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. In obcaecati explicabo laborum! Quia cumque numquam laboriosam rerum, qui mollitia totam distinctio quam ad ipsum consequuntur id delectus velit, ut fugit.</h6>

          <h6 className='m-3'><span className='text-info fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. In obcaecati explicabo laborum! Quia cumque numquam laboriosam rerum, qui mollitia totam distinctio quam ad ipsum consequuntur id delectus velit, ut fugit.</h6>
        </div>
        <div className='col-lg-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qEVUtrk8_B4?si=h4dVCG19BAx3jZNq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

        </div>
      </div>



    </>
  )
}

export default LandingPage
