import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import '../Navbar/Navbar.css'

const Navbar = () => {
    const cartreducer = useSelector((state) => state.cartReducer);
    const { cartItems } = cartreducer;
  
    return (
        <section>
            <nav className='navbar'>
                <span className='logo'></span>
                <div className='linksNav'>
                    {/* <Link className='link' to='/component/HomePage'>Home</Link> */}
                    <Link className='link' to='/favorite'>Favorit</Link>
                    <Link className='link' to='/Add'>Add Recipe</Link>
                    <Link className='link' to='/cart'>Cart {cartItems.length}</Link>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;
