import http from './http'

export function userLoginAction(username, password) {
    return dispatch => {
        dispatch(loading())
        http.post('/user/signin', { username: username, password: password })
            .then(response => {
                const token = response.data.data
                localStorage.setItem('tokenUser', token)
                success(response.data.data)
            })
            .catch(err => {
                dispatch(error())
            })
    }
}

export function loading() {
    return {
        type: 'LOADING'
    }
}

export function error() {
    return {
        type: 'ERROR'
    }
}

export function success(payload) {
    return {
        type: 'SUCCESS',
        payload
    }
};