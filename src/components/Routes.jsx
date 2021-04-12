import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './Molecules/Services';
import Home from './Pages/Home';

const Routes = () => (
    <Router>
        <Switch>
            <Route path = "/" exact component = { Home } />
            <Route path = "/services/:type/:title" component = { Services } />
        </Switch>
    </Router>
)
export default Routes;