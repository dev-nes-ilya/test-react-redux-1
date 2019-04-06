import {combineReducers} from 'redux';
import appReducer from './reducerMenu'

export default combineReducers({
    app: appReducer
})
