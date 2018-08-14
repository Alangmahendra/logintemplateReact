import http from './http'


export function adminLoginAction(adminName,password){
    return dispatch => {
        dispatch(loading())
        http.post('/admin/signin',{adminName:adminName,password:password})
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
