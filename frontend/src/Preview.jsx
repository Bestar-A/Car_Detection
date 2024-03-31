import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import logo from './assets/logo.jpg'
import { FaArrowDown, FaFileUpload } from 'react-icons/fa'

const Preview = () => {
  return (
    <>
        <div style={{backgroundColor:'#A9805B'}} className='rounded-2 mt-2 p-3 text-center'>
            <div>
                <Button className='border-0 p-4 px-5' variant='light'>
                    <h1 style={{fontSize: 100}}><i class="ri-upload-2-line"></i></h1>
                </Button>
            </div>
            <div className='mt-3'>
                <Button variant='light'>
                    Remove Cars Now
                </Button>
            </div>
        </div>
        <div className='d-flex justify-content-center flex-column mt-2'>
            <h1 className='text-center mb-4'>See The Difference</h1>
            <Container>
                <Row className='text-center'>
                    <Col>
                        <Card className='w-75 mx-auto'>
                            <Card.Img src={logo} width={200} height={350}/>
                            <Card.Body>
                                <Card.Title>
                                    <h2>Before</h2>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className='w-75 mx-auto'>
                        <Card.Img src={logo} width={200} height={350}/>
                            <Card.Body>
                                <Card.Title>
                                    <h2>After</h2>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Preview