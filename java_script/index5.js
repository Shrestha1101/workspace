//Q, Display only 280 characters of the string like the one used in twitter.

let mytwitts="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let myactualtwitts=mytwitts.slice(0,280)
console.log(myactualtwitts)
console.log(myactualtwitts.length)//check karne ke liye result sahi hai ya nahi