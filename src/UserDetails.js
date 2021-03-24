    import { useParams } from 'react-router-dom';
    import { Link } from 'react-router-dom';
    import { useEffect, useState } from 'react';
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import Col from 'react-bootstrap/Col';

    export default function UserDetails () {
        const [ user, setUser ] = useState([]);
        const { id } = useParams();
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;

        useEffect(() => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => setUser(data));
        }, [url]);        

    return (
        <Col>
            <Card className="text-center">
                <Card.Header>User</Card.Header>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <div>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p> Address: {/* {user.address.zipcode} {user.address.city}, {user.address.street} {user.address.suite} */}</p>
                        <p> Company:  {/*{user.company.name} - {user.company.catchPhrase}*/} </p>
                    </div>                
                </Card.Body>
                <Card.Footer className="text-muted"><Button variant="primary"><Link to="/users">Back to users</Link></Button></Card.Footer>
            </Card>        
        </Col>
    );
    }