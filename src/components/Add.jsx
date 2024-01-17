import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {



const [video,setVideo]=useState({
  id:"",caption:"",url:"",embedLink:""
})



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e) =>{
    const {value}=e.target
if(value){
  const link =`https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
}else{
  setVideo({...video,embedLink:""})
}
    }

console.log(video);
const handleUpload=async ()=>{
  const {id,caption,url,embedLink}=video
  if (!id || !caption || !url ||  !embedLink)
  {
    toast.warning("please fill missing fields")

  }else{
 
 const response = await uploadVideo(video)
//  console.log(response);
    if(response.status>=200 && response.status<300){
      setUploadVideoServerResponse(response.data)
      toast.success(`${response.data.caption} video successfully uploaded`)
//reset video
setVideo({
  id:"",caption:"",url:"",embedLink:""
})

      //hide modal
      handleClose()
    }else{
      // console.log(response);
      toast.error('cannot perform the action rightnow')
    }
  }

}

  return (
    <>
    <div className='d-flex align-items-center '>

<Button onClick={handleShow} className='btn'>
<h5>Upload Videos  <i class="fa-solid fa-circle-plus fs-5"></i></h5>
</Button>
</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          PLease fill the following details
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Enter video Id" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter video Title"  onChange={(e)=>setVideo({...video,caption:e.target.value})} />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter video Image Url"  onChange={(e)=>setVideo({...video,url:e.target.value})} />
       
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter video Link" onChange={getEmbedLink} />
       
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>upload</Button>
        </Modal.Footer>
      </Modal>

    <ToastContainer 
    position='top-center'
    theme='colored'
    autoClose={2000}
    />
    
    
    
    </>
  )
}

export default Add