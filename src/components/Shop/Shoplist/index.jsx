//Fetch the list of products on the Homepage and store this as a state.
//Clicking on a product should take a user to an individual product page.

function ShopList({ shopping=[] }) {
    return ( 
      <div>
        {shopping.map((shop) => (
          <div key={shop.id}>
              <ProductItem title={title} description={description} image={imageUrl} price={price} />
           </div>
         ))}     
      </div>
       
    );
}

export default ShopList;

