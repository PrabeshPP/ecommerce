import classes from "./Navbar.module.css";
import {BiMenuAltLeft} from "react-icons/bi";
import {SiHomeassistantcommunitystore} from "react-icons/si";
import {FaShoppingBag} from "react-icons/fa";
import {IoExit} from "react-icons/io5";
import { useState } from "react";
import {CgProfile} from "react-icons/cg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


function NavBar(){
    const cart=useSelector((state)=>state.cart);
    const[isSignedIn,setSignedIn]=useState(true);

    const onLogoutHandler=()=>{
        setSignedIn(!isSignedIn);
    }

    return(
        <div className={classes.nav}>
            <div className={classes.menu}>
                    <div className={classes.iconBox}>
                    <BiMenuAltLeft/>
                    </div>
                    <NavLink className={({isActive})=>isActive?classes.activeClass:classes.iconBox} to="/home">
                    <div >
                    <SiHomeassistantcommunitystore/>
                    </div>
                    </NavLink>
                    <NavLink to="/cart" className={({isActive})=>isActive?classes.activeClass:classes.cart}>
                        {
                            <div >
                    <FaShoppingBag/>
                    <div className={classes.circle}>{cart.totalQuantity}</div>
                    </div>
                        }
                    </NavLink>
            </div>
            <div className={classes.profile}>
                {
                    isSignedIn && <div className={classes.exit} onClick={onLogoutHandler}>
                <IoExit/>
                </div>
                }
                {
                    !isSignedIn && <div className={classes.signIn} onClick={onLogoutHandler}>
                <CgProfile/>
                </div>
                }
            </div>
        </div>
    )
    
}

export default NavBar;