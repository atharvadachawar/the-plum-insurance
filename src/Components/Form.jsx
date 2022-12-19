import React,{useState} from 'react'
import PersonalInfo from './personalInfo';
import InsuranceAmount from './InsuranceAmount';
import Declaration from './declaration';
import ReviewPage from './reviewPage';
import ProgressiveBar from './ProgressiveBar';


import "../App.css";
import { SlArrowLeft } from "react-icons/sl";


export default function Form() {


  const [page, setPage]=useState(0);
  const [index, setIndex]=useState(1);

  const [userData , setUserData] = useState({
    email:"",
    MobileNumber: "",
    AddressAddressLine0201: "",
    AddressAddressLine0202: "",
    Pincode : "",
    State: ""

  });

  const pageTitles =["Personal Info","Insurance amout","declaration","review"];
  const pageDisplay =()=>{
    if(page===0){
      return <PersonalInfo userData={userData} setUserData={setUserData} />;
    }else if(page===1){
      return <InsuranceAmount />;
    }else if(page===2){
     return <Declaration />;
    }else{
      return <ReviewPage userData={userData} />;
    }
  }

  return (
    <>
    <div className='body'>
    <ProgressiveBar hidden={index>0}  step={index}  />

   <div className='main_container'>

   <div className='leftSide_container'>
    <button className='return'
    hidden={page===0}
    onClick={()=>{
      setPage((currPage)=>currPage-1);
      setIndex((currIndex)=>currIndex-1)  }}> <span><SlArrowLeft /></span></button>
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
   <div className='review_details'>{userData.email}</div>
   <div className='review_details'>{userData.MobileNumber} </div>
   <div className='review_details'> {userData.AddressLine01}  </div>
   <div className='review_details'> {userData.AddressLine02}  </div>
   <div className='review_details'>{userData.Pincode} </div>
   <div className='review_details'>{userData.State} </div>
    </span>

    </div> 
      </div>

   </div>
   
    <footer>
    {page !==pageTitles.length?
    <button className='button'
     onClick={()=>{setPage((currPage)=>currPage+1);
      setIndex((currIndex)=>currIndex+1) 
    }}>Next</button>:
     <button className='button'>Submit</button>
    }
    </footer>
     </div>
     </>
  )
}
