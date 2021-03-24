import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div className="welcome">
            <h1> User List </h1>
            <button><Link to="/users">Click here to see the list of users</Link></button>
        </div>
    )
}