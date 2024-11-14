import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'



const Navbar = () => {

  const[menu,setMenu]=useState("home");
  const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>
     
      <Link to='/'><p className='logo'>KOBITAKON.</p></Link>
       
       <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menuu' onClick={()=>setMenu("menu")} className={menu==="explore-menuu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
        
       </ul>
       <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

        <Link to='/login'><button>Login</button></Link>
       </div>

      
    </div>
  )
}

export default Navbar
