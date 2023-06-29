//reduce method:
let arr1= [2,3,4,6,8]
  let multiArr= arr1.map((currentElement) => {
    return currentElement*2
  }).filter ((currentElement) => {//filter condition lagayenge ki jo value 10 se badi ho wo filter karke de 
    return currentElement>10
  }).reduce ((accumulator,currentElement) => {
    return accumulator+=currentElement
  })

  console.log(multiArr)