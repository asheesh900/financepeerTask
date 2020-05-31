import axios from "axios";

// action types
export const POST_FILE_REQUEST = "POST_FILE_REQUEST";
export const POST_FILE_SUCCESS = "POST_FILE_SUCCESS";
export const POST_FILE_FAILURE = "POST_FILE_FAILURE";

// action creators
export const postRequest = () => {
    return {
        type: POST_FILE_REQUEST,
    }
}

export const postSuccess = data => {
    return {
        type: POST_FILE_SUCCESS,
        data: data,
    }
}

export const postFailure = error => {
    return {
        type: POST_FILE_FAILURE,
        error: error,
    }
}

// action to post the file
export const uploadFile = data => {
    const url = `http://localhost:5000/upload/file`;
    return dispatch => {
        dispatch(postRequest());
        return axios
            .post(url, data)
            .then(res => {
                alert(res.data.msg)
                dispatch(postSuccess(res.data))
            })
            .catch(err => dispatch(postFailure(err)))

    }
}