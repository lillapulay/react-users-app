    import { useParams } from 'react-router-dom';
    import { Link } from 'react-router-dom';
    import { useEffect, useState } from 'react';
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import Col from 'react-bootstrap/Col';

    export default function UserDetails () {
        const [ user, setUser ] = useState();
        const { id } = useParams();
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;

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
                window.location.assign('/error404')
            })
        }, [url]);        

    return (
        <Col>
        {user && (
            <Card className="detailsCard text-center">
                <Card.Header><Card.Title>{user.name}</Card.Title></Card.Header>
                <Card.Body>                                  
                    <div>                        
                        <div className="userMono">{user.name[0]}</div> {/* Stole the idea from Karol */}
                        <p><i>@{user.username}</i></p>
                        <p><b>Email:</b> <i>{user.email}</i></p>
                        <p><b>Phone:</b> <i>{user.phone}</i></p>
                        <p><b>Website:</b> <i>{user.website}</i></p>

                        {user.address && (
                        <p> <b>Address:</b> <i>{user.address.zipcode} {user.address.city}, {user.address.street} {user.address.suite}</i></p>                            
                        )}

                        {user.address.geo && (
                        <p> <b>Lat:</b> <i>{user.address.geo.lat}</i>, <b>Len:</b> <i>{user.address.geo.lng}</i></p>
                        )}                     
                        
                        {user.company && (
                        <p> <b>Company:</b> <i>{user.company.name} - "{user.company.catchPhrase}"</i> </p>
                        )}
                    </div>                
                </Card.Body>
                <Card.Footer className="text-muted">
                    
                        <Link to="/"><Button variant="light" className="backButton">Back to home</Button></Link>
                    
                </Card.Footer>
            </Card>   
            )}     
        </Col>
    );
    }