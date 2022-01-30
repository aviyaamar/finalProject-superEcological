import { useState } from 'react';
import Api from '../Api/Api'
// import './sign.css'

const Sign = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('')


    const handleSubmission = async () => {
        if (passwordConfirm !== password) {
            setShowMessage(true)
            setMessage('Your password conformation is in currect')
            setTimeout(() => {
                setShowMessage(false)
            }, 2000)
        } else if (password.length < 8) {
            setShowMessage(true)
            setMessage('Your password must be at least 8 digits')
            setTimeout(() => {
                setShowMessage(false)
            }, 2000)
        } else {
            try {
                const res = await Api.post('/register', {
                    password: password.toString(),
                    email,
                    name
                })
                localStorage.clear()
                localStorage.setItem('name', res.data.user.name)
                localStorage.setItem('token', res.data.token)
               
            } catch (e) {
                setMessage('Error in email Check the spelling and make sure you are not already registered')
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 2000)
            }
        }
    }


    return (
        <div className='glow-card-background'>
         <h3>Write your user name</h3>
                <input value={name}
                    onChange={(e) => setUserName(e.target.value)} />
                <h3>Enter your Email</h3>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <h3>Choose password</h3>
                <input value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <h3>Confirm your password</h3>
                <input value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)} />
                <br></br>
                {!showMessage && <div>
                    <button type='button' onClick={() => handleSubmission()}>Submit</button>
                    <button type='button' onClick={() => { 
                        setPassword('')
                        setEmail('')
                            }}
                    >Cancel</button>
                </div>}

                {showMessage && <h4 className='glow-card-h3 font-orange-shadow-red'>{message}</h4> }
            </div>
      
    )
}
export default Sign;