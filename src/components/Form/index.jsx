import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ValidationMessage from "./validationmessage";
import { url } from "../../constants/api";


// * Adding yup validation
const schema = yup
  .object({
     fullName: yup.string().min(3, "Your full name should be at least 3 characters.").required("minimum 3 characters required"),
     subject: yup.string().min(3, "Your subject should be at least 3 characters.").required("number required"),
     email: yup.string().email("Please write a valid email address.").required("email required"),
     body: yup.string().min(3, "Your body should be at least 3 characters.").required("minimum 3 characters required"),
})
.required();


function ContactForm() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {
        register, 
        handleSubmit,
        formState: {errors},
    }   = useForm({
        resolver: yupResolver(schema),
    });

    console.log(errors);


    async function onSubmit(data)  {
        console.log(data);

        const options = {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(data) 
        };  

        
        try {
           setIsLoading(true);
           setError(null);

           const response = await fetch(url, options);
           const json = await response.json();
           
           if(!response.ok ) {
             return setError(json.errors?.[0]?.message ?? "There was an error" ); 
           }
        }
        catch(error) {
            setError(error.toString());
        }
        finally {
            setIsLoading(false);
        }
    }

    
  return ( 
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>Full Name:</label>
                <input $isActive={true} {...register("fullName") }  />
                {error.fullName && <ValidationMessage>{error.fullName.message}</ValidationMessage>}
            </div>
            <div>
                <label>Subject:</label>
                <input $isActive={true} {...register("subject") }  />
                {error.subject && <ValidationMessage>{error.subject.message}</ValidationMessage>}
            </div>
            <div>
                <label>E-mail:</label>
                <input $isActive={true} {...register("email") }  />
                {error.email && <ValidationMessage>{error.email.message}</ValidationMessage>}
            </div>
            <div>
                <label>Body:</label> 
                 <input $isActive={true} {...register("body") }  />
                {error.body && <ValidationMessage>{error.body.message}</ValidationMessage>}
            </div>
            <div>
               <button $isActive={true} type="submit">{isLoading ? "submit the form" : "display an error" }</button>   
            </div>   
        </form>
    </div>
    );
}

export default ContactForm;


