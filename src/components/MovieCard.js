import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';




function MovieCard({movie}) {
  return (
    <div >
      <Link to={`/DescriptionandTrailer/${movie.id}`}>
<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={movie.posterUrl} style={{height:"400px"  }} />
  <Card.Body>
    <Card.Title>{movie.title} </Card.Title>
    <Card.Text>
    {"⭐".repeat(movie.rate)}
      
    </Card.Text> 
    
   
     <Button variant="primary">Go Watch</Button>
     
   
  </Card.Body>
</Card>
</Link> 
    
    </div>   
  );
}

export default MovieCard;