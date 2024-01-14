import styled from "styled-components";

export const CardStyling = styled.div`
   border: 2px solid black;
   border-radius: 6px;
   background: none;
   padding: 10px 20px;
   font-size: 18px;
   font-family: Arial, sans-serif;
   max-width: 200px;
   cursor: pointer;
   display: flex;
   align-items: center;
   color: ${(props) => (props.$isActive ? "white" : "black")};
   background-color: ${(props) => props.$isActive ? "red" : "teal"};

   :hover {
      background-color: white;
      color: black;
   }

`;
