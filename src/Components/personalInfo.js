import React ,{useState} from 'react';
import Collapsible from './Collapsible';
import './component.css';



export default function PersonalInfo( {userData , setUserData}) {
  
const [plan , setPlan] = useState("0");

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
    <option  value={600}>
    One (Individual)  
    Self </option>
    <option value={0}> 
     Pro (Individual)
    Parents</option>
    <option  value={600}>
    (Individual+Individual) Plus 
     Self+Parents</option>
    <option  value={1800}>
    Max (Floater) 
    Self+Spouse+Kids</option>
  </select>
    </div>
   
    </Collapsible>
    </div>
  
  
   
   <Collapsible label="Basic details (required)">
   <div className='detail_container'>

   <form id="form">

   <div className='item_wrapper1'>

   <div className='item'>
   <div>Personal email address</div>
   <input placeholder="Enter" type="email"  name="emailaddress"
   value={userData.email} onChange={(event)=> setUserData({...userData, email:event.target.value})}
   required="true"
   />
   </div>

   <div className='item'>
   <div>Address line 01</div>
   <input placeholder="Enter" type="address"  name="address1"  
    value={userData.AddressLine01} onChange={(event)=> setUserData({...userData, AddressLine01:event.target.value})}
    required />
   </div>

   <div className='item'>
   <div>Pincode</div>
   <input placeholder="Enter" type="number" name="pincode"
   value={userData.Pincode} onChange={(event)=> setUserData({...userData, Pincode:event.target.value})}
   required/>
   </div>
   
   </div>

   <div className='item_wrapper2'>

   <div className='item'>
   <div>Mobile number</div>
   <input placeholder="Enter" type="Number" name="mobileno"
   value={userData.MobileNumber} onChange={(event)=> setUserData({...userData, MobileNumber:event.target.value})} 
   required />
   </div>
   
   <div className='item'>
   <div>Address line 02</div>
   <input placeholder="Enter" type="text" name="address2"  
   value={userData.AddressLine02} onChange={(event)=> setUserData({...userData, AddressLine02:event.target.value})}/>
   </div>

  
   
  
   <div className='item'>
   <div>State</div>
   <input placeholder="Enter" type="text" name="state"
    value={userData.State} onChange={(event)=> setUserData({...userData, State:event.target.value})}
    required/>
   </div>

   </div>
  </form>
 
   </div>
   </Collapsible>
  
    </div>

  
    </div>
    
   
    </>
  )
}
