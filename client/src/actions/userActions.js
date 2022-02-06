import Api from '../Api/Api'

export const registerNewUser  = (user)=>{
    return async dispatch =>{
        dispatch({type:'USER_REGISTER_REQUEST'})
    try{
        const result= await Api.post('/users/register', user)
        dispatch({type:'USER_REGISTER_SUCCESS',  payload: result})
        window.location.href='/'
        console.log(result);
     }catch(err){
         dispatch({type:'USER_REGISTER_FAILED' , payload : err})
         console.log(err);

     }

    }
} 

export const loginUser = (user) =>{
    return async dispatch=>{
    dispatch({type:'USER_LOGIN_REQUEST'})
    try{
        const result= await Api.post('/users/login', user)
        dispatch({type:'USER_REGISTER_SUCCESS',  payload: result})
        localStorage.setItem("currentUser", JSON.stringify(result.data))
        window.location.href='/'
        console.log(result);
     }catch(err){
         dispatch({type:'USER_REGISTER_FAILED' , payload : err})
         console.log(err);

     }
    }
}

export const logoutUser = ()=>dispatch=>{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')

    dispatch({type : 'USER_LOGOUT'})
    window.location.href='/login'
}