import './Content.css'
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../views/exampleViews/About';
import Home from '../../views/exampleViews/Home';
import Param from '../../views/exampleViews/Param';

const Content = props => (
    <main className="Content">
    <Switch>

        <Route path="/about">
        <About />
        </Route>

        <Route path="/home">
        <Home />
        </Route>

        <Route path="/param/:id">
        <Param />
        </Route>

    </Switch>
    </main>
)
export default Content