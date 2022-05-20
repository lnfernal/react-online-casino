import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
} from './loginTypes';


export const loginSuccess = (user_info) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user_info
    }
}

export const loginFailure = (error_message) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error_message
    }
}


export const logoutSuccess = (user_info) => {
    return {
        type: USER_LOGOUT_SUCCESS,
        payload: user_info
    }
}

export const logoutFailure = (error_message) => {
    return {
        type: USER_LOGOUT_FAILURE,
        payload: error_message
    }
}


export const userLogin = (user) => {
    return async (dispatch) => {
        let email = user.email
        console.log(user)
        let user_info = {
            email: email,
        };
        dispatch(loginSuccess(user_info));
        return ''
    }
}

export const userLogout = () => {
    return async (dispatch) => {
        let user_info = {
            email: '',
        };
        dispatch(logoutSuccess(user_info));
        return ''
    }
}
