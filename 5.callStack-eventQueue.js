//call stack -LIFO
//Event Loop: Moves tasks from queue → stack

function one() {
    two();
    console.log(1);
}
function two() {
    setTimeout(() => {
        console.log("Even though I set in No:2 function, I moved to queue and called after the call stack")
    }, 0)
    three()
    console.log(2);
}
function three() {
    four();
    console.log(3);
}
function four() {
    console.log(4);
}
one();