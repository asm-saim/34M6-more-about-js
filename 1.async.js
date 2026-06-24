console.log(1);
console.log(2);

setTimeout(() => {
    console.log("My position is 3, but I called after 4sec")
}, 4000)

console.log(4);
console.log(5);

// Is JavaScript single-threaded? Yes.

// JavaScript is a single-threaded language.

// Single-threaded means JavaScript has one main thread and can execute only one piece of JavaScript code at a time.

// Imagine a cashier with one checkout counter: