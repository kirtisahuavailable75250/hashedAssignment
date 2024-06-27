
function foo() {
    return x;
    x = 1;
    
    function x() { }
    
    var x = '2';
}
console.log( typeof foo() ); 


/*
The output will be "function". The function x is returned before the variable x is assigned a value, so it's still considered a function.
x=1 and var x = 2 are never executed as it comes after the return statement. 
*/