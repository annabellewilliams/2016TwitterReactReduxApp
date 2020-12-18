import { combineReducers } from 'redux';

import userReducer from './tweets';

export default combineReducers({
    timeline: userReducer
});