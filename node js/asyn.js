/* function write(cb){
    setTimeout(() => {
    console.log("first statement");    
    }, 2000);
}

function ack(){
    console.log("second statement")
}

write();
ack(); */

function write(cb){
    setTimeout(() => {
    console.log("first statement"); 
    cb();   
    }, 2000);
}

/*function writeln(){
    setTimeout(() => {
    console.log("allocate state");   
    }, 10000);
} */

const ack =function(){
    console.log("second statement")
}

//write(writeln);
write(ack);


