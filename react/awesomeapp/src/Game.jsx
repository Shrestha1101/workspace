// // import React from 'react';
// // import Heading from "./Heading";
// // import Para from "./Para";
// // import Ordlist from './Ordlist';

// // function App() {
// //    return (<> 
// //    <Heading />
// //    <Para />
// //    <Ordlist /> </> );
// // }

// // export default App;

// import React from 'react';

// function App() {
//     let currTime= new Date(2020, 8,3,5);
// currTime= currTime.getHours();
// let greeting='';
// const cssStyle={};
// const heading ={
//   textAlign: 'center'
// };

// if (currTime >=1 && currTime <12 ){
//   greeting='Good Morning';
//   cssStyle.color= 'green';
// }else if(currTime>=12 && currTime <19){
//   greeting='Good AfterNoon';
//   cssStyle.color= 'orange';
// } else {
//   greeting='Good Night';
//   cssStyle.color= 'black';
// }

// return (<>
//  <div>
//  <h1 style={heading}>Hello Sir,<span style={cssStyle}>{greeting} </span></h1>
//  </div>
//  </>);
// }

// export default App;

import React from "react";

const Sgame = () => {
let x = '😄' ;
let y ='😃';
let z= '😃';

if ((x===y) && (y===z)){
  return (
 <>
  <div className='Slot_inner'> 
    <h1> 
       {x} {y} {z} 
    </h1>
    <h1> This is matching. </h1>
    <hr />
  </div>
  </>
  );
}else {
  return (
    <h1> not matching.</h1>
  );
}
};

const Game = () => {
  return (<>
    <h1 className='heading_style'> Welcome to <span style = {{fontWeight:'bold'}}> Slot Machine Game </span>
    </h1>
    <Sgame />
  </> 
  );
  };

  export default Game;
  
