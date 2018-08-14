import http from './http'


export function userFormAction(){
    return dispatch => {
        dispatch(loading())
        http.post('/user/signupform',)
        .then(response => {
            const token = response.data.data
            localStorage.setItem('tokenAdmin',token)
            success(token)
        })
        .catch(err=>{
            dispatch(error())
        })
    }
}

export function loading(){
    return{
        type:'LOADING'
    }
}

export function error(){
    return {
        type:'ERROR'
    }
}
export function success(payload){
    return{
        type:'SUCCESS',
        payload
    }
};
