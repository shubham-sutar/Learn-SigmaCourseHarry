// let num = 6;
// let zero = 0;
// let mult = 1;

// for(let i = num; i > zero; i--)
// {
//     mult = mult * i;
// }
// console.log(`factorial of ${num} = ${mult}`);

// let bill = [80,10,500,100,200];

// let total = bill.reduce((acc,current) =>{
//     return acc+current
// },0)

let num = 6;
let zero = 0;
let mult = 1;
let numArr = [];

for(let i = num; i > zero; i--)
{
    //mult = mult * i;
    numArr.push(i);
}

console.log(numArr);


let factorial = numArr.reduce((acc,current) =>{
    return acc*current
},1)

console.log(`factorial of ${num} = ${factorial}`);

//console.log(`factorial of ${num} = ${mult}`);