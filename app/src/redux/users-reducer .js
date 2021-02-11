import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.Count }
        }
        case TOOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export const followSucces = (usersId) => ({ type: FOLLOW, usersId })
export const unfollowSucces = (usersId) => ({ type: UNFOLLOW, usersId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        usersAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSucces(userId))
            }
        });
        dispatch(followSucces(userId))
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        usersAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSucces(userId))
            }
        });
        dispatch(unfollowSucces(userId))
    }
}

export default usersReducer;