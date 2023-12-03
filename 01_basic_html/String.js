console.log("-------------- video 60 ---------------");

//Strings

let para = "hello my friend"
console.log(para.length);

let fname = ' shubham        ';
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.slice(1,4)); //hub
console.log(fname.slice(1)); //hubam
console.log(fname.replace('bham','bhangi'));

let conc = para.concat(fname);
console.log(conc);

console.log(fname.trimStart());
console.log(fname.trimEnd());
console.log(fname.trim());
console.log(fname.indexOf('b'));//4
console.log(fname.includes('bh'));
