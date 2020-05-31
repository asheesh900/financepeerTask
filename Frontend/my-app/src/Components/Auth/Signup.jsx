import React, { Component } from 'react'
import {connect} from 'react-redux'
import {registerUser} from '../../Redux/Authorization/Action'
import {Redirect} from 'react-router-dom'

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             username: "",
             email: "",
             password: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault()
        const userInfo = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.registerUser(userInfo)
    }
    
    render() {
        const {isData} = this.props
        return (
            isData ? 
            (
                <Redirect to = "/logIn" />
            ) :
            (
                <form>
                    <div className = "signup">
                        <h1>Signup</h1>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input onChange = {this.handleChange} name = "name" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input onChange = {this.handleChange} name = "username" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input onChange = {this.handleChange} name = "email" type="email"/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange = {this.handleChange} name = "password" type="password"/>
                        </div>
                        <div>
                            <button onClick = {this.register} type = "submit">Register</button>
                        </div>
                    </div>
                </form>
            )
        );
    }
}

const mapStateToProps = (state) => ({
    msg: state.authReducer.msg,
    isData: state.authReducer.isData,
})

const mapDispatchToProps = (dispatch) => ({
    registerUser: (userInfo) => dispatch(registerUser(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps) (Signup)

