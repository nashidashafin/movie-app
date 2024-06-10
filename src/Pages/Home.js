import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
      <Container  className='my-5'>
        <Row>
            <Col lg={6} className='py-5'>
            
                
                    <h1 className='text-center text-warning'>MOVIEMANIA</h1>
                    <p className='text-center'>Welcome to MovieMania, your one-stop app for managing your favorite movies. 
                Here, you can add movies you love, view the list of all your favorite movies, and 
                delete any movie from your list. Enjoy your personalized movie experience!</p>
                <div className='text-center'>
                    <Link to={'/movies'}><button className='btn btn-outline-warning'>Let's Start</button></Link>
                    </div>
               
            
            </Col>
            <Col lg={6}> <img src="https://i.postimg.cc/4xNf9WfC/stylish-arrangement-picturedom-theme.jpg" alt="" width='100%'/></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
