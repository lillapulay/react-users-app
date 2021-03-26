import { useState, useEffect } from "react";
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
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('404')
        }
        })
      .then((data) => setUser(data))
      .catch((error) => {
        window.location.assign('/404')
      })
  }, []);


  return (
    <div className="userCards">      
      <h1> Our Users </h1>
      <Row >
        {user.map((user) => (
        <Col key={user.id}>
            <Card className="userCard" style={{ width: '18rem' }}>
              <div className="userMono">{user.name[0]}</div> {/* Stole the idea from Karol */}
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text><i>@{user.username}</i></Card.Text>
                <Link to={`/userdetails/${user.id}`}><Button variant="info">{user.name}</Button></Link>
              </Card.Body>
            </Card>
        </Col>
        ))}   
      </Row>
    </div>
  );
}
