//Q1. square root of the each element present in array
//sol1.
let arr=[25,36,49,64,81]
 let newSqrt= arr.map((currentElement) => {
    return Math.sqrt(currentElement)
 })

 console.log(newSqrt)

 //Q2. Multiply each element by 2 and return only those element which are greater than 10
 //sol2.
 let arr1= [2,3,4,6,8]
  let multiArr= arr1.map((currentElement) => {
    return currentElement*2
  }).filter ((currentElement) => {//filter condition lagayenge ki jo value 10 se badi ho wo filter karke de 
    return currentElement>10
  })
  console.log(multiArr)
 