/**
 * Created by yangbo on 17/1/3.
 */
"use strict";
import {routerStateReducer} from 'redux-router';
import {combineReducers} from 'redux';
import {ADD_NUMBER} from '../actions'

const reducers = (state='', action) => {
    switch (action.type){
        case ADD_NUMBER:
            return action.number;
        default:
            return state
    }
};
const reducer = combineReducers({
    router: routerStateReducer,
    reducers
});
export default reducer