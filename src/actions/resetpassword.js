import history from '../history'

export function resetPassword(email) {
    return dispatch => {
        dispatch(loading())
        fetch('http://66.42.62.145/auth/password/reset/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email})
        }).then(response => response.json())
            .then(json => {
                const data = json
                console.log(data)
                // localStorage.setItem('token',data.token)
                dispatch(success(data))
                history.push('/')
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