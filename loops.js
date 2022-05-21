for(let i=0;i<=4;i++){
    for(let j=0;j<=4;j++){
        console.log(i+"/n");
    }
}

//reversing the string

const str = "my name is jaswanth";
console.log(str.length);
const index = str.length-1;
let rv = " ";

for(let i=index ; i>=0 ; i--){
    rv = rv.concat(str[i]);
}
console.log(rv);

