import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CONTACT_SIGN = 'SET_CONTACT_SIGN';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setContactSign = (login, password) => ({ type: SET_CONTACT_SIGN, payload: {login, password} })
export const setAuthUserData = (usersId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { usersId, email, login, isAuth } })
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, remember) => (dispatch) => {
    authAPI.login(email, password, remember)
    .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData())
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;

