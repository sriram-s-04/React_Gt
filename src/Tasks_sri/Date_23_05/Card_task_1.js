import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderExample({arr}) {
  return (
    <Card style={{ border:"2px solid black", width: '18rem' }}>

      <Card.Header>{arr[0].name}</Card.Header>
      <Card.Body>
        <Card.Title>{arr[0].age}</Card.Title>
        <Card.Text>{arr[0].number}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;