//The individual product page should display data for a single product.

import ProductCard from "../components/Products/Productcard";
import { CardStyling } from "../components/Products/Productcard/productcard.styles";
import { StyledHeading } from "../components/Checkout/success.styles";

function ProductPage() {
    return (
        <>
           <h1 isActive={true}>Products:</h1> 
           <ProductCard />
           <CardStyling />
           <StyledHeading />
        </>      
    );
}

export default ProductPage;