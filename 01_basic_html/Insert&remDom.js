// let elem = document.querySelector('.box');
// console.log(elem.innerHTML);

// elem = document.querySelector(".box");
// console.log(elem.outerHTML);

// elem = document.querySelector('.box').tagName;
// console.log(elem);

// elem = document.querySelector('.box');
// console.log(elem.nodeName);


let elem = document.querySelector('.box').textContent;
console.log(elem);

//hide the content
//elem = document.querySelector('.box').hidden='true'
//console.log(elem);

//console.log('----------------------------------');

//remove element
//elem = document.querySelector(".box").innerHTML = "<p>hi gandu</p>"
//console.log(elem);

//elem = document.querySelector('.box').innerHTML = 'bhakk bhosdike';
//console.log(elem);

//console.log('----------------------------------');

console.log('------ hasAtrribute & getAtrribute --------');

elem = document.querySelector('.box').hasAttribute('style');
console.log(elem);

elem = document.querySelector('.box').getAttribute('style');
console.log(elem);
