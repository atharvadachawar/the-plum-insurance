import React from 'react'
import "./component.css";

export default function reviewPage( {userData,plan, count}) {
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
   <div className='review_details'>{plan ==="" ? "--":plan} </div>
   <div className='review_details'>{ userData.MobileNumber ==="" ? "--":userData.MobileNumber} </div>
   <div className='review_details'>{userData.AddressLine01 ==="" ? "--":userData.AddressLine01} </div>
   <div className='review_details'>{userData.Pincode ===""  ? "--":userData.Pincode} </div>
   <div className='review_details'>{userData.State ==="" ? "--":userData.State} </div>
   </span>
      
    </div>
    {count===0 ?<h5 style={{color:"red"}}>Check the details carefully before submittion</h5>:null}
    </div>
  )
}

// /* <h5>Check the details carefully before submitting</h5> */