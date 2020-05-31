import axios from 'axios';

// action types
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

// action creators
export const getRequest = () => {
    return {
        type: GET_DATA_REQUEST
    }
}

export const getSuccess = data => {
    return {
        type: GET_DATA_SUCCESS,
        data: data,
    }
}

export const getFailure = error => {
    return {
        type: GET_DATA_FAILURE,
        error: error,
    }
}

// action to fetch the data
export const getData = () => {
    const url = `http://localhost:5000/records`
    return dispatch => {
        dispatch(getRequest())
        return axios
            .get(url)
            .then(res => {
                // console.log(res.data)
                dispatch(getSuccess(res.data))
            })
            .catch(err => dispatch(getFailure(err)))
    }
}