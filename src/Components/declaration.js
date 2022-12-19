import React from 'react';
import './component.css';

export default function declaration() {
  return (
    <div className='declaration_container'>
    <h1>Declaration</h1>
    <div >
    <input
    type="checkbox"
    unchecked
  
  />I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreation drugs. 
  </div>
  <div >
  <input
  type="checkbox"
  unchecked
  
/>I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairments or defomities, diseases/condition. 
</div>
<div >
<input
type="checkbox"
unchecked

/>I have understood that there is 30 days waiting period for all diseases and 2 years on named aliments.(list of named aliements)
</div>
<div >
<input
type="checkbox"
unchecked/>I understand that this policy doesn't cover pre-existing diseases.
</div>
</div>
  )
}
