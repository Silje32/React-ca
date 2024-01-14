import { NavLink } from "react-router-dom";
import { NavStyling } from "../Nav/nav.styles";


function Nav() {
    return (
      <div>
        <ul>
          <li>
            <NavLink isactive={true} onClick={() => NavStyling()} to="/">Home</NavLink>
            <NavStyling />
          </li>
          <li>
            <NavLink isactive={true} onClick={() => NavStyling()} to="contact">Contact</NavLink>
            <NavStyling />
          </li>
        </ul> 
      </div>
    );
  }

export default Nav;