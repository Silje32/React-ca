// * The Homepage should have a list of all the products.
// * The homepage should have a lookahead/auto-complete Search bar component.

import useApi from "../hooks/useApi";
import { SearchbarStyling } from "../components/Searchbar/searchbar.styles";
import ShopList from "../components/Shop/Shoplist/index";
import { StyledHeading } from "../components/Checkout/success.styles";
import { url } from "../constants/api";

function Home() {

    const { data: shopping, loading, error } = useApi(url);

    if (loading) {
      return <div>Loading...</div>;
    }  
  
    if (error) {
      return <div>Sorry, something went wrong:{error}</div>;
    }  


    return (
       <>
         <SearchBar shopping={shopping} />
         <SearchbarStyling /> 
         <h1 isActive={true}>Home</h1>
         <StyledHeading />
         <ShopList shopping={shopping} />
       </>
    );       
}

export default Home;  