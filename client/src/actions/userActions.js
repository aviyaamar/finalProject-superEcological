import Api from '../Api/Api'
import { useHistory } from "react-router-dom";


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
        console.log(result);
        window.location.href='/'
       
     }catch(err){
         dispatch({type:'USER_REGISTER_FAILED' , payload : err})
         console.log(err);

     }
    }
}

export const logoutUser = ()=>dispatch=>{
  let history = useHistory();
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('favoriteItems')

    dispatch({type : 'USER_LOGOUT'})
    history.push("/login");
}

export const updateUser=(userid , updateduser)=>dispatch=>{
    dispatch({type:'USER_UPDATE_REQUEST'})
   Api.put("users/update" , {userid : userid , updateduser : updateduser})
     .then(res => {
        dispatch({type:'USER_UPDATE_SUCCESS'})
 
        console.log(res);
        window.location.href='/login'
 
     })
     .catch(err => {
        dispatch({type:'USER_UPDATE_FAILED' , payload : err})
        console.log(err);
 
     });
 
 }

 export const getAllUsers=()=>dispatch=>{
    dispatch({type:'GET_ALLUSERS_REQUEST'})
    Api.get('users').then(res=>{
      dispatch({type:'GET_ALLUSERS_SUCCESS' , payload : res.data})
    }).catch(err=>{
      dispatch({type:'GET_ALLUSERS_FAILED' , payload : err})
    })
}

export const deleteUser=(userid)=>dispatch=>{
    dispatch({type:'DELETE_USER_REQUEST'})
    Api.post('users/deleteuser' , {userid}).then(res=>{
      dispatch({type:'DELETE_USER_SUCCESS' , payload : res.data})
      alert('User deleted successfully')
      window.location.href='/admin'
 
    }).catch(err=>{
      dispatch({type:'DELETE_USER_FAILED' , payload : err})
 
    })
 
 
 }