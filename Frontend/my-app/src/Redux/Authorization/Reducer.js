import {
    POST_USER_DATA_REQUEST,
    POST_USER_DATA_SUCCESS,
    POST_USER_DATA_FAILURE,
    AUTHENTICATE_USER_REQUEST,
    AUTHENTICATE_USER_SUCCESS,
    AUTHENTICATE_USER_FAILURE,
    SIGN_OUT,
} from './Action'

const initialState = {
    isRequest: false,
    isData: false,
    msg: "",
    error: "",
    isLoginRequest: false,
    isLogin: false,
    token: "",
    error1: "",
    username: "",
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case POST_USER_DATA_REQUEST:
            return {
                ...state,
                isRequest: true,
            }

        case POST_USER_DATA_SUCCESS:
            return {
                ...state,
                isData: true,
                msg: action.data.message
            }

        case POST_USER_DATA_FAILURE:
            return {
                ...state,
                error: action.error
            }

        case AUTHENTICATE_USER_REQUEST:
            return {
                ...state,
                isLoginRequest: true
            }

        case AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                isLogin: true,
                token: action.data.token,
                username: action.data.username,
            }

        case AUTHENTICATE_USER_FAILURE:
            return {
                ...state,
                error1: action.error
            }

        case SIGN_OUT:
            return {
                state: undefined
            }

        default:
            return state
    }
}

export default authReducer;