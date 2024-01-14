import Success from "../components/Checkout/success";
import { StyledHeading } from "../components/Checkout/success.styles";

function SuccessPage() {
  return (
     <>
       <h1 isActive={true}>Your order was successful</h1>
       <Success />
       <StyledHeading />
     </>
  );
}

export default SuccessPage;  