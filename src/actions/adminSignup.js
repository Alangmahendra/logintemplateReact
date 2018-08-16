import http from './http'

export default function adminSignupAction(username,password){
    return dispatch => {
        dispatch(loading())
        http.post('/admin/signup',{username:username,password:password})
        .then(response => {
           console.log(response.data.data)
            dispatch(success(response.data.data))
        })
        .catch(err=>{
            dispatch(error())
        })
    }
}

function loading(){
    return{
        type:'LOADING'
    }
}

function error(){
    return {
        type:'ERROR'
    }
}

 function success(payload){
    return{
        type:'SUCCESS',
        payload
    }
};