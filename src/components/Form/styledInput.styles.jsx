import styled from "styled-components";

export const StyledInput = styled.input`
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
      background-color: darkgrey;
      color: white;
   }
`;


export default StyledMessage = styled.p`
   font-size: 14px;
   font-family: Arial, sans-serif;
   color: ${(props) => (props.$isActive ? "red" : "black")};
`;
