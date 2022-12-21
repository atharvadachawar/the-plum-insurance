import React  from 'react';
import Collapsible from './Collapsible';
import './component.css';
import {Formik , Form  , ErrorMessage} from "formik";
import {userScheme , initialValues, renderError} from '../Validation/formValidation';



export default function PersonalInfo( {userData , setUserData,plan , setPlan}) {
  


const updatePlan = (e,val)=>{
console.log(e.target.value);
setPlan(e.target.value);




}

  return (
    <>
    <div className='container'>
    
    <div className='info_container'>
    <h2>Choose your plan</h2>
    Hello Shiva! <br/>
    <span>increase yours and your family's health insurance cover <b>20 lakhs</b> with Super top-up!</span>
    
    <div >
    <Collapsible label="Plan details">

    <div className='plan_conatiner'>
   
    <div style={{paddingBottom:"5px"}}>Your plan type</div>
    
   <select  className='select'
   value={plan}
   onChange={updatePlan} 
   >
    <option value="">Select your plan</option>
    <option  value="One">
    One (Individual)  
    Self </option>
    <option value="Pro"> 
     Pro (Individual)
    Parents</option>
    <option  value="Plus">
    (Individual+Individual) Plus 
     Self+Parents</option>
    <option  value="Max">
    Max (Floater) 
    Self+Spouse+Kids</option>
  </select>
    </div>
   
    </Collapsible>
    </div>
  
  
   
   <Collapsible label="Basic details (required)">
   <div className='detail_container'>

   <Formik
   initialValues={initialValues}
   validationSchema={userScheme}

   >

   <Form id="form">

   <div className='item_wrapper1'>

   <div className='item'>
   <label htmlFor=" emailaddress">Personal email address</label>
   <input placeholder="Enter" type="email"  name="emailaddress"
   value={userData.email} onChange={(event)=> setUserData({...userData, email:event.target.value})}
   required="true"
   />
   <ErrorMessage name="emailaddress" render={renderError} />

   </div>

   <div className='item'>
   <label htmlFor=" address1">Address line 01</label>
   <input placeholder="Enter" type="address"  name="address1"  
    value={userData.AddressLine01} onChange={(event)=> setUserData({...userData, AddressLine01:event.target.value})}
    required />
    <ErrorMessage name="address1" render={renderError} />
   </div>

   <div className='item'>
   <label htmlFor=" pincode">Pincode</label>
   <input placeholder="Enter" type="number" name="pincode"
   value={userData.Pincode} onChange={(event)=> setUserData({...userData, Pincode:event.target.value})}
   required/><ErrorMessage name="pincode" render={renderError} />

   </div>
   
   </div>

   <div className='item_wrapper2'>

   <div className='item'>
   <label htmlFor="mobileno">Mobile number</label>
   <input placeholder="Enter" type="Number" name="mobileno"
   value={userData.MobileNumber} onChange={(event)=> setUserData({...userData, MobileNumber:event.target.value})} 
   required />
   <ErrorMessage name="mobileno" render={renderError} />
   </div>
   
   <div className='item'>
   <label htmlFor="address2">Address line 02</label>
   <input placeholder="Enter" type="text" name="address2"  
   value={userData.AddressLine02} onChange={(event)=> setUserData({...userData, AddressLine02:event.target.value})}/>
   <ErrorMessage name="address2"  render={renderError} />
   </div>

  
   
  
   <div className='item'>
   <label htmlFor="state">State</label>
   <input placeholder="Enter" type="text" name="state"
    value={userData.State} onChange={(event)=> setUserData({...userData, State:event.target.value})}
    required/>
    <ErrorMessage name="state"  render={renderError} />  
   </div>
   <button  type="submit" id='btn'> Submit </button>
   </div>
  
   
  </Form>
  </Formik>
 
   </div>
   
   </Collapsible>
  
    </div>

  
    </div>
    
   
    </>
  )
}
