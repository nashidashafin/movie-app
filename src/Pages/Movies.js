import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { acessMoviesApi, addMoviesApi, deleteMoviesApi } from '../ApiServices/allApis';



function Movies() {
    //movies
    const [update,setUpdate]=useState(false)
    const [updateMovies,setMovies]= useState({
        coverImage:"",
        movieTitle:"",
        director:"",
        music:"",
        actors:""
    })
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    


    const setDatas=(e)=>{
        let {value,name} = e.target
        setMovies({...updateMovies,[name]:value})
    }
    console.log(updateMovies)

    const addMovie=async()=>{
        
        const {coverImage,movieTitle,director,music,actors} = updateMovies
        if(coverImage===""|| movieTitle===""|| director===""|| music===""|| actors===""){
          alert("please fill the form")
        }
        else{
        const out= await addMoviesApi(updateMovies)
        console.log(out);
    
        if(out.status>=200&&out.status<300){
          alert("Movie uploaded successfully")
          handleClose()
          setUpdate(true)
         
        }
        else{
          alert("Movie uploading failed")
        }
        }
      }

      const getMovies=async()=>{
        const result= await acessMoviesApi()
        // console.log(result.data);
        setMovies(result.data)
      }

      useEffect(()=>{
        getMovies()
      },[update])
    
      console.log(updateMovies);

      const deleteMovie=async(id)=>{
        const result = await deleteMoviesApi(id)
        if(result.status>=200 && result.status<300){
         //state changes to true, when success
         getMovies()
        }
       
       }
    

 
  return (
    <div>
        <div className='text-center bg-warning' >
            <img onClick={handleShow} className='btn' src="https://i.postimg.cc/9fnw1JCS/1910-i309-028-F-m004-c7-cinema-film-production-realistic-transparent-03-removebg-preview.png" width='10%' alt="" />
        </div>
      <Container className='my-5'>
        <Row>
           { 
           updateMovies?.length>0?
           updateMovies.map(i=>(
            <Col lg={3} md={4} sm={6}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={i.coverImage} height='250px'/>
      <Card.Body>
        <Card.Title>{i.movieTitle}</Card.Title>
        <Card.Text>
          Director : {i.director}
        </Card.Text>
        <Card.Text>
          Music Director : {i.music}
        </Card.Text>
        <Card.Text>
          Actors : {i.actors}
        </Card.Text>
       <div className='text-right'> <Button onClick={()=>deleteMovie(i.id)} variant=""><i class="fa-solid fa-trash" style={{color: "#e10935"}}></i></Button></div>
      </Card.Body>
    </Card>
            </Col>

           ))
            
            
            :
            <div><img src="https://i.postimg.cc/j58WfS2z/bgggg.jpg" alt="" /></div>
            
        }
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingImage"
        label="Cover image"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setDatas(e)} name='coverImage' type="text" placeholder="Cover image address" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingMovie" label="Movie" className="mb-3">
        <Form.Control onChange={(e)=>setDatas(e)} name='movieTitle' type="text" placeholder="Movie" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingDirector" label="Director" className="mb-3">
        <Form.Control onChange={(e)=>setDatas(e)} name='director' type="text" placeholder="Director" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingMusic" label="Music" className="mb-3">
        <Form.Control onChange={(e)=>setDatas(e)} name='music' type="text" placeholder="Music" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingActors" label="Actors" className="mb-3">
        <Form.Control onChange={(e)=>setDatas(e)} name='actors' type="text" placeholder="Actors" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={addMovie}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Movies
