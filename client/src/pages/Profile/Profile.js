import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/userActions";
import Loader from '../../component/Loading/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Error from '../../component/Error/Error'
import Succes from '../../component/Error/Succes'

const Profile = () => {
    const loginstate = useSelector((state)=> state.loginReducer)
    const updateUserstate = useSelector((state)=>state.updateReducer)
    const currentUser = loginstate.currentUser
    const {loading, success, error} = updateUserstate
    const dispatch = useDispatch()

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setUserName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [message, setMessage] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const eye = <FontAwesomeIcon icon={faEye} />;
  
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };

    const handleSubmission = async (e) => {
      e.preventDefault()
    if (password == passwordConfirm) {
      const updateduser = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(updateUser(currentUser._id , updateduser));
    }
    else{
        setMessage('Passwords Not matched')
    }
    }

  return(
     <div>
      <div className="hero">
        <div className="form" >
          <div className="div">
            <h2 className="company">UPDATE</h2>
            <i style={{fontSize:'25px'}} className="fa fa-user-plus" aria-hidden="true"></i>

            {loading && (<Loader/>)}
            {error && (<Error/> )}
            {success && (<Succes/> )}

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
                UPDATE
              </button>
            </div>
              </form>
          </div>
          <span><Link className='btn other' to='/login'>Sing In</Link> </span> 
        </div>
      </div>
    </div>
  );
}

export default Profile;
