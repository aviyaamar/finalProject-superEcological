import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, getAllUsers } from '../../actions/userActions'
import Loader from '../../component/Loading/Loading'
// import Error from '../components/Error'
import Home from '../Home/Home'

const UserList = () => {

  const getallusersstate = useSelector(state =>state.getAllUsersReducer)
  const {users , loading , error} = getallusersstate
  const dispatch = useDispatch()


  useEffect(() => {

      dispatch(getAllUsers())
      
  }, [])  
  return( 
  <div>
      <Home/>
        <h2>Users List</h2>
            <table className='table table-bordered table-responsive-sm'>

                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {loading && (<Loader/>)}
                    {error && (<h1>Something went wrong'</h1>)}
                    {users && (users.map(user=>{
                        return <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className="far fa-trash-alt" onClick={()=>{dispatch(deleteUser(user._id))}}>Delete</i></td>
                        </tr>
                    }))}
                </tbody>

            </table>
  </div>
  );
};

export default UserList;
