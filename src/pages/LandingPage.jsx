import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    
    <Row className='mt-5 align-items-center justify-contet-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-info'>Media Player</span>
        </h3>
        <p style={{textAlign:'justify'}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis similique eius inventore culpa porro, quod eaque atque molestiae maxime iste unde repudiandae rerum ad cupiditate? Quod eos exercitationem omnis!
        </p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-primary'>Get Started</button>
      </Col>
      <Col lg={5}>
        <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="player" />
      </Col>
      <Col></Col>
    </Row>
    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>
      <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100"  >
      <Card style={{ width: '18rem',color:'black' }} className='p-4'>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',color:'black' }} className='p-4'>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Categorised videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',color:'black' }} className='p-4'>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Watching History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    
      </div>
    </div>
    
<div className="container b-5 mt-5 border-rounded p-5 border-secondary d-flex align-items-center justify-content-between w-100">

<div className="video col-lg-5">
  <h3 className='mb-5 text-primary'>Simple,Powerful & Fast</h3>
  <h6 className='mb-3'><span className='fs-5 fw-bolder text-info'>play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores cum. Impedit exercitationem aut officia, iure aspernatur assumenda molestias quibusdam sunt sint illum dolore rem incidunt! Doloremque illo minima ad.
  </h6>
  <h6 className='mb-3'><span className='fs-5 fw-bolder text-info'>Categorize videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores cum. Impedit exercitationem aut officia, iure aspernatur assumenda molestias quibusdam sunt sint illum dolore rem incidunt! Doloremque illo minima ad.
  </h6>
  <h6 className='mb-3'><span className='fs-5 fw-bolder text-info'>manage history</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores cum. Impedit exercitationem aut officia, iure aspernatur assumenda molestias quibusdam sunt sint illum dolore rem incidunt! Doloremque illo minima ad.
  </h6>
</div>
<div className="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/bui3q02NK8Y?si=6uELnT1dBCLxgOQC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>

</div>
    
    
    </>
  )
}

export default LandingPage