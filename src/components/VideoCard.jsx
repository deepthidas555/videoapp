import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../services/allAPI';


function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
  //make api call
  const {caption,embedLink}=displayData
  let today = new Date()

  let timeStrap= (new Intl.DateTimeFormat('en-Us',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today))
      let videoDetails ={
        caption,embedLink,timeStrap
      }
      await addToHistory(videoDetails)
  }
//delete video
const removeVideo =  async (id) =>{
  //make api call
await deleteVideo(id)
  setDeleteVideoStatus(true)
}

const dragStarted = (e,id)=>{
  console.log("Drag Started .....video Id : "+id);
e.dataTransfer.setData("videoId",id)

}

  return (
<>
<Card style={{color:'black'}} className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}> 
    <Card.Img onClick={handleShow} variant="top" src={displayData?.url} />
    <Card.Body>
      <Card.Title className='d-flex justify-content-between align-items-center'>
        <h6>{displayData?.caption}</h6>
       { insideCategory?"":<button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
    </Card.Body>
  </Card>
  
  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body><iframe width="100%" height="480" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
  </Modal.Body>

</Modal>

</>

  )
}

export default VideoCard