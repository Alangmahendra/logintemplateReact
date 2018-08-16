import history from '../history'

export function userLoginAction(email, password) {
    return dispatch => {
        dispatch(loading())
        fetch('http://66.42.62.145/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        }).then(response => response.json())
            .then(json => {
                const data = json
                console.log(data)
                if (!data.token) {
                    history.push('/')
                } else {
                    dispatch(success(data))
                    localStorage.setItem('token',data.token)
                    if (localStorage.getItem('Usertoken')) {
                        history.push('/dashboardpage')
                    }
                }

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