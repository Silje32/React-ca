// * There should be an Add to cart button which, upon clicking, adds the product to the cart. 
// * The product page should display the title of the product, the description and the image.
// * There should also be reviews listed for the product, if there are any. 
// * You should use the discountedPrice property to display the price of the product.
//If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. 
//Calculate what this discount is and display it on the page.

//On the ProductPage, use the ID of the product as the params for the dynamic segment. 
//Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart.

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BaseButton } from "../../Togglebutton/togglebutton.styles";
import { url } from "../../../constants/api";

//* Individual product page 
function ProductCard() {

       const { id } = useParams();
          console.log(params);

       const [loading, setLoading] = useState(true);
       const [error, setError] = useState(null);
       const [shop, setShop] = useState([]);
       const [cart, setCart] = useState(0);

       useEffect(() => {
        async function getData() {

          try {
            const response = await fetch(url);
            if(!response.ok) {
              throw new Error("The was an error when fetching the products"); 

            }
            const json = await response.json();

            console.log(json);
            setShop(json);
          }  

          catch (error) {
            setError (error.toString());
          }
          finally {
            setLoading (false);
          } 
        }


        getData (`${url}/${id}`);    
      }, [id]);

      if (loading || !shop) {
        return <div>Loading...</div>;
      }  
    
      if (error) {
        return <div>Sorry, something went wrong:{error}</div>;
      }  
    
    return (
        <div>
              <div>{params.id}</div>
              <div>id:{shop.id}</div>
              <div>title:{shop.title}</div>
              <div>description:{shop.description}</div>
              <div>image:{shop.imageUrl}</div>
              <div>reviews:{shop.reviews}</div>
              <div>discountedprice:{shop.discountedPrice}</div>
              <BaseButton isActive={true} onClick={() => setCart(cart)}>Add to cart</BaseButton>     
        </div>
    );
}

export default ProductCard;