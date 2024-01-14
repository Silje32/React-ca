// * The header should contain a nav bar as well as a Cart icon component that acts as a button.

import { BaseButton } from "../Togglebutton/togglebutton.styles";
import { Link } from "react-router-dom";

function Header() {

    console.log();

    return (
      <>
       <header>
          <div>Header with Logo and nav</div>
          <BaseButton><Link to={"checkout"} onClick={() => Checkout()}>{CartIcon}</Link></BaseButton>    
       </header>
      </>     
    );
  }

export default Header;