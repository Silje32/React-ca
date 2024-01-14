import StyledMessage from "../Form/styledInput.styles";

function ValidationMessage({children}) {
    return (
        <>
           <p isActive={true} >{children}</p>;
           <StyledMessage />
        </>
    );   
}

export default ValidationMessage;