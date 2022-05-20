import {
    CHECK_BALANCE,
    UPDATE_BALANCE,
    REFRESH_PLAYS
} from './spinTypes';

export const refreshPlaysSucess = (refresh_info) => {
    return {
        type: REFRESH_PLAYS,
        payload: refresh_info
    }
}

export const checkBalanceSuccess = (balance_info) => {
    return {
        type: CHECK_BALANCE,
        payload: balance_info
    }
}


export const updateBalanceSuccess = (balance_info) => {
    return {
        type: UPDATE_BALANCE,
        payload: balance_info
    }
}

export const refreshPlays = () => {
    return async (dispatch) => {
        let refresh_info = {
            refresh: true,
        };
        dispatch(refreshPlaysSucess(refresh_info));
    }
}


export const addBalance = (amt) => {
    return async (dispatch, getState) => {
        let balance = getState().spin.balance
        let balance_info = {
            balance: amt,
        };
        console.log('added ', balance, balance_info)
        dispatch(updateBalanceSuccess(balance_info));
    }
}

export const checkBalance = () => {
    return async (dispatch, getState) => {
        let balance = getState().spin.balance
        let balance_info = {
            balance: balance
        };
        dispatch(checkBalanceSuccess(balance_info));
    }
}
