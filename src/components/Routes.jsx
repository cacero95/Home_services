import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './Molecules/Services';
import LpCalculator from './Molecules/YUGIOH/LpCalculator';
import Home from './Pages/Home';

const Routes = () => (
    <Router>
        <Switch>
            <Route path = "/" exact component = { Home } />
            <Route path = "/services/:type/:title" component = { Services } />
            <Route path = "/yugioh/lp" component = { LpCalculator } />
        </Switch>
    </Router>
)
export default Routes;