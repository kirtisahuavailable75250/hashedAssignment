function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
alert( typeof foo() );

/*
In the above code output will be '2' which is a string.

Below I giving my point to the above question. 

* Inside the foo function we can see that variable x is declared and assigned the value 1. 

* Then function declared as function x() { }. However, due to hoisting, this declaration is moved to the top of the function scope.

* In the next line variable x is declared using var and assigned the string value '2'. This variable declaration also gets hoisted to the top, but it does not override the function declaration.

* When foo is called and executed, the last assignment to x is '2'.*/
