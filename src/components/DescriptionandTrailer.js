import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom';
import {movies} from '../data/movies'

function DescriptionandTrailer({}) {
  const {movieId}=useParams();
  const navigate=useNavigate();
  const movie=movies.find(movie => movie.id==Number(movieId) )
  console.log(movie);
  return (
     <div style={{margin:"auto",width:'475px',paddingTop:"50px"}}>
 <Card style={{ width: '500px', height:'450px'}}>
  <Card.Body>
    <Card.Title>
        {movie.title}    
      </Card.Title>
    <Card.Text>
     
    {movie.description}  
    </Card.Text>
    <div style={{margin:'auto' ,width:'400px',paddingRight:'10px'}}>
    <center><iframe width="400" height="250" src={movie.frameUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center><br/>
    
    <Button bg='#03d5f2' style={{width:'400px'}} onClick={()=>navigate(-1)}  >go Back</Button>
    </div>
    
    
  </Card.Body>
</Card> 
     </div>
      

    
  )
}

export default DescriptionandTrailer