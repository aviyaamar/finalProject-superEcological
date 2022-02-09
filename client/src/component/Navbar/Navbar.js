import React,{useState} from 'react';
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
    const [open, setOpen] = useState(false)
    const drop = React.useRef(null);
    const liCls =
    "p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";
  
    function handleClick(e) {
      if (!e.target.closest(`.${drop.current.className}`) && open) {
        setOpen(false);
      }
    }

    React.useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
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
              <div className="dropdown" ref={drop} style={{ 'position': "relative",'margin': "16px", 'width': "auto",
                'display': "inline-block"
              }}
              >
                <button  type="button" onClick={()=>setOpen(open => !open)}
                 id="dropdownMenuButton"
                  data-toggle="dropdown"
                //   aria-haspopup="true"
                //   aria-expanded="false"
                > {currentUser.user.name}
              
              </button>
              
                {open && 
                <div className="shadow h-auto w-56 absolute">
               <ul>
                <li  className={liCls}  onClick={() => setOpen(false)}><a href="/profile"> Profile</a></li>
                 <li><a className="dropdown-item" href="/order">Orders</a></li> 
                  <li className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>Logout  </li>
                </ul>
              </div>}
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
