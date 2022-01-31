import React, { useState } from 'react';
import Login from '../component/Login'
import Register from '../component/Register'
import Api from '../Api/Api'

const Home = () => {
    const [logOrSingCard, setLogOrSingCard] = useState(false)
    const [isSingCardOpen, setIsSingCardOpen] = useState(false)
    const [isloginCardOpen, setIsloginCardOpen] = useState(false)  
    return (
        <>
            <div>
                <div>
                   
                    <br />
                    <div>
                        {!logOrSingCard && <button
                            className='glow-card-button'
                            onClick={() => {
                                setLogOrSingCard(true);
                            }
                            }>Get started</button>}
                        {logOrSingCard &&
                            <>
                                <button
                                    className='glow-card-button'
                                    onClick={() => setIsloginCardOpen(true)}>Login</button>
                                <button
                                    className='glow-card-button'
                                    onClick={() => setIsSingCardOpen(true)}>Sing</button>
                                {/* <button
                                    className='glow-card-button'
                                    onClick={() => handelGuest()

                                    }>Guest</button> */}
                                
                            </>
                        }
                    </div>
                </div>
            </div>
            {isloginCardOpen && <Login
                setIsloginCardOpen={setIsloginCardOpen}
                //setIsUserLogedIn={setIsUserLogedIn}
            />}
            {isSingCardOpen && <Register
                setIsSingCardOpen={setIsSingCardOpen}
                //setIsUserLogedIn={setIsUserLogedIn}
            />}
        </>
    )
}



export default Home;
