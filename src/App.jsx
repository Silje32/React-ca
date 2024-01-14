import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Product from "./pages/ProductPage";
import Contact from "./pages/ContactPage";
import Checkout from "./pages/CheckoutPage";
import CheckoutSuccess from "./pages/CheckoutSuccessPage";
  
  function App() {

    console.log();
  
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="success" element={<CheckoutSuccess />} />
          </Route>
        </Routes>
      </>
    );
  }
  
  export default App;
