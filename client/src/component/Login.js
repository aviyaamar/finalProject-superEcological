
import { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {loginUser } from '../actions/userActions'

const Login = () => {
    const loginReducer = useSelector(state=>state.loginReducer )
    const {loading , error , success} = loginReducer 

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()


    const handleSubmission = async (e) => {
        e.preventDefault()
        const user={
            email : email , 
            password : password
        }
        dispatch(loginUser(user))
    }

    return (
        <div>
        <div className="row justify-content-center m-3">
          <div className="col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "100px" }}>
            <div className="div">
              <h2 className="text-center m-3" style={{display: "inline"}}>LOGIN</h2>
               <i style={{fontSize:'25px'}} className="fa fa-sign-in" aria-hidden="true"></i>
  
              {error && (<h1>'Invalid Credentials'</h1> )}
              {loading && (<h1>Loading...</h1>)}
  
                <form onSubmit={handleSubmission}>
             
              <input
                type="text"
                placeholder="email"
                className="form-control"
                value={email}
                required
                onChange={(e) => {
                setEmail(e.target.value);
                }}
              />
  
              <input
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
              />
              <div className="text-right">
                <button type='submit' className="btn mt-3">
                  LOGIN
                </button>
              </div>
                </form>
  
              
            </div>
            
            <a style={{color:'black'}} href="/register" className='mt-3'>Click Here To Register</a>
          </div>
        </div>
      </div>
    );
}
export default Login;