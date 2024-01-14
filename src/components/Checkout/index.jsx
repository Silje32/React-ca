import { addToCart } from "../Store/CartStore/index";

function Checkout() {
    return (
        <>
           <h1 $isActive={true} >PRODUCTS IN THE CART</h1>
           <useProductStore cart={addToCart} /> 
        </>
    );
}

export default Checkout; 