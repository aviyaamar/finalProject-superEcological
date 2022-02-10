import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import './nav.css'
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
 

  
    return (
<div>
             {/* <div className='hide'>
             <div><FiUsers/></div>
             <div><RiProductHuntLine/></div>
             <div><AiOutlineFileAdd/></div> 
             <div><AiOutlineUnorderedList/></div>   
            </div>
            */}
            <nav className='admin-nav-container'>
                <span className='logo'></span>
                <div className='admin-nav'>
              
                           <Link className='link admin delay-1 ' to='/admin/userslist' style={{color:'black'}}><FiUsers className='size'/></Link>
                           <Link  className='link admin delay-2' to='/admin/productslist' style={{color:'black'}}><RiProductHuntLine  className='size'/></Link>
                           <Link className='link  admin delay-3 ' to='/admin/addnewproduct' style={{color:'black'}}><AiOutlineFileAdd  className='size'/></Link>
                           <Link className='link admin  delay-4' to='/admin/orderslist' style={{color:'black'}}><AiOutlineUnorderedList  className='size'/></Link>
                </div>     
            </nav>
            </div>
    )
}

export default Navbar;
