import axios from 'axios'

// action type

export const POST_USER_DATA_REQUEST = "POST_USER_DATA_REQUEST";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";
export const POST_USER_DATA_FAILURE = "POST_USER_DATA_FAILURE";
export const AUTHENTICATE_USER_REQUEST = "AUTHENTICATE_USER_REQUEST";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_FAILURE = "AUTHENTICATE_USER_FAILURE";
export const SIGN_OUT = "SIGN_OUT"

// action creators to register the user

export const postRequest = () => {
    return {
        type: POST_USER_DATA_REQUEST
    }
}

export const postSuccess = (data) => {
    return {
        type: POST_USER_DATA_SUCCESS,
        data: data
    }
}

export const postFailure = (error) => {
    return {
        type: POST_USER_DATA_FAILURE,
        error: error
    }
}

// action to post the user data

export const registerUser = (userInfo) => {
   let url = `http://127.0.0.1:5000/auth/signup` 
   return dispatch => {
       dispatch(postRequest())
       return axios
           .post(url, userInfo)
           .then(res => {
            //    console.log(res)
               alert(res.data.message)
                dispatch(postSuccess(res))
           })
           .catch(err => {
               alert(err)
                // console.log(err)
               dispatch(postFailure(err))
           })

   }
}

// action creators for logIn

export const authorizeUserRequest = () => {
    return {
        type: AUTHENTICATE_USER_REQUEST,
    }
}

export const authorizeUserSuccess = (data) => {
    return {
        type: AUTHENTICATE_USER_SUCCESS,
        data: data
    }
}

export const authorizeUserFailure = (error) => {
    return {
        type: AUTHENTICATE_USER_FAILURE,
        error: error
    }
}

// action to post logIn credentials

export const authenticateUser = (credentials) => {
    let url = `http://127.0.0.1:5000/auth/login`
    return dispatch => {
        dispatch(authorizeUserRequest())
        return axios
            .post(url, credentials)
            .then(res => {
                alert(res.data.message)
                dispatch(authorizeUserSuccess(res.data))
            })
            .catch(err => dispatch(authorizeUserFailure(err)))
    }
}

// action creator for signout

export const logOff = () => {
    return {
        type: SIGN_OUT
    }
}

// action for signout

export const signOut = () => {
    return dispatch => {
        dispatch(logOff())
    }
}