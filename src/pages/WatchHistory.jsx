import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {

  const [history,setHistory]=useState([])

  const handleHistory = async ()=>{
    const {data} = await getAllHistory()
    // console.log(data);
    setHistory(data);
  }

  console.log(history);
  useEffect(()=>{
    handleHistory()
  },[])


const handleDeleteHistory = async(id)=>{
  //make api call
  await deleteHistory(id)
  //get remaining history
  handleHistory()
}


  return (
    <>
    
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h3>WatchHistory</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'skyblue'}}><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
    </div>
    <table className='table mt-3 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>caption</th>
          <th>URL</th>
          <th>Timestrap</th>
          <th>Action</th>
        </tr>
      </thead>
      
      <tbody>
        {
          history.length>0?history?.map((item,index)=>(
     
        <tr key={index}>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td>{item?.embedLink}</td>
          <td>{item?.timeStrap}</td>
          <td><button className='btn' onClick={()=>handleDeleteHistory(item?.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
               
               )):<p className='fs-5 fw-5 text-danger'>Nothing to display</p>
              }
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory