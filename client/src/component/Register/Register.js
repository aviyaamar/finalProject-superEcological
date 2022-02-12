
import { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {registerNewUser} from '../../actions/userActions'
import { Link } from 'react-router-dom';
import Loader from '../Loading/Loading';
import Success from '../Error/Succes';
import Error from '../Error/Error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import '../Login/Login.css'

import './Register.css'
const Register = () => {
  const eye = <FontAwesomeIcon icon={faEye} />;

    const registerState = useSelector(state=>state.registerNewUserReducer)
    const {loading , error , success} = registerState

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
  
    const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown);
    };

    const dispatch = useDispatch()


    const handleSubmission = async (e) => {
        e.preventDefault()
        const user={
            name : name ,
            email : email , 
            password : password
        }
        if(password==passwordConfirm)
        {
            dispatch(registerNewUser(user))
        }
        else{
            setMessage('password not matched')
        }
    }

    return (
        <div>
      <div className="hero">
        <div className="form" >
          <div className="div">
            <h2 className="company">Register</h2>
            <i style={{fontSize:'25px'}} className="fa fa-user-plus" aria-hidden="true"></i>

            {loading && (<Loader/>)}
            {error && (<Error error='Email Address is already registred'/> )}
            {success && (<Success success='Your Registration is successfull'/> )}

              <form onSubmit={handleSubmission}>
              <input
              type="text"
              placeholder="name"
              className="inputTxt"
              required
              value={name}
              onChange={(e) => {
                setUserName(e.target.value);
                
              }}
            /><br/>
            <input
              type="text"
              placeholder="email"
              className="inputTxt"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br/>
            <input
              type="password"
              placeholder="password"
              className="inputTxt"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
             <span class="input-eye"> <i style={{'height':'100px', 'width':'100px'}} onClick={togglePassword}>{eye}</i>{" "}</span>
            <br/>
            

            <input
              type="password"
              placeholder="confirm password"
              className="inputTxt"
              value={passwordConfirm}
              required
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
              <span class="input-eye"> <i style={{'height':'100px', 'width':'100px'}} onClick={togglePassword}>{eye}</i>{" "}</span>

            <div className="text-right">
              <button type='submit' className="btn">
                REGISTER
              </button>
            </div>
              </form>
          </div>
          <span><Link className='btn other' to='/login'>SIGN IN</Link> </span> 
        </div>
      </div>
    </div>
  );
}
export default Register;