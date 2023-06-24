//how to use map function. questin: we want a num greter than 9.
 const array=[1,4,7,9,16,20]

 let newArray= array.map((currentElement,index,arr) => {
  return  currentElement>=9
 })

 console.log(array);
 console.log(newArray);




