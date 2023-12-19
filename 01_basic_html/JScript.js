

// let numArr = [12,23,34];
// for (let i = 0; i < numArr.length; i++) {
//     if(numArr.length == 0)
//     {
//         console.log("false");
//     }
//     else
//     {
//         console.log("true");
//     }
    
    
// }

//To check if an array is empty using javascript

// let arr = [];

// function num(){
//     if(arr.length == 0)
//     {
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// }


// console.log(num());


let digitArray = []; //empty array


function num(...i){
    digitArray.push(i); //element store
    if(digitArray == 0) //compare
    {
        return false;
    }
    else{
        return true;
    }
}

console.log(num(23,45,56)); //pass arguments

console.log(digitArray); //checking