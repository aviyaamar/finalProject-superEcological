import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
 

  
    return (
        <section>
           
            <nav className='admin-nav-container'>
                <span className='logo'></span>
                <div className='admin-nav'>
              
                           <Link className='link admin item-4 ' to='/admin/userslist' style={{color:'black'}}>UsersList</Link>
                           <Link  className='link admin item-4 ' to='/admin/productslist' style={{color:'black'}}>Products List</Link>
                           <Link className='link  admin item-4 ' to='/admin/addnewproduct' style={{color:'black'}}>Add New Product</Link>
                           <Link className='link admin item-4 ' to='/admin/orderslist' style={{color:'black'}}>Orderslist</Link>
                </div>     
            </nav>
        </section>
    )
}

export default Navbar;
