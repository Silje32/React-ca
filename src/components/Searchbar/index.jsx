// * Typing values in the search bar should display products where the title matches the search input.
// * Clicking on an item should take the user to the ProductPage page.
// * Filter the user input and then display products that match the input.


import { useState } from "react";
import { url } from "../../constants/api";
import { Link } from "react-router-dom";

function SearchBar({ shopping = [] }) {

    const [product, setProduct] = useState ("");

    console.log("search", setProduct ); 

    const filterProducts = shopping.filter(shop => shop.title.toLowerCase().includes(product.toLowerCase())); 
       console.log("filterProducts", filterProducts);
       

    return ( 
        <div>
            <p>Search product:</p>
            <Input $isActive={true} value={setProduct} onChange={(event) => setProduct(event.target.value.trim())} />
            {filterProducts.length > 0 && product.length > 0 && (
              <ul>
                 {filterProducts.map}((shop) => {
                    return (
                       <li key={shop.id}>
                          <Link to={`/product/${shop.id}`}> 
                            {shop.title}
                          </Link>
                       </li>
                    );
                })}
              </ul>
        </div>
    );
}

export default SearchBar;