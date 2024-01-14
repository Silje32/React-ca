
function toggleButton() {
    console.log("Button clicked");
   
    
    return ( 
        <div>
            <BaseButton $isActive={false} onClick={() => toggleButton()}>View product</BaseButton>
        </div>        
     );
}

export default toggleButton;