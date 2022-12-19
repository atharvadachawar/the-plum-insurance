
import React, {useState} from 'react'
import {Slider} from '@mui/material';



export default function InsuranceAmount() {

  const [percentage, setPercentage]= useState(0);

  const marks = [
    {
      value: 1,
      label: '₹1L'
    },
    {
      value: 2,
      label: '₹2L',
    },
    {
      value: 3,
      label: '₹3L',
    },
    {
      value: 4,
      label: '₹4L',
    },
    {
      value: 5,
      label: '₹5L',
    },
  ];

  

  return (

    <div>

          <div style={{ flexDirection: "column" }}>
        <div>
          <h1>Select your deductable amount</h1>
          <span>Select the deductable amount for the policy (or policies) below.
            (what is deductable?)</span>
        </div>

        <div className='header1'>
        <span >Self (Individual)</span>
        <div className='header_title'>
       <img src="https://thumbs.dreamstime.com/b/cute-happy-boy-face-cute-happy-boy-face-cartoon-vector-illustration-144716581.jpg" alt="face" />
       <span>John Doe</span>
        </div>
          </div>

        <div className='progressbar'>

      <span> Sum insured of ₹20,000 with a deductaible of <b>₹{percentage},00,000 </b> </span>
      <div className="slider" >

      <Slider
      aria-label="Restricted values"
      defaultValue={1}
      marks={marks}
      step={1}
     min={1} style={{backgroundColor:"white" , color:"brown" }}
     max={5}
      value={percentage} onChange={(event)=>{setPercentage(event.target.value)}}
       />
      {/* <input 
      //   type='range' min='1' max='5' step='1'
      //   value={percentage} onChange={(event)=>{setPercentage(event.target.value)}} 
      //    /> 
      //    <div>
      //    <span>₹1L</span>
      //    <span>₹2L</span>
      //    <span>₹3L</span>
      //    <span>₹4L</span>
      //    <span>₹5L</span>
  //    </div> */}

        
         </div>
        
        </div>
        

        
        <div style={{display:"flex"}}>
          <input
            type="checkbox" required
          />
          I understand that this insurance will not be utilized until ₹{percentage},00,000 (deductible) is exhauted.
        </div>

       
      </div>
    
      
    </div>
  )
}







//   const[percentage , setPercentage]= useState(1);



    


