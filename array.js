// collection of data through indexes

const an=[10,20,43,21,98,54];
console.log(an);  //dispaly all numbers of arrayu
console.log(an[3]); //displaying through index

console.log(an[4]+an[5]); //appling operators on array


//insertion at end
an.push(30);
console.log(an);

//deletion at end
an.pop();
console.log(an);

//splice

an.splice(2,0,40);
console.log(an);

//delete in midddle

an.splice(2,1);
console.log(an);

//swamping in array

var a=an[1];
an[1]=an[2];
an[2]=a
console.log(an);

//displaying part of an array

const san= an.slice(2,5);
console.log(san);
  //index  0  1  2
//output - 20 21 98 
 

// finding element in an array
const result = an.find(e=> e>40);
console.log(result);

const re = an.find(e=> e>1000);
console.log(re);

// finding multiple values

const ra = an.filter(e=> e>21);
console.log(ra);

