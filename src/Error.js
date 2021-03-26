import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Error () {
    return (

            <Card className="errorCard">
              <Card.Body>
                <Card.Title className="errorTitle">This is not the page you're looking for...</Card.Title>
                <Link to="/"><Button variant="info">Back</Button></Link>
              </Card.Body>
            </Card>
    )
}