console.log("-------------- video 55 ---------------");

console.log("hello world");

let a = 5;
let b = 10;
let c = 5;

console.log(typeof (a+b+c));
console.log(a+b+c);

//object

let student = {
    fname : 'shubham',
    lname : 'sutar',
    qual : 'engineer'
}

console.log(student);
console.log(student.qual);

let studId = 1001;
let accountNo = 19001900190023n;
let fname = 'Shubham sutar';
let isEmployee = true;
let passport = null;
let mobileNo;

console.log([studId,accountNo,fname,isEmployee,passport,mobileNo]);
console.log(typeof passport);//objet

console.log("-------------- video 56 ---------------");

let age = 19;

if(age > 18){
    console.log(`your age is ${age} and your eligible for vote`);
}
else{
    console.log(`your not eligible`);
}

console.log("-------------- video 57 ---------------");

//for loop
num = 10;

for(let i = 2; i<=num; i++){
    for(let j = 1; j<=num; j++ ){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

//while loop

num = 10
let i = 0

while (i<=num) {
    console.log(i);
    i++;
}

//do while loop

num = 20;
let j = 0
do{
    console.log(j);
    j++;
}while(j<=num);

//foreach loop

let numArr = [1,2,3,4,5,6];
let newnumArr = [];

// numArr.forEach(items => {
//     console.log(items);
// });

// function myFunc(items){
//     console.log(items);
// }

numArr.forEach(items =>{
    console.log(items);
    newnumArr.push(items);
})

let charArr = ['a','b','c','d'];

for(const newChar of charArr){
    console.log(newChar);
}

for (const key in charArr) {
    console.log(charArr[key])
}

function newFunc(num1,num2){
    let result = num1 + num2;
    return result;
}

let add = newFunc(12,12);
console.log(add);

let digit = (num1,num2) =>{
    return num1 + num2;
}

console.log(digit(14,12));

student = {
    Fname : 'sayali sutar',
    age : 24,
    home : 'kolhapur',
    qual : 'engineer'
}

for (const key in student) {
    console.log(key,'-',student[key]);
}