import React from 'react';
import Add, {Sub, Mult, Div} from "./Calcuator";
 
function Master1(){
    return(
        <> 
<ul>
  <li> Sum of Two no. is {Add(30,3)}</li>
  <li> Sub of two no. is {Sub(30,3)}</li>
  <li> Mult of two no. is {Mult(10,3)}</li>
  <li> Div of two no. is {Div(10,3)}</li>
</ul></>
    )
}

export default Master1;