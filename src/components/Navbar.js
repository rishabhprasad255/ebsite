import React from 'react'
import style from "../css/navbar.module.css"
import hamburger from '../assets/hamburger.svg'
import Cart from '../assets/cart.svg'
import {useAppContext} from './UsingContext'

function Navbar() {
const {hideSideBar}=useAppContext();
    
    return (
        <div className={style.navbar}>
            <img src={hamburger} alt="hamburger" onClick={hideSideBar}/>
           <div className={style.input}>
           
               <input type="text" placeholder="SEARCH"></input>
           </div>

           <div className={style.nav_right_side}>
               <button>User</button>
               <button>Cart</button>
               <button>More</button>
                <img src={Cart} alt="cart"/>
           </div>
        </div>
    )
}
  
export default Navbar
