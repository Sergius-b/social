import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "c5253777-0a95-4d15-8bbc-81c54f79ce0f"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/ + userId`)
    }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, remember = false) {
    return instance.post(`auth/login`, {email, password, remember});
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}




