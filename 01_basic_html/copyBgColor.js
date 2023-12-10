let obj = {
    1: "Yellow",
    2: "Orange",
    3: "Lightgreen",
    4: "aqua",
    5: "red"
}
// Creating an array
const key = Object.keys(obj);

// Taking all the elements having class box
const boxes = document.getElementsByClassName("box");

// Looping through each box element
for (let index = 0; index < boxes.length; index++) {
    // Choosing a random key
    const randomKey = key[Math.floor(Math.random() * key.length)];

    // Taking the value corresponding to that key
    const randomValue = obj[randomKey];

    // Applying the random color to the current box element
    boxes[index].style.color = randomValue;
}


const background = document.getElementsByClassName("box");

// Looping through each box element
for (let index = 0; index < background.length; index++) {
    // Choosing a random key
    const randomKey = key[Math.floor(Math.random() * key.length)];

    // Taking the value corresponding to that key
    const randomValue = obj[randomKey];

    // Applying the random color to the current box element
    background[index].style.backgroundColor = randomValue;
}