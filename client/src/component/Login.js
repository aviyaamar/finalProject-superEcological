import { useState } from 'react';
import Api from '../Api/Api';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [isCancelActive, setIsCancelActive] = useState(true);

    const handleSubmission = async () => {
      try {
          setIsCancelActive(false);
          const res = await Api.post('users/login', {
              password: password.toString(),
              email
          });
          localStorage.setItem('name', res.data.user.name)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id', res.data.user._id)
      } catch (e) {
          if (!showMessage) {
              setShowMessage(true);
              setTimeout(() => {
                  setShowMessage(false)
                  setIsCancelActive(true);
              }, 2000)
          }
      }
  }
return(
    <div>
        <h2>Welcome Back</h2>
            <br></br>
            <h3>Email</h3>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h3>Password</h3>
            <input value={password} onChange={(e) => setPassword(e.target.value.split(' '))} />
            <div>
                <button type='button' onClick={() => { handleSubmission() }}>Submit</button>
               {/* <button  className='glow-card-button' type='button' onClick={() => { isCancelActive  }}>Cancel</button> */}
            </div>
            <br />
            {!showMessage && < br />}
            {showMessage && <h4 className='glow-card-h3'>Wrong input please try again</h4>}
        </div>
   
)
}


export default Login;
