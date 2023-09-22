// import React from 'react';
// import Heading from "./Heading";
// import Para from "./Para";
// import Ordlist from './Ordlist';

// function App() {
//    return (<> 
//    <Heading />
//    <Para />
//    <Ordlist /> </> );
// }

// export default App;

import React from 'react';

function App() {
    let currTime= new Date(2020, 8,3,5);
currTime= currTime.getHours();
let greeting='';
const cssStyle={};
const heading ={
  textAlign: 'center'
};

if (currTime >=1 && currTime <12 ){
  greeting='Good Morning';
  cssStyle.color= 'green';
}else if(currTime>=12 && currTime <19){
  greeting='Good AfterNoon';
  cssStyle.color= 'orange';
} else {
  greeting='Good Night';
  cssStyle.color= 'black';
}

return (<>
 <div>
 <h1 style={heading}>Hello Sir,<span style={cssStyle}>{greeting} </span></h1>
 </div>
 </>);
}

export default App;