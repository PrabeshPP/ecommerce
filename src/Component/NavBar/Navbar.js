import classes from "./Navbar.module.css";
import {BiMenuAltLeft} from "react-icons/bi";
import {SiHomeassistantcommunitystore} from "react-icons/si";
import {FaShoppingBag} from "react-icons/fa";
import {IoExit} from "react-icons/io5";
import { useState } from "react";
import {CgProfile} from "react-icons/cg";

const ListIcons=[
    BiMenuAltLeft,
    SiHomeassistantcommunitystore,
    FaShoppingBag,
]

function NavBar(){
    const[isSignedIn,setSignedIn]=useState(true);

    const onLogoutHandler=()=>{
        setSignedIn(!isSignedIn);
    }

    return(
        <div className={classes.nav}>
            <div className={classes.menu}>
            {
                ListIcons.map((Icon)=>(
                    <div className={classes.iconBox} key={Icon}>
                    <Icon/>
                    </div>
                ))
            }
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