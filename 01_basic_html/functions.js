console.log("-------------- video 58 ---------------");
// Functions

function myname(name){
    console.log(`my name is ${name}`);
}

myname('shubham');
myname('sayali');
myname('ravi');
myname('gulab');

function mynum(num1,num2,num3=5){
    return num1 + num2 + num3;
}

let result= mynum(4,5);
console.log(result);

result= mynum(4,5,10);
console.log(result);

let myMarks = (math,code)=>{
    return math + code;
}
result = myMarks(58, 60);
console.log(result);

let submarks = (art,dance) => art + dance;

let sub = submarks(78,50);
console.log(sub);

