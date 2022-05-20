import {
    CHECK_BALANCE,
    UPDATE_BALANCE,
    REFRESH_PLAYS,
} from './spinTypes';

const initialState = {
	balance: 9.99,
    error: false,
    error_message: "",
    refresh: false
}

const reducer = (state = initialState,action) => {
switch(action.type){
    case REFRESH_PLAYS:
        return {
            ...state,
            refresh: action.payload.refresh
        };
    case CHECK_BALANCE:
        return {
            ...state,
            balance: action.payload.balance,
            error: false,
            error_message: "",
        };
    case UPDATE_BALANCE:
        return {
            ...state,
            balance: action.payload.balance,
            error: false,
            error_message: "",
        }
        
    
    default:
        return state;
}
}

export default reducer;