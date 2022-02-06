
import { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {loginUser } from '../../actions/userActions'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loading/Loading'



import './Login.css'


const Login = () => {
    const loginReducer = useSelector(state=>state.loginReducer )
    const {loading , error , success} = loginReducer 

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
  
    const togglePassword = () => {

      setPasswordShown(!passwordShown);
    };
    const dispatch = useDispatch()


    const handleSubmission = async (e) => {
        e.preventDefault()
        const user={
            email : email , 
            password : password
        }
        dispatch(loginUser(user))
    }
    const eye = <FontAwesomeIcon icon={faEye} />;

    return (
        <div className='hero'>
        <div className="form" id='login'>
          <div className="con" >
            <div className="div">
              <h2 className="company">LOGIN</h2>
               <i style={{fontSize:'25px'}} className="fa fa-sign-in" aria-hidden="true"></i>
  
              {error && (<h1>'Invalid Credentials'</h1> )}
              {loading && (<Loader/>)}
  
              <form onSubmit={handleSubmission}>
         
              <input className="inputTxt"
                type="text"
                placeholder="email"
            
                value={email}
                required
                onChange={(e) => {
                setEmail(e.target.value);
                }}
              /><br/>
  
             <div className="pwd">
              <input className="inputTxt"
                type={passwordShown ? "text" : "password"}
                placeholder="password"
                id="pwd"
                value={password}
                required
                onChange={(e) => {
                    setPassword(e.target.value);
                }}  
              />
              <span class="input-item"> <i style={{'height':'100px', 'width':'100px'}} onClick={togglePassword}>{eye}</i>{" "}</span>
              </div>
             

              <div className="text-right">
                <button className="btn" type='submit' className="btn mt-3">
                  LOGIN
                </button>
              
              </div>
              <span><Link className='btn other' to='/register'>Sing Up</Link> </span> 
                </form>
  
              
            </div>
            
         
          </div>
        
        </div>
      </div>
      
    );


    
}
export default Login;