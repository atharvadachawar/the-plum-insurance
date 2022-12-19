import React,{useState}from 'react'
import "./component.css";
import { RiArrowUpSLine} from "react-icons/ri";

export default function Collapsible(props) {
    const [open, setOpen] = useState(false);


const toggle = ()=> {
    setOpen(!open);
}
//
  return (
    <div >

     <button className='toggle_label' onClick={toggle}>{props.label} <RiArrowUpSLine className='icon' /></button>
     {open && <div className='toggle_children'>{props.children}</div>}
      
    </div>

  )
}
