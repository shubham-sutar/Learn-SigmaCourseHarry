// faulty calculator

let random = Math.random();

let num1 = prompt('Enter First Number:');
let op = prompt('Enter Operation:');
let num2 = prompt('Enter Second Number:');

let object = {
    '+' : '*',
    '*' : '/',
    '/' : '-',
    '-' : '+'
}

console.log(random);

if (random > 0.5) {
    alert(`${eval(`${num1} ${op} ${num2}`)}`);
}
else{
    op = object[op];
    alert(`${eval(`${num1} ${op} ${num2}`)}`)
}