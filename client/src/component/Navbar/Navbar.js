import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import '../Navbar/Navbar.css'

const Navbar = () => {
    const cartreducer = useSelector((state) => state.cartReducer);
    const { cartItems } = cartreducer;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch()
    const cart = <FontAwesomeIcon icon={faShoppingCart} />;
    const heart = <FontAwesomeIcon icon={faHeart}/>
    const sing = <FontAwesomeIcon icon={faSignInAlt}/>



    return (
        <section>
            <nav className='navbar'>
                <span className='logo'></span>
                <div className='linksNav'>
                {currentUser ? (
              <div className="dropdown">
                <button  type="button" 
                 id="dropdownMenuButton"
                  data-toggle="dropdown"
                //   aria-haspopup="true"
                //   aria-expanded="false"
                > {currentUser.user.name}
                </button>
               <ul>
                    <div className="dropdown-menu"aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="/profile"> Profile</a></li>
                 <li><a className="dropdown-item" href="/order">Orders</a></li> 
                  <li className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>Logout  </li>
                </div>
                </ul>
              </div>
            ) : (<Link className='link' to='/login'>{sing}</Link>)}
                    {/* <Link className='link' to='/component/HomePage'>Home</Link> */}
                    <Link className='link' to='/favorite'>{heart}</Link>
                    <Link className='link' to='/cart'>{cart} {cartItems.length}</Link>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;
