import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCart from './VideoCart';
import { json } from 'react-router-dom';

function Category({dropVideoResponse,setDropVideoResponse}) {
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[categoryName,setCategoryName]=useState("")
    const[allCategories,setAllCategories]=useState([])

    const handleAdd=async()=>{
      // e.preventDefault()
      if(categoryName){
        const result=await addCategoryAPI({categoryName,allVideos:[]})
        if(result.status>=200 && result.status<300){
          handleClose()
          getCategories()
          setCategoryName("")
        }else{
          console.log(result.message);
        }
      }else{
        alert("please fill missing details")
      }

    }

    const getCategories=async()=>{
      const {data}=await getCategoryAPI()
      setAllCategories(data)
    }

    const removeCategory=async(id)=>{
      await deleteCategoryAPI(id)
      getCategories()
    }


    const dragOver=(e)=>{
      console.log("video drag over category");
      e.preventDefault()
    }

   

    // console.log(allCategories);
    
    const videoDrop=async(e,categoryId)=>{
      const videoId=e.dataTransfer.getData("videoId")
      console.log(videoId,"dropped into category id:",categoryId);
      const {data}=await getAVideoAPI(videoId)
      console.log(data);
      const selectedCategory=allCategories.find(item=>item.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      getCategories()
    }

    useEffect(()=>{
      getCategories()
    },{dropVideoResponse})

    const videoDragStarted=(e,videoId,categoryId)=>{
      let dataShare={videoId,categoryId}
      e.dataTransfer.setData("Data",JSON.stringify(dataShare))
    }

    // console.log(categoryName);
  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-info'>Add Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       <Form>
          <FloatingLabel
        controlId="floatingInput1"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text"   placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>

      </Form>
        

          
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      {
      allCategories?.length>0?allCategories.map(category=>(
        <div className='border border-3 m-3 p-3' droppable='true' onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>{category?.categoryName}</h3>
            <button className='text-danger btn' onClick={()=>removeCategory(category?.id)}><i class="fa-solid fa-trash"></i></button>

          </div>
          <Row>
            {
              category?.allVideos.length>0?category?.allVideos.map(card=>(
                <Col sm={12} draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                  <VideoCart video={card} insideCategory={true}/>
                </Col>
              )):null
            }
          </Row>
        </div>
      )):<p className='text-danger mt-3'>No categories Created</p>
    }




    </>
  )
}

export default Category
