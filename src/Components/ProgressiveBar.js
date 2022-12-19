import React,{/*useState */ } from 'react'
import "react-step-progress-bar/styles.css";
import {ProgressBar , Step} from "react-step-progress-bar";

export default function ProgressiveBar(props) {
  return (
    <div style={{paddingTop:"2em", paddingBottom:"1em"}}>
    
      <ProgressBar  
      percent={(props.step*25)}
      filledBackground="brown" 
    >
      <Step >
        {({ accomplished, index }) => (
        <div className={`step1 ${accomplished ? "completed":""}`}>
        </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index  }) => (
            <div className={`step ${accomplished ? "completed":""}`}>
            </div>
        )}
      </Step>
      <Step >
        {({ accomplished, index  }) => (
            <div className={`step ${accomplished ? "completed":""}`}>
            </div>
        )}
      </Step>
      <Step>
      {({ accomplished, index  }) => (
          <div className={`step ${accomplished ? "completed":""}`}>
          </div>
      )}
    </Step>
    <Step>
    {({ accomplished, index  }) => (
        <div className={`step4 ${accomplished ? "completed":""}`}>
        </div>
    )}
  </Step>
    </ProgressBar>
    </div>
  )
}
