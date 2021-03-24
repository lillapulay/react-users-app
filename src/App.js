import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation.js';
import Home from './Home.js';
import Users from './Users.js';
import UserDetails from './UserDetails.js';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path = "/" component={Home} />
      <Route path = "/users" component={Users} />
      <Route path="/userdetails/:id" component={UserDetails} />
    </BrowserRouter>
  );
}

