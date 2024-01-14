import styled from "styled-components";

export const BaseButton = styled.button`
   border: 2px solid black;
   border-radius: 6px;
   background: none;
   padding: 10px 20px;
   font-size: 18px;
   font-family: Arial, sans-serif;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "white" : "black")};
   background-color: ${(props) => props.$isActive ? "red" : "teal"};

   :hover {
      background-color: white;
      color: black;
   }

`;
