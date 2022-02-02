import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <section>
            <nav className='navbar'>
                <span className='logo'></span>
                <div className='linksNav'>
                    {/* <Link className='link' to='/component/HomePage'>Home</Link> */}
                    <Link className='link' to='/favorite'>Favorit</Link>
                    <Link className='link' to='/Add'>Add Recipe</Link>
                    <Link className='link' to='/cart'>Cart</Link>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;
