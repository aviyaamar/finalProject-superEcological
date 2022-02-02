
import { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {registerNewUser} from '../actions/userActions'

const Register = () => {
    const registerState = useSelector(state=>state.registerNewUserReducer)
    const {loading , error , success} = registerState

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
   // const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('')

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
      <div className="row justify-content-center m-3">
        <div className="col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "100px" }}>
          <div className="div">
            <h2 style={{display: "inline"}} className="text-center m-3">Register</h2>
            <i style={{fontSize:'25px'}} className="fa fa-user-plus" aria-hidden="true"></i>

            {loading && (<h1>Loading ...</h1>)}
            {error && (<h1>'Email Address is already registred'</h1> )}
            {success && (<h1>'Your Registration is successfull'</h1> )}

              <form onSubmit={handleSubmission}>
              <input
              type="text"
              placeholder="name"
              className="form-control"
              required
              value={name}
              onChange={(e) => {
                setUserName(e.target.value);
                
              }}
            />
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

            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={passwordConfirm}
              required
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />

            <div className="text-right">
              <button type='submit' className="btn mt-3">
                REGISTER
              </button>
            </div>
              </form>
          </div>
          <a style={{color: 'black'}} href="/login" className='m-3'>Click Here To Login</a>
        </div>
      </div>
    </div>
  );
}
export default Register;