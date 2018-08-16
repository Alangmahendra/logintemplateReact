import history from '../history'

export function userFormAction(email, username, password1, password2) {
    return dispatch => {
        dispatch(loading())
        fetch('http://66.42.62.145/registration/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, username: username, password1: password1, password2: password2 })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch(success(json))
                history.push('/userlogin')
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
