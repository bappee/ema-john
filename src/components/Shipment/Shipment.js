import React from 'react';
import { useForm  } from 'react-hook-form';
import './Shipment.css'
import { useAuth } from '../Login/useAuth';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{ 
        console.log(data)}

        const auth= useAuth();
  
    return (
    
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
    
        
          {
            <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="name" />
            
            }
        
        {errors.name && <span className="error">name is required</span>}
        
          {
            <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="email" />
            
            }


        {errors.email && <span className="error">email is required</span>}

        <input name="AddressLine1" ref={register({ required: true })} placeholder="address 1" />
        {errors.AddressLine1 && <span className="error">AddressLine1 is required</span>}

        <input name="AddressLine2" ref={register} placeholder="address 2" />
       

        <input name="city" ref={register({ required: true })} placeholder="city" />
        {errors.city && <span className="error">city is required</span>}
        

        <input name="country" ref={register({ required: true })} placeholder="country" />
        {errors.country && <span className="error">country is required</span>}

        <input name="ZipCode" ref={register({ required: true })} placeholder="Zip code" />
        {errors.ZipCode && <span className="error">Zip Code is required</span>}

        <input type="submit" />
      </form>
    );
  };

export default Shipment;