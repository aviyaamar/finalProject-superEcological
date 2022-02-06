import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import '../Navbar/Navbar.css'

const Navbar = () => {
    const cartreducer = useSelector((state) => state.cartReducer);
    const { cartItems } = cartreducer;
    const cart = <FontAwesomeIcon icon={faShoppingCart} />;
    const heart = <FontAwesomeIcon icon={faHeart}/>
    const sing = <FontAwesomeIcon icon={faSignInAlt}/>

  
    return (
        <section>
            <nav className='navbar'>
                <span className='logo'></span>
                <div className='linksNav'>
                    {/* <Link className='link' to='/component/HomePage'>Home</Link> */}
                    <Link className='link' to='/favorite'>{heart}</Link>
                    <Link className='link' to='/login'>{sing}</Link>
                    <Link className='link' to='/cart'>{cart} {cartItems.length}</Link>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;
