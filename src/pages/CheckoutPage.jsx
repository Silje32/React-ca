//Must list all of the products in the cart, show a total at the bottom and a Checkout button.

import { Link } from "react-router-dom";
import Checkout from "../components/Checkout/index";
import { StyledHeading } from "../components/Checkout/success.styles";

function CheckoutPage() {
    return (
       <>
         <h1 isActive={true}>Checkout</h1>
         <StyledHeading />
         <Checkout cart={useCartStore} />
         <BaseButton><Link to={success} onClick={() => Checkout()}>Checkout</Link></BaseButton>
       </>
    );
}

export default CheckoutPage;  