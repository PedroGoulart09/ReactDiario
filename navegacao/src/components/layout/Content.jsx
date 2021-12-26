import './Content.css'
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from '../../views/exampleViews/About'
import Home from '../../views/exampleViews/Home'



const Content = props => (
    <main className="Content">
    <Switch>
        <Route path="/about">
        <About />
        </Route>

        <Route path="/home">
        <Home />
        </Route>
    </Switch>
    </main>
)
export default Content