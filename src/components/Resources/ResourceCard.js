import Card from 'react-bootstrap/Card';

function ResourceCard(genre) {
  return (
    <Card className="resource-card-view">
      <Card.Body>
        <Card.Title>{genre.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ResourceCard;