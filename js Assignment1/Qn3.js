var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );




// The output will be 1. The variable x within the function foo is hoisted as a function declaration, and its assignment does not affect the outer variable x.
