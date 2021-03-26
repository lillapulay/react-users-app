import { Link } from 'react-router-dom';

export default function Error () {
    return (
        <div className="errorpage">
            <h1> Nothing to see here </h1>
            <p> Something went wrong.</p>
            <button><Link to="/">Back</Link></button>
        </div>
    )
}