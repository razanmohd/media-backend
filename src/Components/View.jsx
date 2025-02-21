import React, { useEffect, useState } from 'react'
import VideoCart from './VideoCart'
import { Col, Row } from 'react-bootstrap'
import { getAllVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {


  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  const[allVideos,setAllVideos]=useState([])

  const getAllVideos= async()=>{
    const result = await getAllVideoAPI()
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data)
    }else{
      console.log("api failed");
      setAllVideos([])
    }
  }

  console.log(allVideos);


  

  useEffect(()=>{
    getAllVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const dragOver=(e)=>{
    e.preventDefault()
  }

  const videoDropped=async(e)=>{
    const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("Data"))
    // console.log(videoId,categoryId);
    const{data} = await getCategoryAPI()
    const selectedCategory=data.find(item=>item.id==categoryId)
    let result=selectedCategory.allVideos.filter(video=>video.Id!==videoId)
    console.log(result);
    let{id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allVideos:result}
    const res=await updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res)
  }





  return (
    <>
      <Row droppable='true' onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
        {
          allVideos?.length>0?allVideos.map((video,index)=>(
        <Col key={index} sm={12} md={6} lg={4}>
        <VideoCart video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
          )):<p className='text-danger'>Nothing to display</p>
}
      </Row>
    </>
  )
}

export default View
