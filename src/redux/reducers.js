import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from './loginActions';

const initialState = {
    id: '',
    name: '',
    email: ''
};

const activeUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            state = {
                id: action.user.id,
                name: action.user.name,
                email: action.user.email
            };
            return state;
        case LOGOUT:
            state = initialState;
            return state;
        default:
            return state;
    }
};

export default combineReducers({ activeUser });