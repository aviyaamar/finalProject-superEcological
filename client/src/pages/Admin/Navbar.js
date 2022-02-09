import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import {faHeart} from '@fortawesome/free-solid-svg-icons'
// import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
// import '../Navbar/Navbar.css'

const Navbar = () => {
    // const cartreducer = useSelector((state) => state.cartReducer);
    // const { cartItems } = cartreducer;
    // const cart = <FontAwesomeIcon icon={faShoppingCart} />;
    // const heart = <FontAwesomeIcon icon={faHeart}/>
    // const sing = <FontAwesomeIcon icon={faSignInAlt}/>

  
    return (
        <section>
            <nav className='navbar'>
                <span className='logo'></span>
                <div className='admin-nav'>
              
                           <Link className='link' to='/admin/userslist' style={{color:'black'}}>UsersList</Link>
                           <Link  className='link' to='/admin/productslist' style={{color:'black'}}>Products List</Link>
                           <Link className='link' to='/admin/addnewproduct' style={{color:'black'}}>Add New Product</Link>
                           <Link className='link' to='/admin/orderslist' style={{color:'black'}}>Orderslist</Link>
                    

                </div>
            </nav>
        </section>
    )
}

export default Navbar;
