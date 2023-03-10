import React,{useState} from 'react'
import PersonalInfo from './personalInfo';
import InsuranceAmount from './InsuranceAmount';
import Declaration from './declaration';
import ReviewPage from './reviewPage';
import ProgressiveBar from './ProgressiveBar';
import Finalpage from './Finalpage';


import "../App.css";
import { SlArrowLeft } from "react-icons/sl";


export default function Form() {


  const [page, setPage]=useState(0);
  const [index, setIndex]=useState(1);
  const [plan , setPlan] = useState("");
  const [count, setCount]=useState(0);

  
  

  const [userData , setUserData] = useState({
    email:"",
    MobileNumber: "",
    AddressLine01: "",
    AddressLine02: "",
    Pincode : "",
    State: ""

  });

  const pageTitles =["Personal Info","Insurance amout","declaration","review"];
  const pageDisplay =()=>{
    if(page===0){
      return <PersonalInfo userData={userData} setUserData={setUserData} plan ={plan} setPlan={setPlan} />;
    }else if(page===1){
      return <InsuranceAmount />;
    }else if(page===2){
     return <Declaration />;
    }else if(page===3 || count ===0){
      return <ReviewPage userData={userData} plan ={plan} count={count} />;
    }
      else if(count >0){
      return <Finalpage userData={userData} plan ={plan} />;
    }
  }

  return (
    <>
    <div className='body'>
    <ProgressiveBar hidden={index>0}  step={index}  />

   <div className='main_container'>

   <div className='leftSide_container'>
    <button className='return'
    hidden={page===0 || count> 0}
    onClick={()=>{
      setPage((currPage)=>currPage-1);
      setIndex((currIndex)=>currIndex-1);
    if(count>0){
      setCount((currCount)=>currCount-1)
    }  }}> <span><SlArrowLeft /></span></button>
    </div>

    <div className='mid_continer'>{pageDisplay()}</div>


   <div className='rightSide_container'
   hidden={page>pageTitles.length-2}>

   <div className='header'>Form preview</div>

  <div className='section'>

   <span style={{flexDirection:"column"}}>
   <div className='review_details'>Personal email Id</div>
   <div className='review_details'>Mobile number</div> 
   <div className='review_details'>Address line 01</div> 
   <div className='review_details'>Address line 02</div> 
   <div className='review_details'>Pincode</div>
   <div className='review_details'>state</div>
   </span>

   <span style={{flexDirection:"column"}}>
   <div className='review_details'>{userData.email ==="" ? "--":userData.email}</div>
   <div className='review_details'>{ userData.MobileNumber ==="" ? "--":userData.MobileNumber} </div>
   <div className='review_details'> {userData.AddressLine01 ==="" ? "--":userData.AddressLine01}  </div>
   <div className='review_details'> {userData.AddressLine02 ==="" ? "--":userData.AddressLine02}  </div>
   <div className='review_details'>{userData.Pincode ===""  ? "--":userData.Pincode} </div>
   <div className='review_details'>{userData.State ==="" ? "--":userData.State} </div>
    </span>

    </div> 
      </div>

   </div>
   
    <footer >
    {page !==pageTitles.length?
    <button className='button'
     onClick={()=>{setPage((currPage)=>currPage+1);
      setIndex((currIndex)=>currIndex+1) 
    }}>Next</button>:
     <button className='button'   onClick={()=>{
      setCount((currCount)=>currCount+1)  }}
      hidden={count>0}>Submit</button>
    }
    </footer>
     </div>
     </>
  )
}
