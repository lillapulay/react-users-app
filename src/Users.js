import { useState, useEffect } from "react";
import UserDetails from './UserDetails.js';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Users() {    
    const url = "https://jsonplaceholder.typicode.com/users";
    const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
      //console.log(user);
  }, []);


  return (
      <Row className="UserCards">
        {user.map((user) => (
        <Col key={user.id} xs={12} s={6} md={4} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Button variant="primary"><Link to={`/userdetails/${user.id}`}>{user.name}</Link></Button>
              </Card.Body>
            </Card>
        </Col>
        ))}   
      </Row>
  );
}
