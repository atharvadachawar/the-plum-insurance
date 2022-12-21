import React from 'react'
import "./component.css";

export default function reviewPage( {userData,plan}) {
  return (
    <div>
    <h1>Review and confirm payment</h1>
<div className='reviewPage_container'>

<span>
   <div className='review_details'> plan selected</div>
   <div className='review_details'>Mobile number  </div> 
   <div className='review_details'>Address line 01</div> 
   <div className='review_details'>Pincode</div>
   <div className='review_details'>state</div>
   </span>

   <span style={{flexDirection:"column"}}>
   <div className='review_details'>{plan} </div>
   <div className='review_details'>{userData.MobileNumber} </div>
   <div className='review_details'> {userData.AddressLine01}  </div>
   <div className='review_details'>{userData.Pincode} </div>
   <div className='review_details'>{userData.State} </div>
   </span>
      
    </div>
    </div>
  )
}
