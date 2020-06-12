import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbars from '../navbar/navbar.component';
import Homepage from '../homepage/homepage';
import '../main/index.styles.css'
export default class Main extends Component {
    render() {
        return (
           <Router>
            <Navbars/>
            <Homepage/>
           </Router>
        )
    }
}
