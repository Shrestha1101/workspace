//sol1.
const months= ['JAN', 'MAR', 'APR', 'JUN', 'JULY']
// const newMonths=months.splice(5,0,'DEC')
const newMonths=months.splice(months.length,0,'DEC')
console.log(months)

//sol2.
console.log(newMonths)

//sol3.
// const indexOfMonth= months.indexOf('MAR')

// if(indexOfMonth != -1)
// {
//     const updateMonth=months.splice(indexOfMonth,1,'mar')
//     console.log(months)
// }else{
//     console.log('No data found')
// }

//sol4.
// const indexOfMonth= months.indexOf('JUN')

// if(indexOfMonth != -1)
// {
//     const updateMonth=months.splice(indexOfMonth,1)
//     console.log(months)
//     console.log(updateMonth)//splice record check
// }else{
//     console.log('No data found')}

//agar hum chate hai apr ke bad ke jitne bhi data hai wo delete ho jaye toh uske liye below method use karenge
const indexOfMonth= months.indexOf('APR')

if(indexOfMonth != -1)
{
    const updateMonth=months.splice(indexOfMonth,Infinity)
    console.log(months)
    console.log(updateMonth)//splice record check
}else{
    console.log('No data found')}