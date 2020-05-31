import {
    POST_FILE_REQUEST,
    POST_FILE_SUCCESS,
    POST_FILE_FAILURE,
} from './Action'

const initialState = {
    isRequest: false,
    msg: "",
    error: ""
}

const fileUploadReducer = (state = initialState, action) => {

    switch(action.type) {
        case POST_FILE_REQUEST:
            return {
                ...state,
                isRequest: true,
            }

        case POST_FILE_SUCCESS:
            return {
                ...state,
                msg: action.data.msg,
            }

        case POST_FILE_FAILURE:
            return {
                ...state,
                error: action.error,
            }

        default:
            return state
    }
}

export default fileUploadReducer;