import React,{useState} from 'react'

import { Container, Form, FormControl, Nav,Button, Navbar, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function NavBar({addmovie,searchmovie,getTitre,getrate}) {
  
    const [show, setShow] = useState(false);
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [posterUrl,setPosterUrl]=useState("")
  const [rate,setRate]=useState(1)
   const handeladd=()=>{
     if(title && description && posterUrl && rate){
      addmovie({title,description,posterUrl,rate,id:Math.random()});handleClose();
     }
   }  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ratingChanged = (newRating) => {
    getrate(newRating);
  };

  return (
    <div> 
      <Navbar bg="info"  variant="lighter">
    <Container fluid>
      <Navbar.Brand href="#" className='watchmovie' >Watch Movies</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style= {{ maxHeight: '100px' }}
          navbarScroll
        >
        
        <Nav.Link as={Link} to='/MovieList'>Movies</Nav.Link>
        <Nav.Link href="#features">Contact</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
      
         
        </Nav>
        {/* <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
   
  />, */}
        <Form className="d-flex" style= {{paddingRight:'10px'}}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={e=>getTitre(e.target.value) }
          />
           <Button variant="outline-primary" onClick={searchmovie} >Search</Button> 
        </Form>
        
        <Button variant="outline-primary" onClick={handleShow}>
            Add new Movie
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
   <Form.Group className="mb-3" controlId="formBasicText">
     <Form.Label>Title</Form.Label>
     <Form.Control type="text" placeholder="Enter movie title" onChange={(e)=>setTitle(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicText">
     <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter your description" onChange={(e)=>setDescription(e.target.value)} />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicImage">
     <Form.Label>PosterUrl</Form.Label>
     <Form.Control type="link" placeholder="Enter your posterUrl" onChange={(e)=>setPosterUrl(e.target.value)} />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicNumber">
   <Form.Label>Rate</Form.Label>
     <Form.Control type="number" placeholder="Enter your rate" onChange={(e)=>setRate(e.target.value)}/>
   </Form.Group>
 </Form>
 </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>Close</Button>
  <Button variant="primary" 
  onClick={handeladd}>Save Changes
  </Button>
  </Modal.Footer>
  </Modal>
        
       
        
      </Navbar.Collapse>
    </Container>
  </Navbar> 
  </ div>
  )
}

export default NavBar;