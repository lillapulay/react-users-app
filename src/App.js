import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation.js';
import Error from './Error.js';
import Users from './Users.js';
import UserDetails from './UserDetails.js';

export default function App() {
  return (
    <BrowserRouter>    
      <Navigation />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/error404" component={Error} />
          <Route exact path="/userdetails/:id" component={UserDetails} />
          <Route component={Error} />
        </Switch>
    </BrowserRouter>
  );
}

