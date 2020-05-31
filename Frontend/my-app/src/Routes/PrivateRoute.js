import React from 'react'
import { connect } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({component:Component, token, ...rest}) {
    return (
        <Route {...rest} render={(props)=>{
            if(token){
                return <Component {...props}/>
            }
            return <Redirect to='/login'/>
        }}/>
            
    )
}


const mapStateToProps = (state) => ({
    token: state.authReducer.token,
})


export default connect(mapStateToProps, null) (PrivateRoute)