let hex = () => {
    const newNum = Math.floor(Math.random() * 16777215).toString(16);
    let x = "#";
    return add = x.concat(newNum);
}

let back = () => {
    const newNum = Math.floor(Math.random() * 16777215).toString(16);
    let x = "#";
    return add = x.concat(newNum);
}

let color = hex(); // Generate Hex code
console.log(color);

let bgcolor = back();
console.log(bgcolor);

// let bgcolor = document.getElementsByClassName("box"); //select
// console.log(bgcolor); //check

// for (let i = 0; i < bgcolor.length; i++) {
//     bgcolor[i].style.backgroundColor = `${color}` // inject hex code
// }

let box1 = document.getElementsByClassName("box")[0]; //select
console.log(box1); //check
// box1.style.backgroundColor = `${color}`
// box1.style.color = `${bgcolor}`


// for (let i = 0; i < bgcolor.length; i++) {
//     bgcolor[i].style.backgroundColor = `${color}` // inject hex code
// }

