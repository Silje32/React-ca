import styled from "styled-components";

export const NavStyling = styled.nav`
   border: 2px solid black;
   border-radius: 6px;
   background: none;
   padding: 10px 20px;
   font-size: 18px;
   font-family: Arial, sans-serif;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "white" : "black")};
   background-color: ${(props) => props.$isActive ? "grey" : "black"};


   :hover {
      background-color: white;
      color: darkgrey;
   }

`;
