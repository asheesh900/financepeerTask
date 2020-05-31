import React, { Component } from 'react'
import {authenticateUser} from '../../Redux/Authorization/Action'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class LogIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    logIn = (e) => {
        e.preventDefault()
        const credentials = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.authenticateUser(credentials)
    }
    
    render() {
        const {token} = this.props
        return (
                token ?
                (
                    <Redirect to = "/fileUpload" />
                ):
                (
                    <form>
                        <div className = "signup">
                            <h1>Log In</h1>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input onChange = {this.handleChange} name = "email" type="email"/>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input onChange = {this.handleChange} name = "password" type="password"/>
                            </div>
                            <div>
                                <button onClick = {this.logIn} type = "submit">Log In</button>
                            </div>
                        </div>
                    </form>
                )
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.authReducer.isLogin,
    token: state.authReducer.token
})

const mapDispatchToProps = (dispatch) => ({
    authenticateUser: (credentials) => dispatch(authenticateUser(credentials))
})

export default connect(mapStateToProps, mapDispatchToProps) (LogIn)

