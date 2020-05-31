import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Redux/Authorization/Reducer';
import fileUploadReducer from './Redux/FileUpload/Reducer';
import getDataReducer from './Redux/GetData/Reducer';

const rootReducer = combineReducers({authReducer, fileUploadReducer, getDataReducer})
const store = createStore(rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store;