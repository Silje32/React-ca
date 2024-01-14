// Acts as a button as well as displays the current number of items in the cart.
// * Clicking on the Cart Icon component will take the user to the CheckoutPage page.

import { addCart } from "../Store/CartStore/useProductStore";


function CartIcon() {

    console.log();

    return (
        <>
            <p>Items:</p>
            <button onClick={() => onButtonClick({ addCart })}>CART</button>
        </>
    );
}

export default CartIcon;

