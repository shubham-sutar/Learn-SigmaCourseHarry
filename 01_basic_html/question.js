// Generate Hex code for background
let back = () => {
    const newNum = Math.floor(Math.random() * 16777215).toString(16);
    let x = "#";
    return add = x.concat(newNum);
}

// Generate Hex code for color
let color = () => {
    const newNum = Math.floor(Math.random() * 16777215).toString(16);
    let x = "#";
    return add = x.concat(newNum);
}

// checking Hex code for background
let fColor = back(); 
console.log(fColor);

// checking Hex code for color
let bgcolor = color();
console.log(bgcolor);

let box = document.getElementsByClassName("box"); //select
console.log(box); //checking

//for loop for bgcolor
for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = `${back()} `
}

//for loop for color
for (let i = 0; i < box.length; i++) {
    box[i].style.color = `${color()} `   
}