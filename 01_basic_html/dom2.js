// document.body.firstElementChild.children[0].nextElementSibling.style.backgroundColor = 'orange';

//--------------------------------------------

//GET ELEMENT BY CLASSNAME

let boxes = document.getElementsByClassName('box');
console.log(boxes);
boxes[0].style.backgroundColor = 'red';

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = 'orange';
}


//--------------------------------------------

// GET ELEMENT BY ID
boxes = document.getElementById('mybox');
console.log(boxes);
boxes.style.backgroundColor = 'maroon';

//--------------------------------------------

// GET ELEMENT BY QUERY SELECTOR
let elem = document.querySelector('.box');
elem.style.backgroundColor= 'black';

// GET ELEMENT BY QUERY SELECTOR ALL

let ele = document.querySelectorAll('.box');
console.log(ele);

ele.forEach(e =>{  //using forEach loop
    e.style.backgroundColor = 'gray';
})

for (let i = 0; i < ele.length; i++) { //using for loop
    ele[i].style.backgroundColor = 'yellow';
    
}

// GET ELEMENT BY TAGNAME

let paragraph = document.getElementById('para');
console.log(paragraph.innerHTML);
let mypara = paragraph.getElementsByTagName('p');
console.log(mypara);

for (let i = 0; i < mypara.length; i++) {
    mypara[i].style.fontSize = '16px';
    
}