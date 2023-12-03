console.log("-------------- video 63 ---------------");

let arr = [1,2,3,4,5,6];
console.log(arr);
console.log(arr.length);
console.log(arr[3]);
console.log(arr[0]=56);
console.log(arr);

//console.log(arr.toString());
//console.log(typeof arr);

let myArr = [0,2,3,6,7,8]
console.log(myArr);

//POP
console.log(myArr.pop());
console.log(myArr);

//PUSH
console.log(myArr.push(45));
console.log(myArr);

//Shift
console.log(myArr.shift());
console.log(myArr);

//UNSSHIFT
console.log(myArr.unshift(90))
console.log(myArr)

//DELETE
console.log(delete myArr[2])
console.log(myArr);

//CONCAT TWO ARRAYS

let concat = arr.concat(myArr);
console.log(concat);

//CONCAT THREE ARRAY

let charArr = ['a','b','c','d','e'];

let threeArr = charArr.concat(arr,myArr);
console.log(threeArr);

console.log(threeArr.sort());

//SPLICE
//console.log(charArr.splice(1,3)); //['b', 'c', 'd']
//console.log(charArr); //['a', 'e']

//SLICE
console.log(charArr);
console.log(charArr.slice(1,3));
console.log(charArr);

//FOREACH
charArr.forEach((value,index,arr) =>{
    console.log(value,index,arr);
})

//FOR IN
for (const key in charArr) {
    console.log(charArr[key]);
}

let myObj = {
    id : 1001,
    employee : 'male',
    age : 38
}

for (const key in myObj) {
    console.log(key,'-',myObj[key]);
}

//FOR OF
for (const items of charArr) {
    console.log(items);
}

