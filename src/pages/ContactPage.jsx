import { StyledHeading } from "../components/Checkout/success.styles";

function Contact() {
    return (
        <>
          <h1 isActive={true}>Contact</h1>
          <StyledHeading />
          <ContactForm />
          <StyledInput />
          <StyledMessage />
        </>
    );
  }

export default Contact;  


  