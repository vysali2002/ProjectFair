import React , {useState} from 'react'
import { Card, Modal ,} from 'react-bootstrap'
import { SERVER_URL } from '../services/serverUrl';



function ProjectCard({displayData}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card onClick={handleShow} className='shadow  btn' style={{ width: '22rem' }}>
      <Card.Img height={'250px'} variant="top" src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} alt={displayData?.title}/>
      <Card.Body>
        <Card.Title>{displayData?.title}</Card.Title>
        
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                <img className='fluid' src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} alt="" />
                </div>
                <div className="col-lg-6">
                 <h3>Project Title </h3>
                 <h5><span className='fw-bolder'>Languages Used : {displayData?.language}</span> HTML , CSS JS </h5>
                 <p style={{textAlign:'justify'}}><span className='fw-bolder'>Overview: {displayData?.overview}</span></p>
                
                </div>
            </div>
            <div className="float-start  mt-2">
       <a  href={displayData?.github} target='_blank' className='btn btn-secondary' >
        <i className='fa-brands fa-github'></i>
          </a>

          <a href={displayData?.website} target='_blank' className='btn btn-secondary ms-2' onClick={handleClose}>
          <i className='fa-solid fa-link'></i>
          </a>
       </div>
            </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard