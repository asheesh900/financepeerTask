import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
} from './Action'

const initialState = {
    isRequest: false,
    isData: true,
    data: [],
    error: ""

}

const getDataReducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_DATA_REQUEST:
            return {
                ...state,
                isRequest: true,
            }

        case GET_DATA_SUCCESS:
            return {
                ...state,
                isData: true,
                data: action.data,
            }

        case GET_DATA_FAILURE:
            return {
                ...state,
                error: action.error,
            }

        default:
            return state
    }
}

export default getDataReducer;