// * Display that the order was successful and clear the cart. 
// * There should be a link to go back to the store.

import { clearCart } from "../Store/CartStore/index";

function Success() {
        return (
          <>
            <h1 $isActive={true}>Thank you for your order!</h1>
            <useProductStore cart={clearCart} />
            <Link to={`/`}>Back to the store</Link>
          </>            
        );
    }
    
    export default Success;