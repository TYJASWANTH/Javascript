// string is a combination of alphabits and special characters


let paword = "QweT&@#3691";
console.log(typeof paword);

//convert to lower case ar uppaer case

console.log(paword.toLowerCase());
console.log(paword.toUpperCase());

//how to check chaecters in a strring

console.log(paword.includes("Qwe"));
console.log(paword.includes("jass"))


//how to check index of a character in a string

console.log(paword.indexOf("w"));
console.log(paword.indexOf("x"));


//to check weather a string ends with a particular charcter or not

console.log(paword.endsWith("t"));
console.log(paword.endsWith("1"));

//replaceing a string

console.log(paword.replace("Qwe","R"));

//reversing string

const str = "my name is jaswanth i am form aurora";
const index = str.length;
let str2 = "";
for(let i=index;i>0;i--){
 str2 = str2.concat(str[i]);
}
console.log(str2);