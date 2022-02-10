import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, getAllUsers } from '../../actions/userActions'
import Loader from '../../component/Loading/Loading'
import Error from '../../component/Error/Error'
import Succes from '../../component/Error/Succes'
import Home from '../Home/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { FiUsers } from "react-icons/fi";
import myImage from './figure.png'
const UserList = () => {
   const Trash = <FontAwesomeIcon style={{'height':'20px', 'width':'20px',}} icon={faTrash}/>

  const getallusersstate = useSelector(state =>state.getAllUsersReducer)
  const {users , loading , error} = getallusersstate
  const dispatch = useDispatch()


  useEffect(() => {
      dispatch(getAllUsers())
      
  }, [])  
  return( 
  <div>
      <Home/>
      <div className='user-admin'></div>
        <h2 className= 'text-center-h2'>USERS LIST <span><FiUsers/></span></h2>
                    {loading && (<Loader/>)}
                    {/* {error && (<Error error= 'Something went wrong'/>)} */}
                    <div className='users'>
                    {users && (users.map(user=>{
                        return (<div  key={user._id}className='usersList'>
                            <img className='image-users' src={myImage}/>
                            <h5>{user.name}</h5>
                            <h5>{user.email}</h5>
                            <i className="far fa-trash-alt" onClick={()=>{dispatch(deleteUser(user._id))}}>{Trash}</i>
                            </div>)
                    }))}
                    </div>
  </div>
  );
};

export default UserList;
