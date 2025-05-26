import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({arr2}) {
    // console.log(arr2);
    
  return (
    <Card style={{ width: '18rem',border:"2px solid black" }}>
      <Card.Img variant="top" src={arr2.image.img} />
      <Card.Body>
        <Card.Title>{arr2.name}</Card.Title>
        <Card.Text>{arr2.price} Rs</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;