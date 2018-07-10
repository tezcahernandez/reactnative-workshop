import { combineReducers } from 'redux';

import NavigatorReducer from './NavigatorReducer';
import CurrentNewsReducer from './CurrentNewsReducer';

export default combineReducers({
    NavigatorReducer: NavigatorReducer,
    CurrentNewsReducer: CurrentNewsReducer
})