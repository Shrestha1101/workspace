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
