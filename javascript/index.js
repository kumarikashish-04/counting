console.log("hello world ");
console.log(3+5);
console.log("3+5",3+5,"is");
let age=25;
console.log(age);
if(age<20) console.log(age);
else console.log(age-5);
function solve(){
    var age=15;
    console.log(age);
}
solve();


// let is block scoped let mein redeclartion nhi possible haii sirf var mein posssible haii '

{
    let a=10;
    console.log(a);
}
let b=10;
console.log(b);
b="hello";
console.log(b);
b=3.4;
console.log(b);
b=true;
console.log(b);
b=null;
console.log(b);
const c=5;
console.log(c);
// c="hello";
// console.log(c);
let x;
console.log(x);
console.log(false||0||5||2||null);