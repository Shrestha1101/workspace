//how to scratch react:
// /*var React = require("react");*/
// import React from 'react';
// /*var ReactDom = require("react-dom");*/
// import ReactDom from 'react-dom';

// ReactDom.render( <h1> HELLO WORLD </h1>, 
// document.getElementById("root"));


// 2. if we want to use multiple JSX :
// import React from 'react';
// import ReactDom from 'react-dom';

// ReactDom.render(<div>
//     <h1> my name is Shrestha</h1>
//     <p> i am from Kanpur</p>
// </div>, document.getElementById('root'))


//  1 challenge : 
// import React from 'react';
// import ReactDom from 'react-dom';

// ReactDom.render(<>
//   <h1> 5 Netflix series</h1>
//   <p> Please find below list</p>
//   <ol>
//     <li> The Witcher: Season 3</li>
//     <li> Fatal Seduction: Season 1</li>
//     <li> Survival of the Thickest: Season 1</li>
//     <li> The Lincoln Lawyer: Season 2</li>
//     <li> The Lincoln Lawyer: Season 1</li>
//   </ol>
// </>, document.getElementById("root"))


// 2 Challange:
// import React from 'react';
// import ReactDom from 'react-dom';

//  const FstName = "Shrestha";
//  const LstName = "Agarhari";
//  const CurrDate= new Date().toLocaleDateString();
//  const CurrTime= new Date().toLocaleTimeString();

// ReactDom.render(<>
//   <h1> Hello, My name is {FstName} {LstName}</h1>
//    <p> date is {CurrDate} </p>
//   <p> Time is {CurrTime} </p> 
// </>, document.getElementById('root'));


//JSX Attribute:
// import React from 'react';
// import ReactDom from 'react-dom';

// const img1='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg';
// const img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkKGGGC11R_c1hI49CE5YWXya-ctkH3JDQqIGcxSK&s';

// ReactDom.render(
// <>
// <h1 contentEditable= "true" > This is my attribute class</h1>
// < img src ={img1} alt='randompictures' /> 
// < img src ={img2} alt='randompictures' /> 
// </>,
// document.getElementById('root')); //contentEditable se hum apne sentence ko edit kar sakte hai.
// //self close hota hai img element


//Importing CSS in react:
// import React from 'react';
// import ReactDom from 'react-dom';
// import "./index.css";

// ReactDom.render(
//   <h1 className='heading'> in this we import css files in react</h1>, 
//   document.getElementById('root')
// );//class is already reserve in react so for css we use className.

// import React from 'react';
// import ReactDom from 'react-dom';
// import "./index.css";

// const img1='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg';
// const img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkKGGGC11R_c1hI49CE5YWXya-ctkH3JDQqIGcxSK&s';

// ReactDom.render(<>
//   <h1 className="heading"> in this we import css files in react</h1>
//   <div ClassName="img_div">
//   < img src ={img1} alt="randompictures" /> 
//   < img src ={img2} alt="randompictures" />
//   </div> 
//   </>, 
//   document.getElementById('root')
// );//class is already reserve in react so for css we use className.
  

// Inline CSS:
// import React from 'react';
// import ReactDom from 'react-dom';
// import "./index.css";

// const img1='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg';
// const img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkKGGGC11R_c1hI49CE5YWXya-ctkH3JDQqIGcxSK&s';

// const heading={
//   color: 'green',
//   textTransform: 'capitalize'
// };

// ReactDom.render(<>
//   <h1 style= {{color: 'green',textTransform: 'capitalize'}}>
//    in this we import css files in react</h1> //instead of this we simply pass object name like heading.
//   <div ClassName="img_div">
//   < img src ={img1} alt="randompictures" /> 
//   < img src ={img2} alt="randompictures" />
//   </div> 
//   </>, 
//   document.getElementById('root')
// );


//3 Challenge:
// import React from 'react';
// import ReactDom from 'react-dom';
// import "./index.css";

// let currTime= new Date(2020, 8,2,15);
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

// ReactDom.render(<>
// <div>
// <h1 style={heading}>Hello Sir,<span style={cssStyle}>{greeting} </span></h1></div></>,
//  document.getElementById('root'));


//React Component:
// import React from 'react';
// import ReactDom from 'react-dom';
// import Heading from "./Heading";
// import Para from "./Para";
// import Ordlist from './Ordlist';

// ReactDom.render(<>
//   <Heading />
//   <Para />
//   <Ordlist /> </> ,document.getElementById('root'));

// //master component:
// import React from 'react';
// import ReactDom from 'react-dom';
// import App from "./App";

// ReactDom.render(<App /> ,document.getElementById('root'));


//challenge 3 with component:
// import React from 'react';
// import ReactDom from 'react-dom';
// import "./index.css";
// import Master from "./Master";

//  ReactDom.render(<Master />,document.getElementById('root'));


//challenge 5:
// import React from 'react';
// import ReactDom from 'react-dom';
// import Master1 from './Master1';
// // import Add, {Sub, Mult, Div} from "./Calcuator";

// ReactDom.render(<Master1 /> , document.getElementById('root'));

//Netflix App Project 1:
import React from 'react';
import ReactDom from 'react-dom';
import Card from "./Card";
import "./index.css";
import Data from './Data';

// ek sath sare card ko access karne ke liye ek fuctiom use kia map aur usme hi val pass kar diya
function ncard(val){
   return (
      <Card 
   imgsrc={val.imgsrc} 
   title={val.title}
    sname={val.sname}
    link={val.link}
   />
   );
}

ReactDom.render(<>

   <h1 className='heading_style'> List of 5 top Netflix Series </h1>
   {/* <Card 
   imgsrc={Data[0].imgsrc} 
   title={Data[0].title}
    sname={Data[0].sname}
    link={Data[0].link}
   />
   <Card 
   imgsrc={Data[1].imgsrc} 
   title={Data[1].title}
    sname={Data[1].sname}
    link={Data[1].link}
    />
   <Card 
   imgsrc={Data[2].imgsrc} 
   title={Data[2].title}
    sname={Data[2].sname}
    link={Data[2].link}
    />
    <Card 
   imgsrc={Data[3].imgsrc} 
   title={Data[3].title}
    sname={Data[3].sname}
    link={Data[3].link}
    />
    <Card 
   imgsrc={Data[4].imgsrc} 
   title={Data[4].title}
    sname={Data[4].sname}
    link={Data[4].link}
    /> */}
    {Data.map(ncard)}
   </> ,document.getElementById('root'));