import classes from "./Navbar.module.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavBar() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={classes.nav}>
      <div className={classes.menu}>
        <div className={classes.iconBox}>
          <BiMenuAltLeft />
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeClass : classes.iconBox
          }
          to="/home"
        >
          <div>
            <SiHomeassistantcommunitystore />
          </div>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? classes.activeClass : classes.cart
          }
        >
          {
            <div>
              <FaShoppingBag />
              <div className={classes.circle}>{cart.totalQuantity}</div>
            </div>
          }
        </NavLink>
      </div>
      <div className={classes.profile}>
        {
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? classes.signInActive : classes.exit
            }
          >
            {
              <div>
                <IoExit />
              </div>
            }
          </NavLink>
        }
      </div>
    </div>
  );
}

export default NavBar;
