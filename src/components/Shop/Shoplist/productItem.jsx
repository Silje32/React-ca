// * Loop through the products and display a Product component for each of the values.
// * This Product component should look like a product card.
// * Each Product component will have a View product button which will link to the ProductPage page.

import { Link } from "react-router-dom";
import { BaseButton } from "../../Togglebutton/togglebutton.styles";
  
function ProductItem({ shop }) {

       const { id, title, description, price, discountedPrice, imageUrl, rating, tags } = shop;
      
    return (
        <div>
             <h2>{title}</h2>
             <p>{description}</p>
             <p>Price:{price}</p>
             <p>Discounted Price:{discountedPrice}</p>
             <div>{imageUrl}</div>
             <div>Rating:{rating}</div>
             <div>Tags:{tags}</div>
             <BaseButton><Link to={`product/${id}`}>View more</Link></BaseButton>   
        </div>       
    );
}

export default ProductItem;