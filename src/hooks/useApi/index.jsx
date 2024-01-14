import { useState, useEffect } from 'react';

/**
 * Our API hook
 */
export default function useApi(url) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
  
      useEffect(() => {
          async function getData() {
  
            try {
              const response = await fetch(url);
              if(!response.ok) {
                throw new Error("The was an error when fetching the products"); 
  
              }
              const json = await response.json();
  
              console.log(json);
              setData(json);
            }  
  
            catch (error) {
              setError (error.toString());
            }
            finally {
              setLoading (false);
            } 
          }    
          getData();
        }, []); 


  return { loading, error, data };
}

