import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    
    
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
} from './loginTypes';

const initialState = {
	loading: false,
    email: "",
    error: false,
    error_message: "",
}

const reducer = (state = initialState,action) => {
switch(action.type){
    case USER_LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            email: action.payload.email,
            error: false,
            error_message: "",
        };
    case USER_LOGIN_FAILURE:
        return {
            ...state,
            loading: false,
            error: true,
            error_message: action.payload
        }

    
    case USER_LOGOUT_SUCCESS:
        return {
            ...state,
            loading: false,
            email: '',
            error: false,
            error_message: "",
        };
    case USER_LOGOUT_FAILURE:
        return {
            ...state,
            loading: false,
            error: true,
            error_message: action.payload
        }
    
    default:
        return state;
}
}

export default reducer;