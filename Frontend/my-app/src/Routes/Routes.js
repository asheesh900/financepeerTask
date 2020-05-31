import React, { Component } from 'react'
import Navbar from '../Components/Common/Navbar'
import { Switch, Route } from 'react-router-dom'
import LogIn from '../Components/Auth/LogIn'
import Signup from '../Components/Auth/Signup'
import Home from '../Components/Common/Home'
import PrivateRoute from "./PrivateRoute"
import FileUpload from '../Components/Common/FileUpload'
import Display from '../Components/Common/Display'

export default class Routes extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/signup" component = {Signup} />
                    <Route path = "/logIn" component = {LogIn} />
                    <PrivateRoute path = "/fileUpload" component = {props => <FileUpload {...props} />} />
                    <PrivateRoute path = "/display" component = {props => <Display {...props} />} />
                </Switch>
            </>
        )
    }
}
